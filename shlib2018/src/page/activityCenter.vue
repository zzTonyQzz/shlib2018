<!-- 活动中心 -->
<template>
  <div class="container">
    <bread-crumb></bread-crumb>
    <!-- <title-tab @tab-change="changeTab" :tablist="tabs" :currenttab="curtab" ></title-tab> -->
    <tab-menu
      :menuList="tabs"
      :defaultActive="curtab"
      @currentActive="changeTab"
    ></tab-menu>
    <!-- 活动 -->
    <div class="theactives clearfix">
      <!-- 活动中心 -->
      <div class="activecenter" v-show="curtab === 0">
        <!-- 无数据提示 -->
        <none-data
          v-if="!center.list.length && !center.loading"
          msg="本月暂无活动"
        ></none-data>
        <ul class="clearfix">
          <li v-for="item in center.list" :key="item.id">
            <router-link
                  :to="{path: `/index/eventDetails?f=2&t=0&event=${item.id}`}">
            <activity-small :activity-obj="item" @focus-on="focusOnUpdateList(item.id)" @focus-off="focusOffUpdateList(item.id)"></activity-small>
            </router-link>
          </li>
        </ul>
        <!-- 活动中心分页，加载 -->
        <div class="paging">
          <pagination @page-change="pageChange" :total="center.totalNumb" :current="center.curr"></pagination>
        </div>
        <load-more @more-data="loadMore" :current="center.curr" :total="center.totalNumb" :load="center.loading"></load-more>
      </div>
      <!-- 活动日历 -->
      <div class="activecalendar" v-show="curtab===1">
        <div class="calendar clearfix" v-show="calendar.showCal">
          <vue-event-calendar
            :events="eventsList"
            @monthChanged="handleMonthChanged" 
            @dayChanged="handleDayChanged"
            @backCurrent="backToCurrent"
          ></vue-event-calendar>
        </div>
        <div class="calendarlist clearfix" v-show="calendar.showList">
          <div class="dailynavigate visible-xs">
            <span class="preday" @click="previousDay"><i class=" iconfont icon-arrow-left2"></i>前一天</span>
            <span class="curday" @click="showCalendar">{{calendar.calDay.title}}</span>
            <span class="nxtday" @click="nextDay">后一天<i class=" iconfont icon-arrow-right2"></i></span>
          </div>
          <div class="clearfix">
            <!-- 无数据提示 -->
            <none-data
              v-show="!calendar.list.length && !calendar.loading"
              msg="当前月暂无活动"
            ></none-data>
            <div v-for="(item,index) in calendar.list" :key="index" class="dailyactives">
            <div class="calendartitle hidden-xs">
              <span class="calendardate">{{item.dateTitle}}</span><span>{{item.count}}场活动</span>
            </div>
            <ul class="clearfix">
              <li v-for="acts in item.list" :key="acts.id">
                <router-link
                  :to="{path: `/index/eventDetails?f=2&t=1&event=${acts.id}`}">
                <activity-item :activity-obj="acts" @focus-on="focusOnUpdateList(acts.id)" @focus-off="focusOffUpdateList(acts.id)"></activity-item>
                </router-link>
              </li>
            </ul>
          </div>
          </div>
          <!-- 活动日历分页 -->
        <div class="paging">
          <pagination ref="calPager" @page-change="pageChange" :total="calendar.totalNumb" :current="calendar.curr"></pagination>
        </div>
        <load-more @more-data="loadMore" :current="calendar.curr" :total="calendar.totalNumb" :load="calendar.loading"></load-more>
        </div>
      </div>
      <!-- 我的活动 -->
      <div class="activemy" v-show="curtab === 2">
        <!-- 无数据提示 -->
        <none-data
          v-show="!mine.list.length && !mine.loading"
          msg="暂无关注的活动"
        ></none-data>
        <!-- 未登录显示 -->
        <div class="no-login" v-if="!isLogIn">
          <none-data
            msg=""
          ></none-data>
          <div class="no-login-msg"><a href="javascript:;" @click="logIn()">登录</a>后查看关注的活动</div>
        </div>
        <ul class="clearfix">
          <li v-for="(item, index) in mine.list" :key="index">
            <router-link
                  :to="{path: `/index/eventDetails?f=2&t=2&event=${item.id}`}">
              <activity-mine :activity-obj="item"  @focus-off="focusOffUpdateList(item.id)"></activity-mine>
            </router-link>
          </li>
        </ul>
        <div class="paging">
          <pagination @page-change="pageChange" :total="mine.totalNumb" :current="mine.curr"></pagination>
        </div>
        <load-more @more-data="loadMore" :current="mine.curr" :total="mine.totalNumb" :load="mine.loading"></load-more>
      </div>
    </div>
  </div>
