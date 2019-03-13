Component({
  data: {
    elements: [{
      title: 'TSUYAGLA 头发蓬松神器旅行款',
      name: 'TSUYAGLA',
      color: 'cyan',
      icon: 'https://img.alicdn.com/bao/uploaded/i3/2200625649546/O1CN01EJhLLU2KO7LF9SyDj_!!2200625649546.jpg_760x760Q50s50.jpg_.webp'
    }, {
      title: '日本*SUQQU毛孔洗净精华N 黑头角栓只要轻揉30秒50mL',
      name: 'SUQQU精华N',
      color: 'blue',
      icon: 'https://img.alicdn.com/imgextra/i3/228955765/O1CN011sSPmDWlcue855Y_!!228955765.jpg_640x640q85s150_.webp'
    }, {
      title: '法国山本初恋法式复古超仙大码裙子长裙春秋小众学院风连衣裙海军',
        name: '年轻人的潮流穿搭社区',
      color: '178',
        icon: 'https://img.alicdn.com/imgextra/i1/3302279675/O1CN01W8mXBp2LLCR2k7v0v_!!3302279675.jpg_640x640q85s150_.webp'
    }, {
        title: 'Rancy/澜茜刷子化妆刷套装12支粉刷初学者美妆工具全套组合眼影刷',
        name: 'Rancy/澜茜',
      color: '128',
        icon: 'https://img.alicdn.com/imgextra/i3/652934030/O1CN011fdmcGJCT2fN5I2_!!652934030.jpg_640x640q85s150_.webp'
    }, {
        title: 'FFAN泛泛 俏皮中的时髦 裙尾抽绳心机设计灯笼半身裙',
        name: '年轻人的潮流穿搭社区',
      color: '159',
        icon: 'https://img.alicdn.com/imgextra/i1/108727117/O1CN01vwJcwM22RdIeQtjDQ_!!108727117.jpg_640x640q85s150_.webp'
      }, {
        title: '「一个抽屉 / One Drawer」购物车物品4个打包',
        name: '一个抽屉',
        color: 'XX',
        icon: 'https://img.alicdn.com/imgextra/i6/TB1XK3HjoQIL1JjSZFhYXGDZFXa_M2.SS2_640x640q85s150_.webp'
      }, {
        title: '奇怪的包GET 德国采购longchamp龙骧单肩包新款马粉色雾霾蓝浆果紫卡其长柄短',
        name: '龙骧？',
        color: '685',
        icon: 'https://img.alicdn.com/imgextra/i1/2840177040/O1CN01teP8dM21sMo09Nbg7_!!2840177040.jpg_640x640q85s150_.webp'
      }, {
        title: '眼镜 任选 墨守下半框镂空墨镜女韩版潮透明有色眼镜复古超大框太阳镜男方脸',
        name: '墨守',
        color: '200',
        icon: 'https://img.alicdn.com/imgextra/i4/1801276058/TB2XvbshCBYBeNjy0FeXXbnmFXa_!!1801276058.jpg_760x760Q50s50.jpg_.webp'
      }, {
        title: 'ohsunny中长款防晒衣女新款护脸防紫外线薄款户外骑行连帽防晒服',
        name: 'ohsunny',
        color: '258',
        icon: 'https://img.alicdn.com/bao/uploaded/i3/3351172141/O1CN01NdJ8Rx1RgcTAeBHX2_!!3351172141.jpg_760x760Q50s50.jpg_.webp'
      }],
      selected: 0,
  },
  methods: {
    onLoad() {
      let that = this;
    },
    showModal(e) {
      const len = this.data.elements.length;
      if (len == 0) {
        return wx.showToast({
          title: '沒有東西了',
          icon: 'none',
          duration: 2000
        })
      }
      const result = Math.round(Math.random() * (len - 1))
      console.log(this.data.elements[result])
      console.log(result)
      this.setData({
        elements: this.data.elements
      })
      this.setData({
        selected: result
      })
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
      this.data.elements.splice(this.data.selected,1)
      console.log(this.data.elements)
    },
    toastGift() {
      const len = this.data.elements.length;
      const result = Math.round(Math.random() * (len - 1))
      console.log(result)
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})