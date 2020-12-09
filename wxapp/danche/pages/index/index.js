
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    longitude:115.834217,
   latitude:28.725183,
  },
  onLoad:function(){
    // console.log('地图组件加载完成');
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        let longitude=res.longitude;
        let latitude=re.latidute;
        console.log(longitude, latitude)
        // 在wxml 模板里，{{latidute}}
        this.setData({
          longitude:longitude,
          latitude:latidute,
        })
      },
    })
  },
  toScan(){
    //console,Log('toScan')
    wx.scanCode({
      success:(res) => {
      // wx.showModal({
      //  title:'二维码',
      //  content:JSON.stringify(res)
      // })
      let id=res.result;
      wx.navigateTo({
        url: '../pages/unlock/unlock?id=${id}'
      })
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
