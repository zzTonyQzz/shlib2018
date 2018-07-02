/**
 * @name: API - 统一管理API请求
 * @author: Xiaxs(xiaxiansheng@adinnet.cn)
 */
import Vue from 'vue';
import { Axios } from '../server';  // Vue-Axios ajax请求
import SHA256 from 'sha256';      // SHA256加密算法
import ls from '../utils/ls';    // localStorage
import utils from '../utils/utils';     // 通用工具方法

// 今天
let currentDate = utils.formatDate(new Date(), '-').timerStr;

const baseUrl = '/apis/';   // dev模式代理内配置
// const baseUrl = ''; 

const config = {
  tokenRequest: `${baseUrl}token?`,   // token接口http地址
  apiRequest: `${baseUrl}api?`,       // api接口http地址
  validMethod: 'token_acquire',       // 获取 AAT | UAT | URT使用, 固定参数
  unvalidMethod: 'token_nullify',     // 注销 AAT | UAT | URT使用, 固定参数
  refreshMethod: 'token_refresh',     // 刷新 AAT | UAT | URT使用, 固定参数
  appId: 'shlib.web.h5.1',              // app id => 固定
  appsecret: 'FE588C8B064805CF3AF5FB722EAF4419D7B67574', // app secret => 客户提供, 固定
  // deviceId: 'hqxu20171028',             // 访问网站设备id
  deviceId: utils.guid(),             // 访问网站设备id
  aat: ls.getItem('AAT'),   // 获取登录后存储的 AAT 信息
  uat: ls.getItem('UAT'),   // 获取登录后存储的 UAT 信息
  urt: ls.getItem('URT'),   // 获取登录后存储的 URT 信息
  uatexpiretime: 'uat_1'    // uat失效时间（1天/7天），不传值默认1天
};

/**
 * [tokenHandle 平台令牌]
 * @param getAAT => 生成AAT
 * @param getUATURT => 生成 UAT | URT
 * @param refreshUATURT => 刷新 UAT | URT
 * @param nullifyAATUAT => 注销AAT | UAT
 * @param getUATURTThirdPart => 第三方登录生成 UAT | URT
 * @param validcheckToken => token验证
 * @param lsURTUAT => 本地存储URT | UAT
 */
