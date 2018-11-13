Page({
    data: {
        show_share: false,  // 分享
        show_setting: false, // 设置
        show_publish: false, // 发表
        show_filter: false // 筛选
    },


    changeSetting() {
        this.setData({
            show_setting: !this.data.show_setting
        })
    },
    changeShare() {
        this.setData({
            show_share: !this.data.show_share
        })
    },
    changePublish() {
        this.setData({
            show_publish: !this.data.show_publish
        })
    },
    changeFilter() {
        this.setData({
            show_filter: !this.data.show_filter
        })
    }
})