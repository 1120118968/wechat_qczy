Page({
  data: {
    markers: [{
      latitude: 38.993572,
      longitude:117.383712,
    //第一个被标志的点
    },
    {
      latitude:38.996774,
    longitude:117.384747,
    Name:"咸水沽志愿团"
   },//2
    {
        latitude: 39.008192,
        longitude: 117.380537,
        Name: "天津中德应用技术大学"
      },//2
      {
        latitude: 38.008192,
        longitude: 117.360537,
        Name: "天津电子"
      },//2
      {
        latitude: 38.008172,
        longitude: 117.385527,
        Name: "天津商务"
      }],//第三个被标注的点
    covers: [{
      latitude: 26.099794,
      longitude: 117.324520,
      title: "文明街区志愿者团队",
     
      rotate: 10//第一个点标注的名字加位置
    }, 
    {
      latitude: 25.099298,
      longitude: 112.324129,
      titile: "雷锋团队",
      iconPath: '0/recommend_img_01.peng',
      rotate: 90//第二个点标注的名字加位置
      },
      {
        latitude: 21.008192,
        longitude: 116.380537,
      titile: "天津中德团队",
      iconPath: '0/recommend_img_01.peng',

      rotate: 90//第三个点标注的名字加位置
      },
       {
      latitude: 26.098288,
      longitude: 110.324129,
      titile: "电子团队",
      iconPath: '0/recommend_img_01.peng',
      rotate: 90//第二个点标注的名字加位置
      },
      {
        latitude: 27.097278,
        longitude: 111.324119,
        titile: "海运志愿团队",
        iconPath: '0/recommend_img_01.peng',
        rotate: 90//第二个点标注的名字加位置
      }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})