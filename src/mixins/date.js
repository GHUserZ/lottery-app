import {
    formatDate,
    getCurrentMonth,
    getPreviousMonth,
    getYesterday
} from "../utils/tool"
export default {
    data() {
        return {
            modifiedBegin: this.formatDate(new Date(), 'yyyy-MM-dd 00:00:00'),
            modifiedEnd: this.formatDate(new Date(), 'yyyy-MM-dd 23:59:59'),
            columns: ['今日', '昨天', '本月', '上月']
        }
    },
    methods: {
        onChange(picker, value, index) {
            switch (index) {
                case 0:
                    this.getCurrentDay()
                    break
                case 1:
                    this.getYesterday()
                    break
                case 2:
                    this.getCurrentMonth()
                    break
                case 3:
                    this.getPreviousMonth()
                    break
            }
        },

        // 今日
        getCurrentDay() {
            this.modifiedBegin = this.formatDate(new Date(), 'yyyy-MM-dd 00:00:00')
            this.modifiedEnd = this.formatDate(new Date(), 'yyyy-MM-dd 23:59:59')
        },
        // 昨天
        getYesterday() {
            this.modifiedBegin = getYesterday()[0]
            this.modifiedEnd = getYesterday()[1]
        },
        // 本月
        getCurrentMonth() {
            this.modifiedBegin = this.formatDate(getCurrentMonth()[0], 'yyyy-MM-dd hh:mm:ss')
            this.modifiedEnd = this.formatDate(getCurrentMonth()[1], 'yyyy-MM-dd hh:mm:ss')
        },
        // 上月
        getPreviousMonth() {
            this.modifiedBegin = this.formatDate(getPreviousMonth()[0], 'yyyy-MM-dd hh:mm:ss')
            this.modifiedEnd = this.formatDate(getPreviousMonth()[1], 'yyyy-MM-dd hh:mm:ss')
        },
        formatDate(datestr,format){
          return formatDate(datestr,format)
        }
    }

}