export const tokenHandle = {
  getAAT () {
    let self = this;
    let date = utils.formatDate().timerStr;
    let secret = SHA256(config.appId + date + config.appsecret);
    return Axios({
      url: config.tokenRequest,
      params: {
        method: config.validMethod,
        type: 'aat',
        appid: config.appId,
        //secret,
        deviceid: config.deviceId
      }
    })
    .then(res => {
      const AAT = res.aat;
      config.aat = AAT;
      self.validcheckToken('aat')
      .then(inner => {
        config.aat = AAT;
        ls.setKeysList({
          AAT: AAT,
          AAT_exptime: Date.parse(res.expiretime_aat)
        });
        //ls.setItem('AAT', AAT); // 存储AAT
        //ls.setItem('AAT_exptime', Date.parse(res.expiretime_aat)); // 存储AAT失效时间
      });
    });
  },
  getUATURT ({username ='', password = '', tokentype = ''}) {
    let self = this;
    return Axios({
      url: config.tokenRequest,
      params: {
        method: config.validMethod,
        type: 'uat',
        username,
        password,
        tokentype,
        aat: config.aat
      }
    }).then(res => {
      config.uat = res.uat;
      config.urt = res.urt;
      // 本地存储UAT | URT
      ls.setKeysList({
        UAT: res.uat,
        URT: res.urt,
        UAT_exptime: Date.parse(res.expiretime_uat),
        URT_exptime: Date.parse(res.expiretime_urt),
        shlibBorrower: res.us.shlibBorrower, // 用于获取 '我的悦读账单'
        loginUserInfo: {}
      });
    })
  },
  refreshUATURT () {
    let self = this;
    return Axios({
      url: config.tokenRequest,
      params: {
        method: config.refreshMethod,
        aat: config.aat,
        urt: config.urt
      }
    }).then(res => {
      config.urt = res.urt;
      config.uat = res.uat;
      self.lsURTUAT(res);
    })
  },
  lsURTUAT (res) {
    // 本地存储UAT | URT
    ls.setKeysList({
      UAT: res.uat,
      URT: res.urt,
      UAT_exptime: Date.parse(res.expiretime_uat),
      URT_exptime: Date.parse(res.expiretime_urt),
    });
  },
  nullifyAATUAT (tokentype) {
    let self = this;
    // 注销AAT
    let params = {
      method: config.unvalidMethod,
      type: tokentype,
      deviceid: config.deviceId,
      appid: config.appId
    };

    // 注销UAT
    if (tokentype === 'uat') {
      params = Object.assign({}, params, {
        uat: config.uat
      });
    }
    return Axios({
      url: config.tokenRequest,
      params
    }).then(() => {
      if (tokentype === 'uat') {
        config.uat = null;
        ls.removeList(['UAT', 'URT', 'loginUserInfo', 'UAT_exptime', 'URT_exptime']);
      } else {
        config.aat = null;
        ls.removeList(['AAT', 'AAT_exptime']);
      }
    });
  },
  getUATURTThirdPart (code) {
    let self = this;
    return Axios({
      url: config.tokenRequest,
      params: {
        method: config.validMethod,
        type: 'uat_oauth',
        aat: config.aat,
        code: code,
        tokentype: 'uat_7'
      }
    }).then(res => {
      self.lsURTUAT(res);
    })
  },
  validcheckToken (tokentype) {
    /**
     * 验证AAT | UAT | URT令牌
     * @param {String} tokentype: 'aat','uat','urt'
     */
    let tokenvalue = '';
    switch (tokentype) {
      case 'aat':
        tokenvalue = config.aat;
        break;
      case 'uat':
        tokenvalue = config.uat;
        break;
      case 'urt':
        tokenvalue = config.urt;
        break;
      default: break;
    }

    return Axios({
      url: config.tokenRequest,
      params: {
        method: 'token_validcheck',
        tokentype,
        tokenvalue
      }
    })
    .catch(err => {
      console.error('token 不合法!');
    });
  }
}

function checkToken () {
  if (!config.aat) {
    tokenHandle.getAAT();
  }
}

checkToken();
/**
 * 退出登录
 */
export const logOut = () => {
  ls.removeList(['UAT', 'URT', 'loginUserInfo', 'UAT_exptime', 'URT_exptime', 'exList', 'shlibBorrower', 'lossAndFindUrl']);
  config.uat = '';
  config.urt = '';
}

/**
 * api - 获取二维码读者证
 */
export const getQrcodeId  = function () {
  let params = {
    apiid: 'shlib.qrid',
    uat: config.uat
  };

  return apiUnityHandle(params);
};

/**
 * api - 新闻公告
 *    1. 新闻列表
 *    2. 新闻详情
 *    3. 详情页导航
 */
export const NewsBulletin = {
 /**
  * 新闻公告 - 获取新闻公告列表
  * @param {String} type 查询类型 => 新闻 | 公告
  * @param {Number} page 页码
  * @param {Number} pagesize 每页显示, default = 30
  */
 getNewsList (type, page = 1, pagesize = 30) {
   let assignParams = encodeURIComponent(`page=${page}&pagesize=${pagesize}&type=${type}`);
   let params = {
     apiid: 'shlib.news',
     parm: assignParams
   };

   return apiUnityHandle(params);
 },
 /**
  * 新闻公告 - 获取新闻详情
  * @param {Number} newsid 新闻id
  */
 getNewsDetail (newsid) {
   let assignParams = encodeURIComponent(`newsid=${newsid}`);
   let params = {
     apiid: 'shlib.newsinfo',
     parm: assignParams
   };

   return apiUnityHandle(params);
 },
 // 详情页导航
 newsDetailNavi (newsid) {
  let assignParams = encodeURIComponent(`newsid=${newsid}`);
  let params = {
    apiid: 'shlib.news.navi',
    parm: assignParams
  };

  return apiUnityHandle(params);
}
}

/**
 * api - 登录Modal
 *    1. 挂失 | 找回 => lossAndFind
 *    2. 其他登录方式 => otherLoginMethods
 *    5. 获取验证码图片 => getVerifyCode
 */

