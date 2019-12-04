import { getTeamOrderRecords } from "@/api/agency";
export default {
    data() {
        return {
            value: "全部彩种",
            option1: [{
                    text: "全部彩种",
                    value: "全部彩种"
                },
                {
                    text: "江苏快3",
                    value: "江苏快3"
                },
                {
                    text: "安徽快3",
                    value: "安徽快3"
                },
                {
                    text: "极速快3",
                    value: "极速快3"
                },
                {
                    text: "五分六合彩",
                    value: "五分六合彩"
                },
                {
                    text: "PC蛋蛋",
                    value: "PC蛋蛋"
                }
            ],
            list: [],
            loading: false, // 是否处于加载状态
            finished: false, // 是否已加载完所有数据
            pageNo: 0,
            pageSize: 15,
            tabData: [{
                    name: "待开奖",
                    id: 4
                },
                {
                    name: "未中奖",
                    id: 1
                },
                {
                    name: "已中奖",
                    id: 2
                },
                {
                    name: "已撤单",
                    id: 3
                }
            ],
            winStatus: 4
        }
    },
    methods: {
        onLoad() {
            let params = {
                pageNo: this.pageNo+1,
                pageSize: this.pageSize,
                winStatus: this.winStatus,
                lotteryName: this.value
            };
            getTeamOrderRecords(params).then(res => {
                let data = res.data
                this.list = this.list.concat(data.list);
                // 加载状态结束
                this.loading = false
                this.pageNo++
                // 数据全部加载完成
                if (this.list.length >= data.rowTotal) {
                    this.finished = true
                }

            });
            // 请求接口数据
            // announcementList(this.pageNum+1,this.pageSize,this.secCode).then(res => {
            //   var data = res.data.data
            //   // 拼接数据
            //   this.list = this.list.concat(data.list)
            //   // 加载状态结束
            //   this.loading = false
            //   this.pageNo++
            //   this.pageTotal = data.total
            //   // 数据全部加载完成
            //   if (this.list.length >= data.total) {
            //     this.finished = true
            //   }
            // })
            setTimeout(() => {
                this.loading = false;
                this.finished = true;
            });
        },
        async initTeamOrderRecords() {
            let params = {
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                winStatus: this.winStatus,
                lotteryName: this.value
            };
            await getTeamOrderRecords(params).then(res => {
                this.list = res.data.list;
            });
        },
        async getTeamOrderRecords() {

        },
        dropdownChange(v) {
            console.log(v);
        }
    }


}