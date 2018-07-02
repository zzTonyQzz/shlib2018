<template>
  <div class="__vev_calendar-wrapper">
    <cal-panel
      :events="events"
      :calendar="calendarOptions"
      :selectedDay='selectedDayEvents.date'
      @cur-day-changed="handleChangeCurDay"
      @month-changed="handleMonthChanged"
      @back-current="backToCurrent"
    >
    </cal-panel>
  </div>
</template>
<script>
/** 
 * [vue事件日历组件]
 *  props(接收参数)
 *    events => 事件数据列表
 *  
 *  Events(抛出事件)
 *    handleChangeCurDay => day-changed => 日期选择事件
 *    handleMonthChanged => month-changed => 月份选择事件
 * 
 * 参考: https://github.com/GeoffZhu/vue-event-calendar
 */
import { isEqualDateStr} from '../../static/js/tools'
import calPanel from './calPanel';

const inBrowser = typeof window !== 'undefined';
export default {
  name: 'vueEventCalendar',
  components: {
    calPanel
  },
  data () {
    return {
      selectedDayEvents: {
        date: 'all',
        events: this.events || []  // 默认显示所有事件
      }
    }
  },
  props: {
    events: {
      type: Array,
      required: true,
      default () {
        return [];
      },
      validator (events) {
        let validate = true;
        events.forEach((event, index) => {
          if (!event.date) {
            console.error('Vue-Event-Calendar-Error:' + 'Prop events Wrong at index ' + index)
            validate = false;
          }
        })
        return validate;
      }
    }
  },
  computed: {
    calendarOptions () {
      let dateObj = new Date();
      if (inBrowser) {
        return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA;
      } else {
        return {
          options: {
            locale: 'en', // zh
            color: ' #f29543'
          },
          params: {
            curYear: dateObj.getFullYear(),
            curMonth: dateObj.getMonth(),
            curDate: dateObj.getDate(),
            curEventsDate: 'all'
          }
        }
      }
    },
    calendarParams () {
      let dateObj = new Date();
      if (inBrowser) {
        return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA.params;
      } else {
        return {
          curYear: dateObj.getFullYear(),
          curMonth: dateObj.getMonth(),
          curDate: dateObj.getDate(),
          curEventsDate: 'all'
        }
      }
    }
  },
  created () {
    if (this.calendarParams.curEventsDate !== 'all') {
      this.handleChangeCurDay(this.calendarParams.curEventsDate);
    }
  },
  methods: {
    handleChangeCurDay (date) {
      let events = this.events.filter(function(event) {
        return isEqualDateStr(event.date, date);
      })
      if (events.length > 0) {
        this.selectedDayEvents = {
          date: date,
          events: events
        }
      }
      this.$emit('dayChanged', {
        date: date,
        events: events
      });
    },
    handleMonthChanged (yearMonth) {
      this.$emit('monthChanged', yearMonth);
    },
    backToCurrent (yearMonth) {
      this.$emit('backCurrent', yearMonth);
    }
  },
  watch: {
    calendarParams () {
      if (this.calendarParams.curEventsDate !== 'all') {
        let events = this.events.filter(event => {
          return isEqualDateStr(event.date, this.calendarParams.curEventsDate);
        })
        this.selectedDayEvents = {
          date: this.calendarParams.curEventsDate,
          events
        }
      } else {
        this.selectedDayEvents = {
          date: 'all',
          events: this.events
        }
      }
    },
    events () {
      this.selectedDayEvents = {
        date: 'all',
        events: this.events || []
      }
    }
  }
}
</script>
<style lang="less"></style>