</template>

<script>
import tabMenu from '../components/tabMenu';        // tab切换
import loadMore from '../components/loadMore';
import activityItem from '../components/activityItem';
import activitySmall from '../components/activitySmall';
import activityMine from '../components/activityMine';
import { activityCenter } from "../server/api"; // 活动中心接口
let self = null; // 自定义变量存储实例this

export default {
  name: "activityCenter",

  data () {
    return {
      tabs: [
        {
          method: '',
          tabName: '活动中心'
        }, 
        {
          method: '',
          tabName:'活动日历'
        }, 
        {
          method: '',
          tabName:'我的活动'
        }],
      curtab: this.$route.query.isActive - 0 || 0,
      center: { // 活动中心
        allList: [], // 存储所有活动列表
        list: [], // 分页活动列表
        curr: 1,  // 当前页
        totalNumb: 0, // 总页数
        perPage: 20,
        loading: true,  // 手机端是正否加载
      },
      calendar: { // 活动日历
        allTempList: [],  // 缓存所有数据，用于按日筛选
        allList: [],
        list: [],
        curr: 1,
        totalNumb: 0,
        perPage: 16,
        showCal: true,
        showList: document.body.clientWidth < 768 ? false : true,
        calDay: { // 手机端选中日期
          title: '2018年1月1日',  // 用于手机端显示
          date: '2018-1-1',   // 选中日期
          eventindex: null   // 选中日期在日历eventsList中的index
          },
        loading: true
        // centerLoading: true,
      },
      mine: { // 我的活动
        idList: [], // 存储我的活动id列表, 当从我的活动跳转到详情时，使用此id列表导航
        allList: [],
        list: [],
        curr: 1,
        totalNumb: 0,
        loading: true,
        perPage: 20  // 一次获取所有活动
      },
      perPage: 6,
      eventsList: [],
      isMob: this.$store.state.isMobile,
      isLogIn: this.ls.getItem('loginUserInfo')
    };
  },

  created () {
    self = this;
  },

  components: {
    tabMenu,
    loadMore,
    activityItem,
    activitySmall,
    activityMine
  },

  computed: {},

  mounted () {
    // this.getAllCenterList ();
    this.initActiveList();
  },

  methods: {
    initActiveList () { // 初始化时获取活动中心数据
      this.$EventCalendar.resetCurrMonth();
      let date = this.initDate();
      this.initCenterList(date.monthStart, date.monthEnd);
      this.initCalendarList(date.monthStart, date.monthEnd);
      this.initMyEventsList();
    },
    initCenterList (start, end) {   // 获取活动中心全部数据
      this.center.loading = true;
      this.getAllCenterListByDate(start, end).then((data) => {
        this.center.allList = data;
        this.center.totalNumb = Math.ceil(data.length / this.center.perPage);
        this.center.list = this.getCenterList(1);
        this.center.loading = false;
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.initCenterList(start, end);
            clearTimeout(t);
          }, 500);
        }
      });
    },
    initCalendarList (start, end) {   // 获取活动日历全部数据
      this.calendar.loading = true;
      this.getAllCalendarListByDate(start, end).then((data) => {
        this.calendar.allTempList = data;
        this.calendar.allList = data;
        this.calendar.curr = 1;
        this.calendar.totalNumb = Math.ceil(data.length / this.calendar.perPage);
        this.eventsList = this.collectEventsData(data);
        this.calendar.list = this.getCalendarList(1);
        this.$refs.calPager.init();
        this.calendar.loading = false;
      }).catch((error) => {
        if (error === '10001') {
          let t = setTimeout(() => {
            self.initCalendarList(start, end);
            clearTimeout(t);
          }, 500);
        }
      });
    },
    initCalEventsList (events) {  // 初始化日历事件列表
      this.eventsList = events;
    },
    initMyEventsList () {   // 获取我的活动，需要登录
      if (this.isLogIn) {
        this.mine.loading = true;
        this.getAllMyEventsList().then((data) => {
          this.mine.allList = data;
          this.mine.list = this.getMyEventsList(1);
          this.mine.loading = false;
          this.mine.totalNumb = Math.ceil(data.length / this.mine.perPage);
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    initDate () {   // 初始化日期
      let date = new Date();
      let date2 = new Date();
      // 当天日期 2018-03-03
      let curDate = self.utils.formatDate(date, '-').timerStr;
      date.setMonth(date.getMonth() - 1);
      // 距离当前前一个月的日期 2018-02-03
      let monthAgoDate = self.utils.formatDate(date, '-').timerStr;
      // date.setMonth(date.getMonth() + 1);
      // 获取当月长度 30/31/28
      let maxDay = (new Date(date2.getFullYear(), date2.getMonth() + 1, 0)).getDate();
      date2.setDate(1);
      // 获取月初日期
      let monthStart = self.utils.formatDate(date2, '-').timerStr;
      date2.setDate(maxDay + 1);
      // 获取月末日期
      let monthEnd= self.utils.formatDate(date2, '-').timerStr;

      return {
        curDate,
        monthAgoDate,
        monthStart,
        monthEnd
      }
    },
    // 关注活动后，更新其他标签
    focusOnUpdateList (id) {
      // 活动中心：需要更新活动日历，我的活动
      if (this.curtab === 0) {
        // 如果不在我的活动tab,更新我的活动
        this.initMyEventsList();
        this.calendar.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = true;
          }
        });
        this.calendar.list = this.getCalendarList(this.calendar.curr);
      }
      // 活动日历：需要更新活动日历，活动中心，我的活动
      if (this.curtab === 1) {
        // 如果不在我的活动tab,更新我的活动
        this.initMyEventsList();
        this.calendar.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = true;
          }
        });
        this.calendar.list = this.getCalendarList(this.calendar.curr);
        this.center.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = true;
          }
        });
        this.center.list = this.getCenterList(this.center.curr);
      }
      // 我的活动：需要更新活动中心，活动日历
      if (this.curtab === 2) {
        this.center.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = true;
          }
        });
        this.center.list = this.getCenterList(this.center.curr);
        this.calendar.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = true;
          }
        });
        this.calendar.list = this.getCalendarList(this.calendar.curr);
      }
    },
    // 取消关注活动后，更新其他标签
    focusOffUpdateList (id) {
      if (this.curtab === 0) {
        // 如果不在我的活动tab,更新我的活动
        this.initMyEventsList();
        this.calendar.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = false;
          }
        });
        this.calendar.list = this.getCalendarList(this.calendar.curr);
      }
      if (this.curtab === 1) {
        // 如果不在我的活动tab,更新我的活动
        this.initMyEventsList();
        this.center.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = false;
          }
        });
        this.center.list = this.getCenterList(this.center.curr);
        this.calendar.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = false;
          }
        });
        this.calendar.list = this.getCalendarList(this.calendar.curr);
      }
      if (this.curtab === 2) {
        for (let i = (this.mine.curr - 1) * this.mine.perPage, l = this.mine.allList.length; i < l; i++) {
          const element = this.mine.allList[i];
          if (id === element.id) {
            this.mine.allList.splice(i, 1);
            break;
          }
        }
        this.mine.list = this.getMyEventsList(this.mine.curr);
        this.center.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = false;
          }
        });
        this.center.list = this.getCenterList(this.center.curr);
        this.calendar.allList.map((item) => {
          if (item.id === id) {
            item.isFocus = false;
          }
        });
        this.calendar.list = this.getCalendarList(this.calendar.curr);
      }
    },
    /**
     * 获取活动中心列表数据
     * @param {String} start: 开始日期 exp: '2018-03-01'
     * @param {String} end: 结束日期 exp: '2018-04-01'
     */
    getAllCenterListByDate (start, end) {
      return activityCenter.getEventsMonth(start, end).then((data) => {
          let res = data.result.datas;
          if (!res.length) return Promise.resolve([]);
          return Promise.resolve(this.resDataHandel(res));
      }).catch((error) => {
        return Promise.reject(error);
      });
    },
    /**
     * 获取活动日历列表数据
     * @param {Boolean} ismonth: 是否是按月获取数据
     * @param {String} start: 开始日期 exp: '2018-03-01'
     * @param {String} end: 结束日期 exp: '2018-04-01'
     */
    getAllCalendarListByDate (start, end) {
      return activityCenter.getEventsMonth(start, end).then((data) => {
          let res = data.result.datas;
          if (!res.length) return Promise.resolve([]);
            // 按月获取，需要展开数据
          return Promise.resolve(this.calendarMonthDataHandel(res, {start, end}));
      }).catch((error) => {
        return Promise.reject(error);
      });
    },
    /**
     * 获取我的活动
     */
    getAllMyEventsList () {
      return activityCenter.getMyEvents(1, 10000).then((data) => {
        let res = data.result.datas;
          if (!res.length) return Promise.resolve([]);
          return Promise.resolve(this.myEventsDataHandel(res));
      }).catch((error) => {
        return Promise.reject(error);
      });
    },
    /**@augments
     * 活动中心列表分页
     * @param {Number} index: 页码
     */
    getCenterList (index) {
      this.center.curr = index;
      return this.center.allList.slice((index - 1) * this.center.perPage, index * this.center.perPage);
    },
    /**
     * 活动日期列表分页
     * @param {Number} index: 页码
     */
    getCalendarList (index) {
      this.calendar.curr = index;
      // let ls = this.calendar.allList.slice((index - 1) * this.calendar.perPage, index * this.calendar.perPage);
      return this.collectCalendarData(this.calendar.allList.slice((index - 1) * this.calendar.perPage, index * this.calendar.perPage));
    },
    /**
     * 我的活动列表分页
     * @param {Number} index: 页码
     */
    getMyEventsList (index) {
      this.mine.curr = index;
      return this.mine.allList.slice((index - 1) * this.mine.perPage, index * this.mine.perPage);
    },
    loadMore (index) {  // 手机端加载更多
      if (this.curtab === 0) {
        if (this.center.curr >= this.center.totalNumb) {
          // this.newsList = this.newsList.concat([]);
          return;
        } else {
          this.center.curr = index;
          // this.center.loading = true;
          this.center.list = this.center.list.concat(this.getCenterList(index));
          // this.center.loading = false;  
        }
      }
      if (this.curtab === 1) {
        if (this.calendar.curr >= this.calendar.totalNumb) {
          // this.newsList = this.newsList.concat([]);
          return;
        } else {
          this.calendar.curr = index;
          // this.calendar.loading = true;
          this.calendar.list = this.calendar.list.concat(this.getCalendarList(index));
          // this.calendar.loading = false;
        }
      }
      if (this.curtab === 2) {
        if (this.mine.curr >= this.mine.totalNumb) {
          // this.newsList = this.newsList.concat([]);
          return;
        } else {
          this.mine.curr = index;
          this.mine.loading = true;
          this.mine.list = this.mine.list.concat(this.getMyEventsList(index));
        }
      }
    },
    pageChange (index) {  // pc分页
      window.scrollTo(0,0);
      if (this.curtab === 0) {
        this.center.list = this.getCenterList(index);
      }
      if (this.curtab === 1) {
        this.calendar.list = this.getCalendarList(index);
      }
      if (this.curtab === 2) {
        this.mine.curr = index;
        this.mine.list = this.getMyEventsList(index);
      }
    },
    /**
     * Tab切换
     */
    changeTab (index) {
      this.curtab = index;
      // this.$router.push("activityCenter?isActive=" + index);
      this.$router.replace({
        // name: 'activityCenter',
        query: {isActive: index}
      });
    },
    /**
     * 日历换月
     * @param {Array} month: exp: '{cn:2018年03月}'
     */
    handleMonthChanged (month) {
      this.initCalEventsList([]);
      this.calendar.list.length = 0;
      this.calendar.totalNumb = 0;
      let date = getMonthStartEnd(month.cn);
      this.initCalendarList(date.mstart, date.mend);

      // 获取月初/月末Date
      function getMonthStartEnd (date) {  // 2018年03月
        let arr = date.split('年');
        let year = arr[0] - 0;
        let mth = arr[1].split('月')[0];
        // let maxDay = (new Date(year, mth, 0)).getDate();
        let mstart = year + '-' + mth + '-' + '01'; // 月初 '2018-02-01'
        let mend = self.utils.formatDate(new Date(year, mth, 1), '-').timerStr; // 月末 '2018-03-01'
        return {
          mstart,
          mend
        }
      }
    },
    /**
     * 日历点击日期
     * @param {Array} day: exp: '2018-03-03'
     */
    handleDayChanged (day) {
      this.getDailyData(day.date);
    },
    backToCurrent (month) {
      let date = this.initDate();
      this.initCalendarList(date.monthStart, date.monthEnd);
    },
    /**
     * 选中日期，不请求服务器，从月数据里筛选
     * @param {Array} dayDate: exp: '2018-3-13'
     */
    getDailyData (dayDate) {
      this.calendar.loading = true;
      if (this.isMob) {
        this.calendar.calDay.title = this.formateDate(dayDate, '-');
        this.calendar.calDay.date = dayDate;
        this.calendar.calDay.eventindex = this.calendar.calDay.eventindex === null ?  this.getIndex(dayDate) : this.calendar.calDay.eventindex;
        this.calendar.showCal = false;
        this.calendar.showList = true;
      }
      this.calendar.allList = this.calendarDailyDataHandel(this.calendar.allTempList, dayDate);
      this.calendar.totalNumb = Math.ceil(this.calendar.allList.length / this.calendar.perPage);
      this.$refs.calPager.init();
      this.calendar.list = this.getCalendarList(1);
      this.calendar.loading = false;
    },
    /**
     * 手机端上一天活动
     */
    previousDay () {
      if (this.calendar.calDay.eventindex <= 0) {
        return;
      }
      this.getDailyData(this.eventsList[--this.calendar.calDay.eventindex].date);
    },
    /**
     * 手机端下一天活动
     */
    nextDay () {
      if (this.calendar.calDay.eventindex >= (this.eventsList.length - 1)) {
        return;
      }
      this.getDailyData(this.eventsList[++this.calendar.calDay.eventindex].date);
    },
    showCalendar () { // 手机端显示和隐藏日历组件
      if (this.isMob) {
        this.calendar.showCal = true;
        this.calendar.showList = false;
        this.calendar.calDay.eventindex = null;
      }
    },
    formateDate (dateString, separator) {
      var temp = dateString.split(separator);
      return temp[0] + '年' + temp[1] + '月' + temp[2] + '日';
    },
    /**
     * 获取当前选中日期在eventsList中的index
     * @param {String} date: exp: '2018-3-03'
     */
    getIndex (date) {
      for (let i = 0, l = this.eventsList.length; i < l; i++) {
        const element = this.eventsList[i];
        if (date === element.date) {
          // console.log(i);
          return i;
        }
      }
      return false;
    },
    /**
     * 处理返回的数据,将数据转换为activityitem/activitysmall组件适用的对象格式
     * @param {Array} data: res.result.datas
     */
    resDataHandel (data) {
      let tempList = [];
      data.forEach(item => {
        tempList.push({
          id: item.id, // 活动详情页id
          // id: item.v2,
          cover: item.v7,
          title: item.v1,
          type: item.v5,
          isFocus: item.v8 ? (item.v8 === 'false' ? false : true) : false,  // 判断是否已经关注
          organizers: '', // 实际暂无字段
          location: item.v6,
          time: self.utils.timerHandle(item.v3, item.v4)
        });
      });

      return tempList;
    },
    /**
     * 我的活动返回数据处理,将数据转换为activityitem/activitysmall组件适用的对象格式
     * @param {Array} data: res.result.datas
     */
    myEventsDataHandel (data) {
      let tempList = [];
      this.mine.idList = [];
      this.ls.removeItem('myEvents');
      data.forEach(item => {
        this.mine.idList.push(item.v2);
        tempList.push({
          id: item.v2, // 活动详情页id
          // id: item.v2,
          cover: item.v11,
          title: item.v1,
          type: item.v5,
          isFocus: item.v8 ? (item.v8 === '0' ? true : false) : false,  // 判断是否已经关注
          organizers: '', // 实际暂无字段
          location: item.v6,
          time: self.utils.timerHandle(item.v3, item.v4)
        });
      });
      // this.ls.setItem('myEvents', this.mine.idList);
      return tempList;
    },
    // 从我的活动跳转到活动详情
    goToMyEventsDetail (id) {
      this.ls.setItem('myEvents', this.mine.idList);
      this.$router.push({
        name: 'eventDetails',
        query: {
          f: '2',
          t: '2',
          event: id
        }
      });
    },
    /**
     *  按月返回的数据处理，由于有跨天的活动，所以需要处理活动日历数据,按日期展开ajax数据
     *  @param {Array} data: res.result.datas
     *  @param {Object} date: exp: {start:'2018-03-01', end:'2018-03-31'}
     */
    calendarMonthDataHandel (data, date) {
      date.start = new Date((date.start + ' 00:00:00').replace(/\-/g, "/"));
      date.end = new Date((date.end + ' 00:00:00').replace(/\-/g, "/"));
      let temp = [];

      for (let j = 0, k = data.length; j < k; j++) {
        // const element = data[j];
        temp = temp.concat(spreadData(data[j]));
      }

      // temp.sort(function (a ,b) {
      //   return a.date < b.date ? 1 : -1
      // });
      // console.log(temp);
      return temp;

      // 判断活动是否跨天，如果是，则展开数据
      function spreadData(data) {
        let startTime = new Date(data.v3.replace(/\-/g, "/").slice(0, -2)),
            endTime = new Date(data.v4.replace(/\-/g, "/").slice(0, -2)),
            formatStart = '',
            formatEnd = '',
            tempList = [];
        if (Date.parse(endTime) < Date.parse(startTime)) {
          let tempTime = startTime;
          startTime = endTime;
          endTime = tempTime;
          formatStart = self.utils.formatDate(endTime, '-');
          formatEnd = self.utils.formatDate(startTime, '-');
        } else {
          formatStart = self.utils.formatDate(startTime, '-');
          formatEnd = self.utils.formatDate(endTime, '-');
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

          for (let j = 0, l = e.getDate() - s.getDate() + 1; j < l; j++) {
            tempList.push(
              {
                date: Date.parse(s.getFullYear() + '/' + (s.getMonth() + 1) + '/' + (s.getDate() + j) + ' 00:' + j + ':00'),
                header: s.getFullYear() + '-' + (s.getMonth() + 1) + '-' + (s.getDate() + j),
                //header: s.getFullYear() + '-' + self.utils.zeroPadding(s.getMonth() + 1) + '-' + self.utils.zeroPadding(s.getDate() + j),
                id: data.id, // 活动详情页id
                cover: data.v7,
                title: data.v1,
                type: data.v5,
                isFocus: data.v8 ? (data.v8 === 'false' ? false : true) : false,  // 判断是否已经关注
                organizers: '', // 实际暂无v8字段
                location: data.v6,
                time: self.utils.timerHandle(data.v3, data.v4)
              }
            )
          }

          return tempList;
        } else {
          // 同一天
          return [{
                date: Date.parse((data.v3).replace(/\-/g, "/").slice(0, -2)),
                header: startTime.getFullYear() + '-' + (startTime.getMonth() + 1) + '-' + (startTime.getDate()),
                id: data.id, // 活动详情页id
                cover: data.v7,
                title: data.v1,
                type: data.v5,
                isFocus: data.v8 ? (data.v8 === 'false' ? false : true) : false,  // 判断是否已经关注
                organizers: '', // 实际暂无v8字段
                location: data.v6,
                time: self.utils.timerHandle(data.v3, data.v4)
              }];
        }
      }
    },
    /**
     *  按天返回数据处理, 不再请求服务器，从按月获取的数据中筛选
     *  @param {Array} data: 展开后的数据
     *  @param {Object} date: 2018-3-12'
     */
    calendarDailyDataHandel (data, date) {
      let tempList = [];
      for (let i = 0, l = data.length; i < l; i++) {
        if (date === data[i].header) {
          tempList.push(data[i]);
        }
      }
      return tempList;
    },
    /**
     *  收集日历活动事件，只在按月查询时调用
     *  @param {Array} data: 展开后的数据
     */
    collectEventsData (data) {
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
    },
    /**
     *  活动日历数据按日分类
     *  @param {Array} data: 展开后的数据
     */
    collectCalendarData (data) {
      let tempList = [];
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

      return tempList;  // 活动日历列表

      function parseDate (dateName) {  // 处理日期(2018-03-03)
        let arr = dateName.split('-');
        return arr[0] + '年' + arr[1] + '月' + arr[2] + '日'
      }

      function findDate (dateName) {  // 查找日期列表是否已经存储了日期
        if (dates.indexOf(dateName) < 0) {
          return false;
        }
        return true;
      }
      // 遍历列表找对象
      function findObj (dateName) {
        // let tempdate = data[0].time.split(' ')[0];  // 存储日期
        let tempitem = {  // 按日期分组
          dateTitle: parseDate(dateName),  // 分组标题头
          count: 0,       // 分组数量
          list: []        // 分组数据
        };
        for (let i = 0, l = data.length; i < l; i++) {
          const item = data[i];
          if (item.header === dateName) {
            tempitem.list.push(item);
            tempitem.count++;
          }
        }
        tempList.push(tempitem);
      }
    },
    logIn () {
      self.commitEvent('changeshowLoginModal', true);
      self.commitEvent('changeTempPath', {
        path: 'reload'
      });
      self.utils.modalOpenEvent(true);
      return;
    }
  }
}

