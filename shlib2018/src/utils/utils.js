/**
 * @name [utils.js 工具方法]
 * @author Xiaxs(xiaxiansheng@adinnet.cn)
 */

 export default {
  /**
   * [zeroPadding 数值小于10自动补零]
   * @param {Number, String} num
   * @return {String} 补零后数字值
   */
  zeroPadding (num) { 
    return num < 10 ? `0${num}` : `${num}`;
  },
  /**
   * [formatDate 格式化时间]
   * @param {Date} date
   * @return {String} '年月日时'
   * @example
   *    '20180319'
   */
  formatDate (date = new Date(), separator = '') {
    let self = this;
    let year = date.getFullYear(),
        month = self.zeroPadding(date.getMonth() + 1),
        day = self.zeroPadding(date.getDate()),
        hour = self.zeroPadding(date.getHours()),
        minute = self.zeroPadding(date.getMinutes());

    let dateItemObj = {
      year, month, day, hour, minute
    };
    let finalParams;
    // 有分隔符
    if ( separator ) {
      finalParams = Object.assign({}, dateItemObj, {
        timerStr: `${year}${separator}${month}${separator}${day}`
      });
    } else {
      finalParams = Object.assign({}, dateItemObj, {
        timerStr: `${year}${month}${day}${hour}`
      });
    }

    return finalParams;
  },
  timerHandle (start, end) {
    let self = this;
    let startTime = new Date(start.replace(/\-/g, "/").slice(0, -2)),
        endTime = new Date(end.replace(/\-/g, "/").slice(0, -2)),
        formatStart = '',
        formatEnd = '';
    // 如果结束日期小于开始日期，交换两个时间
    if (Date.parse(endTime) < Date.parse(startTime)) {
        formatStart = self.formatDate(endTime, '-'),
        formatEnd = self.formatDate(startTime, '-');
    } else {
        formatStart = self.formatDate(startTime, '-'),
        formatEnd = self.formatDate(endTime, '-');
    }
    let startHour = `${formatStart.hour}:00`,
        endHour = `${formatEnd.hour}:00`;
    let tempDate;
    if (formatStart.timerStr === formatEnd.timerStr) { // 同一天
      tempDate = `${formatEnd.timerStr} ${startHour} - ${endHour}`;
    } else {
      tempDate = `${formatStart.timerStr} ${startHour} - ${formatEnd.timerStr} ${endHour}`;
    }

    return tempDate;
  },
  /**
   * [splitArr 分割数组为指定数量一组]
   * @param {Array} arr 目标数组
   * @param {Int} groupLen 指定数量
   * @return {Array} 分割后的数组
   */
  splitArr (arr = [], groupLen = 2) {
    if (!arr.length) return;

    let result = [];
    for(let i = 0, len = arr.length; i < len; i += groupLen){
      result.push(arr.slice(i, i + groupLen));
    }
    return result;
  },
  /**
   * [isEmpty 判断对象对否为空]
   * @param {Object} target
   * @return {Boolean} true - 空对象, false - 非空对象
   */
  isEmpty (target) {
    if (!target) {
      return true;
    } else if (typeof target === 'object' && !Object.keys(target).length) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * [replacePunctuation 替换字符串中的所有标点符号]
   * @param {String} str 目标字符串
   * @return {String} 去除标点符号的字符串
   */
  replacePunctuation (str) {
    if (typeof str !== 'string') {
      str = str.toString();
    }
    return str.replace(/\+/g, ' ');
    // return str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, " ");
  },
  /** 
   * [currDates 当前日期]
   * @return {Object} y - 年, like => 2018
   *                  m - 月, like => 03
   *                  d - 日, like => 02
   *                  h - 时, like => 09
   *                  M - 分, like => 09
   *                  s - 秒, like => 07
   *                  ym - 年月, like => 201804
   *                  ymd - 年月日, like => 20180402
   */
  currDates () {
    let self = this;
    let date = new Date();
    let y = date.getFullYear(),
        m = `${self.zeroPadding(date.getMonth() + 1)}`,
        d = `${self.zeroPadding(date.getDate())}`,
        h = `${self.zeroPadding(date.getHours())}`,
        M = `${self.zeroPadding(date.getMinutes())}`,
        s = `${self.zeroPadding(date.getSeconds())}`,
        ym = `${y}${m}`,
        ymd = `${ym}${d}`
    return {
      y, m, d, h, M, s, ym, ymd
    }
  },
  getFirstEndDay (assignDay = new Date(), prevMonth = false) {
    // console.log(assignDay);
    let self = this;
    let nowdays = new Date(assignDay);
    if (nowdays == 'Invalid Date') {
      console.error('不合法的日期格式');
      return '';
    }
    let y = nowdays.getFullYear();
    let m = self.zeroPadding(prevMonth ? nowdays.getMonth() : nowdays.getMonth() + 1);
    if (m == 0 && prevMonth) {
        m = 12;
        y = y - 1;
    }
    
    let firstDay = `${y}-${m}-01`;
    let myDate = new Date(y, m, 0);
    let lastDay = `${y}-${m}-${myDate.getDate()}`;
    let nextMonthFirstDay = self.getDateStr(lastDay, 1);

    return {
      firstDay,
      lastDay,
      nextMonthFirstDay
    };
  },
  /** 
   * [getDateStr 获取指定日期前后的日期]
   * @param {String, Date} assignDay 指定日期, default: 当前日期
   * @param {Int} addDayCount 指定天数, 0 - 今天, > 0 今天后的日期, < 0 今天前的日期
   * @return {String} 指定日期前后的日期字符串
   */
  getDateStr (assignDay, addDayCount) {
    // console.log(assignDay);
    let self = this;
    let dd = new Date(assignDay.replace(/\-/g, "/"));
    dd.setDate(dd.getDate() + addDayCount); // 获取 addDayCount 后的日期
    let y = dd.getFullYear(),
        m = self.zeroPadding(dd.getMonth() + 1),
        d = self.zeroPadding(dd.getDate());

    return `${y}-${m}-${d}`;
  },
  /** 
   * [getScrollBarWidth 获取滚动条实际宽度]
   * @return {Int} 滚动条实际宽度
   */
  getScrollBarWidth () {
    let noScroll,
        scroll, 
        oDiv = document.createElement("div");
    oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
    noScroll = document.body.appendChild(oDiv).clientWidth;
    oDiv.style.overflowY = "scroll";
    scroll = oDiv.clientWidth;
    document.body.removeChild(oDiv);

    return noScroll - scroll;
  },
  /** 
   * [modalOpenEvent Modal显示事件]
   * @description Modal显示时禁止浏览器滚动, 同时设置body 'padding-right' 为 '滚动条实际宽度', 防止抖动
   * @param {Boolean} bl 是否显示Modal
   *    true - 显示Modal, 同时禁止浏览器滚动
   *    false - 隐藏Modal, 同时允许浏览器滚动
   */
  modalOpenEvent (bl) {
    let self = this;
    let oBody = document.body;
    let scrollBarWidth = `${self.getScrollBarWidth()}px`;

    oBody.className = bl ? 'modal-open' : '';
    oBody.style.cssText = bl ? `padding-right: ${scrollBarWidth}` : '';
  },
  // 生成唯一id
  guid() {
    return (S4() + S4() + S4() + S4() + S4());
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
  },
  /**
   * 获取每月的活动事件
   * 按月返回数据，由于有跨天的活动，所以需要处理活动日历数据,按日期展开ajax数据
   * @param {*} data :shlib.events.month返回数据 result.datas
   * @param {*} date : 日期对象{start: '2018-03-01',end:'2018-04-01'}
   */
  getEventsData (data, date) {
    if (data.length === 0) {
      return [];
    }
    let self = this;
    date.start = new Date((date.start + ' 00:00:00').replace(/\-/g, "/"));
    date.end = new Date((date.end + ' 00:00:00').replace(/\-/g, "/"));
    let tempList = [];
    // let events = [];  // 日历活动提示
    // let dates = []; // 保存日期列表

    for (let j = 0, k = data.length; j < k; j++) {
      tempList = tempList.concat(spreadData(data[j]));
    }

    tempList.sort(function (a ,b) {
      return a.date < b.date ? 1 : -1
    });

    return collectEventsData(tempList);

    // 判断活动是否跨天，如果是，则展开数据
    function spreadData (data) {
      // console.log(data);
      let startTime = new Date((data.v3).replace(/\-/g, "/").slice(0, -2)),
          endTime = new Date((data.v4).replace(/\-/g, "/").slice(0, -2)),
          formatStart = '',
          formatEnd = '',
          tempList = [];
      if (Date.parse(endTime) < Date.parse(startTime)) {
        let tempTime = startTime;
        startTime = endTime;
        endTime = tempTime;
        formatStart = self.formatDate(endTime, '-');
        formatEnd = self.formatDate(startTime, '-');
      } else {
        formatStart = self.formatDate(startTime, '-');
        formatEnd = self.formatDate(endTime, '-');
      }
      if (formatStart.timerStr !== formatEnd.timerStr) {
        // 活动跨天
        let s = 0, e = 0;
        if (Date.parse(startTime) < Date.parse(date.start)) {
          // 当前活动开始日期小于当前月份的开始日期
          s = date.start;
        } else {
          s = startTime;
        }
        if (Date.parse(endTime) > Date.parse(date.end)) {
          // 当前活动结束日期大于当前月份的结束日期
          e = new Date(date.end);
          e.setDate(0);
        } else {
          e = endTime;
        }
        // 活动跨天，进行展开
        for (let j = 0, l = e.getDate() - s.getDate() + 1; j < l; j++) {
          tempList.push(
            {
              date: Date.parse(s.getFullYear() + '/' + (s.getMonth() + 1) + '/' + (s.getDate() + j) + ' 00:' + j + ':00'),
              header: s.getFullYear() + '-' + self.zeroPadding(s.getMonth() + 1) + '-' + self.zeroPadding(s.getDate() + j),
              // id: data.id, // 活动详情页id
              // cover: data.v7,
              // title: data.v1,
              // type: data.v5,
              // organizers: data.v8 || '', // 实际暂无v8字段
              // location: data.v6,
              // time: self.timerHandle(data.v3, data.v4)
            }
          )
        }
        // console.log(tempList);
        return tempList;
      } else {
        // 同一天
        return [{
              date: Date.parse((data.v3).replace(/\-/g, "/").slice(0, -2)),
              header: startTime.getFullYear() + '-' + self.zeroPadding(startTime.getMonth() + 1) + '-' + self.zeroPadding(startTime.getDate()),
              // id: data.id, // 活动详情页id
              // cover: data.v7,
              // title: data.v1,
              // type: data.v5,
              // organizers: data.v8 || '', // 实际暂无v8字段
              // location: data.v6,
              // time: self.timerHandle(data.v3, data.v4)
            }];
      }
    }

    // 收集日历活动事件
    function collectEventsData (data) {
      let events = [];  // 日历活动提示
      let dates = []; // 保存日期列表
      for (let j = 0, k = data.length; j < k; j++) {
        const element = data[j];
        let dname = element.header;
        // let dname = element.time.split(' ')[0];
        if (!findDate(dname)) {
            dates.push(dname);
            findObj(dname);
        }
      }
      // console.log(events);
      return events; // 活动日历事件列表
      
      function findDate (dateName) {  // 查找日期列表是否已经存储了日期
        if (dates.indexOf(dateName) < 0) {
          return false;
        }
        return true;
      }
      // 遍历列表找对象
      function findObj (dateName) {
        let eventitem = {
          date: dateName,
          eventCount: 0
        };
        for (let i = 0, l = data.length; i < l; i++) {
          const item = data[i];
          if (item.header === dateName) {
            eventitem.eventCount++;
          }
        }
        events.unshift(eventitem);
      }
    }
  },
 }

 