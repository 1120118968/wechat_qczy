// pages/technician_detail/technician_detail.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      imgUrls: [
        '../../images/hy.png',
        '../../images/hh.png',
        '../../images/5.png' 
     ],
      functions: [
        {
          "name": "团队名称",
          "pic_url": '../../images/a.png'
        },
        {
          "name": "团队宣言",
          "pic_url": '../../images/5.png'
        },
        {
          "name": "负责人",
          "pic_url": '../../images/7.png'
        },
        {
          "name": "联系电话",
          "pic_url": '../../images/c.png'
        },
        {
          "name": "团队人数",
          "pic_url": '../../images/d.png'
        },
        {
          "name": "团队活动",
          "pic_url": '../../images/e.png'
        },
        {
          "name": "团队成员",
          "pic_url": '../../images/f.png'
        },
        {
          "name": "团队详情",
          "pic_url": '../../images/g.png'
        }
      ]
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})