export const modalLogin = {
  lossAndFind () {
    let params = {
      apiid: 'shlib.auth.lossandfind'
    };
    
    return apiUnityHandle(params);
  },
  /**
   * 其他登录方式
   * @param {*} code 
   */
  otherLoginMethods (code) {
    let self = this;
    return Axios({
      url: config.tokenRequest,
      params: {
        method: config.validMethod,
        type: 'uat_oauth',
        aat: config.aat,
        code: code,
        tokentype: 'uat_7'
      }
    }).then(res => {
      config.uat = res.uat;
      config.urt = res.urt;
      // 本地存储UAT | URT
      ls.setKeysList({
        UAT: res.uat,
        URT: res.urt,
        UAT_exptime: Date.parse(res.expiretime_uat),
        URT_exptime: Date.parse(res.expiretime_urt),
        shlibBorrower: res.us.shlibBorrower, // 用于获取 '我的悦读账单'
        loginUserInfo: {}
      });
    })
  },

  getVerifyCode () {

  }
};

/**
 * api - 获取用户个人信息
 *      1. 获取用户个人信息
 *      2. 获取用户中心功能菜单
 *      3. 获取用户个人图书推荐
 */
export const userprofiles = {
  getUserProfiles ({uat = config.uat}) {
    let params = {
      apiid: 'shlib.auth.getuserinfo',
      uat
    };

    return apiUnityHandle(params);
  },
  getUserCenter ({uat = config.uat}) {
    let params = {
      apiid: 'shlib.auth.usercenter',
      uat
    };

    return apiUnityHandle(params);
  },
  getBookrecom () {
    let params = {
      apiid: 'shlib.user.bookrecom',
      uat: config.uat
    };

    return apiUnityHandle(params);
  },
  getInfobyids ({idsStr = ''}) {
    let assignParams = encodeURIComponent(`ids=${idsStr}`);
    let params = {
      apiid: 'shlib.books.infobyids',
      parm: assignParams
    };

    return apiUnityHandle(params);
  }
};

/**
 * api - 问答
 *    1. 问答列表
 *    2. 问答列表搜索关键词
 *    3. 问题详情翻页导航
 */