</script>
<style lang="less" scoped>
.container {
  padding-left: 0;
  padding-right: 0;
}
.theactives {
  // @media only screen and (max-width: 767px) {

  // }
  @media only screen and (min-width: 768px) {
    margin-top: 4px;
    // border-top: 1px solid #EEEEEE;
  }
  ul {
    padding-left: 0;
    margin-bottom: 0;
    li {
      list-style: none;
    }
  }
  .activecalendar {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 60px;
    .calendarlist {
      // margin-top: 30px;
      margin-right: 354px;
      padding-right: 0px;
      .calendartitle {
        margin-top: 30px;
        font-size: 18px;
        color: #333333;
        .calendardate {
          padding-right: 10px;
        }
      }
      @media only screen and (max-width: 767px) {
        margin-right: 0;
        padding-right: 0;
      }
      .dailynavigate {
        // margin-left: -15px;
        // margin-right: -15px;
        height: 36px;
        line-height: 36px;
        background-color: #F2F4F6;
        text-align: center;
        .curday {
          font-size: 15px;
          color: #333333;
        }
        .preday, .nxtday {
          font-size: 13px;
          color: #666666;
        }
        .preday {
          float: left;
          .iconfont {
            padding-right: 10px;
          }
        }
        .nxtday {
          float: right;
          .iconfont {
            padding-left: 10px;
          }
        }
      }
      .dailyactives {
        width: 100%;
        float: left;
        @media only screen and (max-width: 767px) {
          padding-left: 10px;
          padding-right: 10px;
        }
      }
    }
    ul {
      li {
        padding: 30px 0 30px 0;
        border-bottom: 1px solid #eeeeee;
        @media only screen and (max-width: 767px) {
          padding-top: 17px;
          padding-bottom: 15px;
        }
        @media only screen and (min-width: 768px){
          .activity-lists .activity-info {
            width: 380px !important;
          }
        }
      }
    }
    .calendar {
      margin-top: 30px;
      float: right;
      width: 344px;
      height: 336px;
      border: 1px solid #e0e0e0;
      @media only screen and (max-width: 767px){
        margin-top: 0;
        width: 100%;
        border: none;
        border-bottom: 1px solid #e0e0e0;
      }
    }
    @media only screen and (max-width: 767px) {
      // margin-right: -15px;
      // margin-left: -15px;
      padding-left: 0;
      padding-right: 0;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .activecenter, .activemy {
    margin-bottom: 60px;
    .no-login {
      text-align: center;
      .no-login-msg {
        color: #999;
        font-size: 14px;
      }
    }
    ul {
      padding-left: 10px;
      padding-right: 10px;
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
        padding-left: 15px;
        padding-right: 15px;
      }
    }
    li {
      width: 50%;
      float: left;
      padding-bottom: 35px;
      padding-top: 30px;
      border-bottom: 1px solid #eeeeee;
      &:nth-child(odd) {
        padding-right: 20px;
      }
      &:nth-child(even) {
        padding-left: 20px;
      }
      @media only screen and (max-width: 767px) {
        width: 100%;
        padding-top: 17px;
        padding-bottom: 15px;
        &:nth-child(odd) {
          padding-right: 0;
        }
        &:nth-child(even) {
          padding-left: 0;
        }
      }
    }
  }
}
a {
  text-decoration: none;
}
.paging {
  // text-align: center;
  margin-top: 60px;
  // >div{
  //   display: inline-block;
  // }
  @media only screen and (max-width: 767px) {
    display: none;
  }
}
</style>