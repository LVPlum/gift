Component({
  data: {
    elements: [{
      title: '布局',
      name: 'layout',
      color: 'cyan',
      icon: 'newsfill'
    },
    {
      title: '背景',
      name: 'background',
      color: 'blue',
      icon: 'colorlens'
    }]
  },
  methods: {
    onLoad() {
      let that = this;
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
  },
  pageLifetimes: {
    show() {
      console.log(1231)
      console.log(this.getTabBar())
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})