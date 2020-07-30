//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },
  loadSubjects: function () {
    var subjects = new Array();

    var subject = new Object();
    subject.id = "1";
    subject.pic = "/images/e.png";
    subject.name = "无偿献血服务";
    subject.status = "1";
    subject.desc = "用行动传播爱心，用真心换来真情。";
    subjects.push(subject);

    var subject1 = new Object();
    subject1.id = "2";
    subject1.pic = "/images/d.png";
    subject1.name = "社会公益活动服务";
    subject1.status = "1";
    subject1.desc = "营造传递出有爱，守望相助营造社会风气。";
    subjects.push(subject1);

    var subject2 = new Object();
    subject2.id = "3";
    subject2.pic = "/images/c.png";
    subject2.name = "参与社区建设服务";
    subject2.status = "1";
    subject2.desc = "互相帮助，助人自助，为社会做贡献。";
    subjects.push(subject2);

    var subject3 = new Object();
    subject3.id = "4";
    subject3.pic = "/images/b.png";
    subject3.name = "参与应急救助服务";
    subject3.status = "1";
    subject3.desc = "只要人人献出一点爱，世界将迎来崭新的篇章";
    subjects.push(subject3);

    var subject4 = new Object();
    subject4.id = "5";
    subject4.pic = "/images/g.png";
    subject4.name = "参与海外服务";
    subject4.status = "1";
    subject4.desc = "五湖四海皆为一家，世界各地本是一体。";
    subjects.push(subject4);
    return subjects;
  }
})