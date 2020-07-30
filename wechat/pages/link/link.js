//index.js
//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result: '',
    state: ''
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value.id; //获取表单所有name=id的值  
    wx.request({
      url: 'test.php',
      data: formData,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          re: res.data,
        })
        wx.showToast({
          title: '已提交',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  bindtest: function () {

    wx.request({

      url: 'http://localhost:8080/Demo01/servlet02',

      data: {

        username: '001',

        password: 'abc'

      },

      method: 'GET',

      header: {

        'content-type': 'application/json' // 默认值

      },

      success: function (res) {

        console.log(res.data);

      },

      fail: function (res) {

        console.log(".....fail.....");

      }

    })

  },
})