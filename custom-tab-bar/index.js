Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    selected: 0,
    list: [{
        pagePath: "/pages/index/index",
        iconPath: "/images/tabbar/gift_cur.png",
        selectedIconPath: "/images/tabbar/gift_cur.png",
        text: "礼物"
      },
      {
        pagePath: "/pages/me/me",
        iconPath: "/images/tabbar/me_cur.png",
        selectedIconPath: "/images/tabbar/me_cur.png",
        text: "❤"
      }
    ]
  },
  methods: {
    switchTab(e) {      
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})