export const IssueService = {
  /**
   * 问答 - 获取问答列表
   * @param {String} type 问题类型
   * @param {Number} page 页码
   * @param {Number} pagesize 每页显示条数, default = 30
   */
  getIssueList (type, page = 1, pagesize = 30) {
    let assignParams = encodeURIComponent(`type=${type}&page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.qna.info',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  // 问题详情翻页导航
  getIssueListByID (id, page = 1, pagesize = 30) {
    let assignParams = encodeURIComponent(`id=${id}&page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.qna.navibyid',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 问答 - 搜索问答列表
   * @param {String} keyword 搜索关键词
   * @param {Number} page 页码 default: 1
   * @param {Number} pagesize 每页数量 default: 30
   */
  getSearchIssueList (keyword, page = 1, pagesize = 30) {
    let assignParams = encodeURIComponent(`keyword=${keyword}&page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.qna.search',
      parm: assignParams
    };
    
    return apiUnityHandle(params);
  }
};

/**
 * api - 活动中心
 *    1. 活动月历查询
 *    2. 单个活动详情查询与活动列表查询
 */

export const activityCenter = {
  /**
   * [getEventsMonth 活动月历查询]
   * @param {Date} date 查询日期
   */
  getEventsMonth (start = currentDate, end = currentDate) {
    let assignParams = encodeURIComponent(`start=${start}&end=${end}`);
    let params = config.uat ? {
      apiid: 'shlib.events.month',
      uat: config.uat,
      parm: assignParams
    } : {
      apiid: 'shlib.events.month',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * [getEventInfo 单个活动详情查询与活动列表查询]
   * @param {Date} date
   * @param {Int} pagesize
   */
  getEventInfo (date = currentDate, pagesize = 20) {
    let assignParams = encodeURIComponent(`date=${date}&page=1&pagesize=${pagesize}`);
    let params = config.uat ? {
      apiid: 'shlib.events.info',
      uat: config.uat,
      parm: assignParams
    } : {
      apiid: 'shlib.events.info',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * [getEventDetailByID 单个活动详情]
   * @param {String} id 活动id
   */
  getEventDetailByID (id) {
    let assignParams = encodeURIComponent(`id=${id}`);
    let params = config.uat ? {
      apiid: 'shlib.events.info',
      uat: config.uat,
      parm: assignParams
    } : {
      apiid: 'shlib.events.info',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 获取我的活动收藏
   * @param {Number} page ：页码
   * @param {Number} pagesize ：页大小
   */
  getMyEvents (page = 1, pagesize = 20) {
    let assignParams = encodeURIComponent(`page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.events.getmyevents',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 加入我的活动收藏
   * @param {Number} eventid ：活动id
   */
  addMyEvents (eventid) {
    let assignParams = encodeURIComponent(`eventid=${eventid}`);
    let params = {
      apiid: 'shlib.events.addmyevents',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 删除我的活动收藏
   * @param {Number} eventid ：活动id
   */
  removeMyEvents (eventid) {
    let assignParams = encodeURIComponent(`eventid=${eventid}`);
    let params = {
      apiid: 'shlib.events.removemyevents',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 活动详情导航
   * @param {Number} eventid ：活动id
   */
  naviEventsInfo (eventid) {
    let assignParams = encodeURIComponent(`id=${eventid}`);
    let params = config.uat ? {
      apiid: 'shlib.events.navi',
      uat: config.uat,
      parm: assignParams
    } : {
      apiid: 'shlib.events.navi',
      parm: assignParams
    };

    return apiUnityHandle(params);
  }
};

/**
 * api - 每周推荐
 *    1. 根据season id 获取所有该专题图书
 *    2. 顺序浏览所有专题图书
 *    3. 根据图书id获取图书详情
 *    4. 获取每周推荐往期列表
 */
export const resommended = {
  getWeeklyId (seasonid = 100) {
    let assignParams = encodeURIComponent(`seasonid=${seasonid}`);
    let params = {
      apiid: 'shlib.eread.weeklyrec.id',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  getWeeklyInfos (maxLength = 20) {
    let assignParams = encodeURIComponent(`page=1&pagesize=${maxLength}`);
    let params = {
      apiid: 'shlib.eread.weeklyrec.infos',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  getEpubinfo (bookid = 'hlibEpub_1501641072') {
    let assignParams = encodeURIComponent(`bookid=${bookid}`);
    let params = {
      apiid: 'shlib.eread.weeklyrec.epubinfo',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 往期查看
   */
  getWeeklyPastList () {
    let assignParams = encodeURIComponent(``);
    let params = {
      apiid: 'shlib.eread.weeklyrec.titles',
      parm: assignParams
    };

    return apiUnityHandle(params);
  }
};

/** 
 * api - 电子书检索, 书目检索, 期刊检索
 *      1. 电子书检索
 *      2. 期刊检索
 *      3. 书目检索
 */
export const ebookSearch = {
  equbSearch ({
    keyword = '',
    clsType = '',
    page = 1,
    pagesize = 20,
    classtype = '综合性图书',
    level = 'simple',
    source = 'wechat'
  }) {
    let assignParams = encodeURIComponent(`source=${source}&keyword=${keyword}&classtype=${clsType}&page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.epub.search',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  magazineSearch ({
    source = '',
    keyword = '',
    classtype = 'classh',
    page = 1,
    pagesize = 20,
    viewtype = '',
    order = 'date',
    ip = '10.1.31.111'
  }) {
    let assignParams = encodeURIComponent(`source=${source}&keyword=${keyword}&classtype=${classtype}&page=${page}&pagesize=${pagesize}&viewtype=${viewtype}&order=${order}&ip=${ip}`);
    // let params = config.uat ? {
    //   apiid: 'shlib.magazine.search',
    //   uat: config.uat,
    //   parm: assignParams
    // } : {
    //   apiid: 'shlib.magazine.search',
    //   parm: assignParams
    // };
    let params = {
      apiid: 'shlib.magazine.search',
      parm: assignParams
    };
    
    return apiUnityHandle(params);
  },
  getIPAC ({keywords = '', page = 1, pagesize = 20}) {
    let assignParams = encodeURIComponent(`query=title:${keywords} or author:${keywords}&page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.solr.search',
      parm: assignParams
    };

    return apiUnityHandle(params);
  }
};

/**
 * api - 分馆导航
 *    1. 列表，距离计算
 *    2. 根据馆ID查询
 */
export const libsQuery = {
  getLibsInfo ({lng = '', lat = '', district = '', level = '', page = 1, pagesize = 20}) {
    let assignParams = encodeURIComponent(`x=${lng}&y=${lat}&district=${district}&level=${level}&page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.libs.info',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  getLibIdInfo (id) {
    let assignParams = encodeURIComponent(`libid=${id}`);
    let params = {
      apiid: 'shlib.libs.libidinfo',
      parm: assignParams
    };

    return apiUnityHandle(params);
  }
};

/**
 * api - 图书借阅
 *    1. 当前借阅
 *    2. 借阅历史
 *    3. 图书续借
 */
export const lendingInfo = {
  currentLending () {
    let params = {
      apiid: 'shlib.bookinfo',
      uat: config.uat
    };

    return apiUnityHandle(params);
  },
  bookHistory (page = 1, pagesize = 16) {
    let assignParams = encodeURIComponent(`page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.bookhistory',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  bookrenew () {
    let params = {
      apiid: 'shlib.bookrenew',
      uat: config.uat
    };

    return apiUnityHandle(params);
  }
};

/**
 * api - 图书详情
 *    1. 根据图书id获取图书详情接口(电子书)
 *    2. 馆藏信息查询接口
 *    3. 加入我的图书书架
 *    4. 加入我的期刊书架
 *    5. 从书架删除接口&删除阅读进度记录
 *    6. 从期刊架删除接口&删除阅读进度记录
 *    7. 期刊详情
 *    8. 获取我的图书书架
 *    9. 获取我的期刊书架
 */
export const bookInfoApi = {
  epubinfo (bookid = '') {
    let assignParams = encodeURIComponent(`bookid=${bookid}`);
    let params = {
      apiid: 'shlib.eread.epubinfo',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  ipacInfo ({id = '', page = 1, pagesize = 1}) {
    let assignParams = encodeURIComponent(`query=id:${id}&page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.solr.search',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  bookcollection (bib = '') {
    let assignParams = encodeURIComponent(`bib=${bib}`);
    let params = {
      apiid: 'shlib.bookcollection',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 加入书架
   * @param {*} bookid ：图书id
   * @param {*} bookname ：图书名称
   * @param {*} progress ：阅读进度
   */
  addBookshelf (bookid = '', bookname, progress = 0) {
    let assignParams = encodeURIComponent(`bookid=${bookid}&bookname=${bookname}&progress=${progress}`);
    let params = {
      apiid: 'shlib.eread.addbookshelf',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 加入期刊架
   * @param {*} magid ：期刊id
   * @param {*} progress ：阅读进度
   */
  addMagshelf (magid, progress = 0) {
    let assignParams = encodeURIComponent(`magid=${magid}&progress=${progress}`);
    let params = {
      apiid: 'shlib.eread.addmagshelf',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 从书架删除接口&删除阅读进度记录
   * @param {*} bookid ：图书id
   */
  removeBookShelf (bookid) {
    let assignParams = encodeURIComponent(`bookid=${bookid}`);
    let params = {
      apiid: 'shlib.eread.removebookshelf',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 从期刊架删除接口&删除阅读进度记录
   * @param {*} magid ：期刊id
   */
  removeMagShelf (magid) {
    let assignParams = encodeURIComponent(`magid=${magid}`);
    let params = {
      apiid: 'shlib.eread.removemagshelf',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 期刊详情,传递aat会生成期刊外链
   * @param {*} magid ：期刊id
   */
  magazineInfo (magid = '') {
    let assignParams = encodeURIComponent(`magid=${magid}`);
    let params = config.aat ? {
      apiid: 'shlib.magazine.infos',
      aat: config.aat,
      parm: assignParams
    } : {
      apiid: 'shlib.magazine.infos',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 获取我的图书书架
   * @param {*} page 
   * @param {*} pagesize 
   */
  getMyBookShelf (page = 1, pagesize = 20) {
    let assignParams = encodeURIComponent(`page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.eread.getmybookshelf',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 获取我的期刊书架
   * @param {*} page 
   * @param {*} pagesize 
   */
  getMyMagShelf (page = 1, pagesize = 20) {
    let assignParams = encodeURIComponent(`page=${page}&pagesize=${pagesize}`);
    let params = {
      apiid: 'shlib.eread.getmymagshelf',
      uat: config.uat,
      parm: assignParams
    };

    return apiUnityHandle(params);
  }
};

/**
 * api - 图书/期刊分类
 *    1.获取图书分类
 *    2.获取期刊分类
 * 
 */
export const Classes = {
  /**
   * 获取图书分类
   */
  epubClasses () {
    let assignParams = encodeURIComponent(``);
    let params = {
      apiid: 'shlib.eread.epub.classes',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 获取期刊分类
   */
  magazineClasses () {
    let assignParams = encodeURIComponent(``);
    let params = {
      apiid: 'shlib.magazine.classes',
      parm: assignParams
    };

    return apiUnityHandle(params);
  }
}

/**
 * api - billBoard
 */
export const billBoard = {
  /**
   * 图书排行榜查询
   * @param {*} param0 
   */
  byBook ({type = '', clc = 'hqxu', lan = 'hqxu', date = utils.currDates().ym - 1}) {
    let assignParams = encodeURIComponent(`type=${type}&clc=${clc}&lan=${lan}&date=${date}`);
    let params = {
      apiid: 'shlib.book.billboard',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  /**
   * 图书排行榜top3集合
   * @param {*} type 
   * @param {*} date 
   */
  gather (type = '', date = utils.currDates().ym - 1) {
    let assignParams = encodeURIComponent(`type=${type}&date=${date}`);
    let params = {
      apiid: 'shlib.book.billboard.gather',
      parm: assignParams
    };

    return apiUnityHandle(params);
  },
  getClasses () {
    let params = {
      apiid: 'shlib.book.billboard.classes'
    };

    return apiUnityHandle(params);
  }
};

/**
 * 轮播图，瀑布流，友情链接，网站计数接口
 */
export const serverInfo = {
  /**
   * 轮播图
   */
  swiper () {
    let params = {
      apiid: 'shlib.serverinfo.carouselfigure'
    };

    return apiUnityHandle(params);
  },
  /**
   * 瀑布流
   */
  waterFallFlow () {
    let params = {
      apiid: 'shlib.serverinfo.waterfallflow'
    };

    return apiUnityHandle(params);
  },
  /**
   * 友情链接
   */
  getFurl () {
    let params = {
      apiid: 'shlib.serverinfo.furl'
    };

    return apiUnityHandle(params);
  },
  /**
   * 友情链接
   */
  getWebCounter () {
    let params = {
      apiid: 'shlib.serverinfo.webcounter'
    };

    return apiUnityHandle(params);
  }
}
/**
 * [apiUnityHandle 统一处理 `api` 接口公用函数]
 * @param {Object} queryParams 接口请求参数对象
 * @return {Object} axios 实例
 */

export const yzmHandle = {
    yzmFetch () {
        let params = {
            apiid: 'shlib.yzm.fetch'
        };
        return apiUnityHandle(params);
    },
    yzmCheck ({value = value, ip = '', useragent = navigator.userAgent}) {
        let assignParams = encodeURIComponent(`ip=${ip}&value=${value}&useragent=${useragent}`);
        let params = {
            apiid: 'shlib.yzm.check',
            parm: assignParams
        };
        return apiUnityHandle(params);
    }
};
export const doubanHandle = {
  doubanBookIsbn(isbn){
    let params = "/book/isbn/"+isbn;
      return doubanapiUnityHandle(params);
  }
};

function apiUnityHandle (queryParams) {
  let defaultParams = {
    aat: config.aat
  };
  let params = Object.assign({}, defaultParams, queryParams);

  return Axios({
    url: config.apiRequest,
    params
  });
}
function doubanapiUnityHandle (queryParams) {
    return Axios({
        url: '/doubanapis' + queryParams
    });
}
