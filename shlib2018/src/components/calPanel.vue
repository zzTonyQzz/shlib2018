<!-- vue日历组件 -->
<template>
  <div class="cal-wrapper">
    <div class="cal-header">
      <div class="l" @click="preMonth"><div class="arrow-left icon">&nbsp;</div></div>
      <div class="title">
        <span class="cal-title" @click="showMonthList()" ref="monthsList">{{curYearMonth.cn}}</span>
        <ul class="month-list" v-show="showmonth">
          <li 
          v-for="(m,i) in months" 
          :key="i"
          :class="{active: i === curIndex}"
          @click="chouseMonth(i)"
          >{{m}}</li>
        </ul>
      </div>
      <!-- 返回当前年月 -->
      <div class="back" title='返到当前年月' @click="backToCurrent"></div>
       <!--  -->
      <div class="r" @click="nextMonth"><div class="arrow-right icon">&nbsp;</div></div>
    </div>
    <div class="cal-body">
      <div class="weeks" v-if="showWeeks">
        <span
          class="item"
          v-for="(dayName, dayIndex) in i18n[calendar.options.locale].dayNames"
          :key="dayIndex"
          >
          {{i18n[calendar.options.locale].dayNames[(dayIndex + calendar.options.weekStartOn) % 7]}}
        </span>
      </div>
      <div class="dates" :class="{special: specialList}">
        <div v-for="(date,dindex) in dayList" class="item"
          :class="[{
            today: date.status ? (today == date.date) : false,
            event: date.status ? (date.eventCount != undefined) : false,
            [calendar.options.className] : (date.date == selectedDay)
          }, ...date.customClass]"
          :key="date.date"
          >
          <p class="date-num"
            @click="handleChangeCurday(date,dindex)"
          >
            {{date.status ? initToday(date.date.split('-')) : '&nbsp;'}}</p>
          <span
            class="is-today"
            v-if="date.status ? (today == date.date) : false"
            :style="{backgroundColor: customColor }"
          ></span>
          <span
            class="is-event"
            v-if="date.status ? (date.eventCount != undefined) : false"
          >{{date.eventCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../../static/js/i18n';
import { dateTimeFormatter, isEqualDateStr} from '../../static/js/tools.js';

const inBrowser = typeof window !== 'undefined';
export default {
  name: 'calPanel',
  data () {
    return {
      i18n,
      isToday: new Date().getDate(),
      isCurrMonth: new Date().getMonth() + 1,
      specialList: false,
      showmonth: false,
      months: ['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月'],
      curIndex: new Date().getMonth(),
      curDayIndex: null
    }
  },
  props: {
    events: {
      type: Array,
      required: true
    },
    calendar: {
      type: Object,
      required: true
    },
    selectedDay: {
      type: String,
      required: false
    },
    showWeeks: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dayList () {
      let firstDay = new Date(this.calendar.params.curYear, this.calendar.params.curMonth, 1);
      let dayOfWeek = firstDay.getDay();
      // 根据当前日期计算偏移量
      if (this.calendar.options.weekStartOn > dayOfWeek) {
        dayOfWeek = dayOfWeek - this.calendar.options.weekStartOn + 7;
        this.specialList = true;
      } else {
        dayOfWeek = dayOfWeek - this.calendar.options.weekStartOn;
        this.specialList = dayOfWeek === 5 ? true : false;
      }

      let startDate = new Date(firstDay);
      startDate.setDate(firstDay.getDate() - dayOfWeek);
      let item, status, tempArr = [], tempItem;
      for (let i = 0 ; i < 42 ; i++) {
        item = new Date(startDate);
        item.setDate(startDate.getDate() + i);

        if (this.calendar.params.curMonth === item.getMonth()) {
          status = 1;
        } else {
          status = 0;
        }
        tempItem = {
          date: `${item.getFullYear()}-${item.getMonth() + 1}-${item.getDate()}`,
          status: status,
          customClass: []
        }
        this.events.forEach((event) => {
          if (isEqualDateStr(event.date, tempItem.date)) {
            tempItem.eventCount = event.eventCount;
            tempItem.desc = event.desc || ''
            if (event.customClass) tempItem.customClass.push(event.customClass);
          }
        })
        tempArr.push(tempItem);
      }
      return tempArr
    },
    today () {
      let dateObj = new Date();
      return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
    },
    curYearMonth () {
      let tempDate = Date.parse(new Date(`${this.calendar.params.curYear}/${this.calendar.params.curMonth+1}/01`))
      return {
        cn: dateTimeFormatter(tempDate, this.i18n[this.calendar.options.locale].format),
        en: this.utils.formatDate(new Date(tempDate), '-').timerStr
      };
    },
    customColor () {
      return this.calendar.options.color;
    }
  },
  methods: {
    showMonthList () {
      this.showmonth = !this.showmonth;
    },
    chouseMonth (monthIndex) {  // 选择月份
      this.$EventCalendar.chouseMonth(monthIndex);
      this.$emit('month-changed', this.curYearMonth);
      this.curIndex = monthIndex;
      // this.curDayIndex = null;
    },
    initToday (date) {
      let [y, m, d] = date;
      return d == this.isToday && m == this.isCurrMonth ? '今天' : d;
    },
    nextMonth () {  // 下一个月
      this.$EventCalendar.nextMonth();
      this.$emit('month-changed', this.curYearMonth);
      this.curIndex === 11 ? this.curIndex = 0 : this.curIndex++;
      // this.curDayIndex = null;
    },
    preMonth () {  // 上一个月
      this.$EventCalendar.preMonth();
      this.$emit('month-changed', this.curYearMonth);
      this.curIndex === 0 ? this.curIndex = 11 : this.curIndex--;
      // this.curDayIndex = null;
    },
    handleChangeCurday (date,index) {
      // console.log(index)
      // this.curDayIndex = index;
      // 当月且有事件时才允许选择
      if (date.status && date.eventCount) {
        this.$emit('cur-day-changed', date.date);
      }
    },
    backToCurrent () {  // 返回当前年/月
      let done = this.$EventCalendar.resetCurrMonth();
      if (done === false) {
        return;
      }
      this.$emit('back-current', this.curYearMonth);
      this.curIndex = this.isCurrMonth - 1;
    }
  },
  mounted () {
    document.addEventListener('click', (e) => {
      if (e.target != this.$refs.monthsList) {
        this.showmonth = false;
      }
    })
  }
}

</script>
<style lang="less" scoped>
@base-orange: #eda149;
@icon-border-size: 1px;

.cal-wrapper {
  .date-num{
    // line-height: 52px;
  }

  .cal-header {
    position: relative;
    width: 100%;
    height: 28px;
    font-size: 13px;
    background-color: #f3f4f6;
    // overflow: hidden;

      > div {
        float: left;
        line-height: 20px;
      }

      .title {
        width: 60%;
        line-height: 28px;
        text-align: center;
        position: relative;
        .cal-title {
          cursor: pointer;

          &:after {
            content: '';
            // margin-left: 5px;
            display: inline-block;
            height: 5px;
            width: 10px;
            // border-top: 5px #000 solid;
            border-width: 5px;
            margin-top: -2px;
            border-color: #000 transparent transparent;
            border-style: solid dashed dashed;
            position: absolute;
            top: 45%;
          }
        }
        
        .month-list {
          position: absolute;
          left: 46%;
          z-index: 5;
          background-color: #fff;
          box-shadow: 0 3px 16px 0 rgba(0,0,0,0.05);
          border-radius: 2px;
          width: 60px;
          .active {
            color: #4573AB;
            background-color: #ECF1F6;
          }
          li {
            color: #666;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            &:hover {
              color: #4573AB;
              background-color: #ECF1F6;
            }
          }
        }
      }
      .back {
        cursor: pointer;
        position: absolute;
        top: 1px;
        right: 20%;
        width: 24px;
        height: 24px;
        // background-color: #666;
        border-radius: 12px;
        background: url(/static/images/goto-libs.png) no-repeat center;
        background-size: 100%;
      }
      .l, .r {
        width: 20%;
        height: 100%;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      .l {text-align: left;}
      .r {text-align: right;}
  }

  .cal-body {
    width: 100%;

    .weeks {
      width: 100%;
      text-align: center;
      font-size: 1rem;
      overflow: hidden;

      .item {
        float: left;
        width: 14.285%;
        height: 50px;
      }
    }

    .dates {
      width: 100%;
      height: 303px;
      margin-top: 24px;
      padding-right: 3px;
      padding-left: 3px;
      text-align: center;
      overflow: hidden;

      &.special {
        margin-top: 6px;

        .date-num {line-height: 48px;}
      }

      .item {
        position: relative;
        float: left;
        display: block;
        width: 14.285%;
        height: 52px;
        text-align: center;
        cursor: default;
        color: #a4adb6;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        .date-num {
          position: relative;
          z-index: 2;
          font-size: 14px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          line-height: 28px;
          margin: 12px 0;
          display: inline-block;
        }

        &.event {
          cursor: pointer;

          .date-num {
            color: #474e56;
          }
        }

        &.selected-day {
          position: relative;
          // .is-event{
          //   // background-color: @base-orange;
          //   // background-color: red;
          // }
          .date-num {
            color: #fff;
            background-color: #4573AB;
          }
        }

        .is-event {
          position: absolute;
          // top: -2px;
          top: 0;
          left: 50%;
          z-index: 3;
          width: 18px;
          height: 14px;
          margin-left: -9px;
          color: #fff;
          font-size: 10px;
          line-height: 13px;
          background-color: #eda149;
          border-radius: 2px 0 7px 0;
        }
        
        .is-today {
          display: none;
          width: 12px;
          height: 4px;
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 2;
          margin-left: -6px;
          margin-top: 8px;
          border-radius: 50%;
          background-color: @base-orange;
          opacity: .8;
        }
      }
    }
  }
}

.iconStyle() {
  position: absolute;
  height: 100%;
  color: #adadad;
}

.arrow-left.icon {
  .iconStyle();
  left: 19px;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    border-top: solid @icon-border-size currentColor;
    border-right: solid @icon-border-size currentColor;
    transform: rotate(-135deg);
  }
}

.arrow-right.icon {
  .iconStyle();
  right: 21px;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    border-top: solid @icon-border-size currentColor;
    border-right: solid @icon-border-size currentColor;
    transform: rotate(45deg);
  }
}

h3, p{
  margin: 0;
  padding: 0;
}
</style>