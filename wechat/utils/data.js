/**
 * banner数据
 */ 
function getBannerData(){
    var arr = ['../../images/f.png', '../../images/f.png', '../../images/c.png', '../../images/d.png']
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            
          
         
        ]
    return arr
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                [
                    {
                       
                        subject:"文化广场志愿队伍",
                        coverpath:"../../images/e.png",
                        price:'2019年4月7日',
          message:'尽己所能,不计报酬,帮助他人,服务社会,践行志愿精神,传播先进文化,为建设团结互助、平等友爱、共同前进的美好社会贡献力量。'
                    },
                    {
                        
                        subject:"志愿青年在路上小队",
                        coverpath:"../../images/f.png",
                        price:'2019年5月1日',
                        message:'我们要尽己所能,不计报酬,帮助他人,服务社会,践行志愿者精神,为建设团结互助、平等友爱、共同前进的美好社会贡献力量！'
                    },
                    {
                        
                        subject:"即刻行动志愿小队",
                        coverpath:"../../images/g.png",
                        price:'2019年2月12日',
                      message: '活着无须如洪水一般，浩大、激荡。只愿能力所能及的发自已的光。在志愿者园地这片土地上，我们一点一点的点燃爱的火花，调馈真诚、播种爱心、把温馨和幸福洒向人间。'
                    },
                    {
                        
                        subject:"雷锋在行动小队",
                        coverpath:"../../images/5.png",
                        price:'2019年1月5日',
                      message:'志愿服务，乐于奉献，不求回报'
                    },
                    {
                        
                        subject:"一心跟党走队伍",
                        coverpath:"../../images/7.png",
                        price:'2019年4月15日',
                      message:'伸出双手去帮助，关心孤寡老人，孤残儿童等弱势群体，为公益，慈善，贡献自己的微薄之力'
                    }
                ],
               
                
               
            ]
    return arr
}
/**
 * 志愿者 数据
 * */ 
function getSkilledData(){
    var arr = [
                {
                        company:"天津中德志愿团队",
                        avatar:"../../images/zd.png",
                        nickname:'团队人数',
                        price:'23人',
                        message:'团队属性:个人',
                        distance:'50m'
                    },
                    {
                        company:"天津电子志愿团队",
                        avatar:"../../images/dz.png",
                        nickname:'团队人数',
                        price:'45人',
                        message:'团队属性:校级',
                        distance:'110m'
                    },
                    {
                        company:"天津石油志愿团队",
                        avatar:"../../images/e.png",
                        nickname:'团队人数',
                        price:'121人',
                        message:'团队属性:个人',
                        distance:'130m'
                    },
                    {
                        company:"天津海运志愿团队",
                        avatar:"../../images/hy.png",
                        nickname:'团队人数',
                        price:'269人',
                        message:'团队属性:个人',
                        distance:'400m'
      },
       {
        company: "天津海河教育园志愿团队",
        avatar: "../../images/hh.png",
        nickname: '团队人数',
        price: '600',
        message: '团队属性:园区',
        distance: '680m'
      },
            ]
    return arr
}

/**
 * 选择器 数据
 */ 
function getPickerData(){
    var arr =[
        {
            name:'21',
            phone:'13812314563',
            province:'天津',
            city:'天津',
            addr:'海河园'
        },
        {
            name:'哈',
            phone:'13812314563',
            province:'天津市',
            city:'天津市',
            addr:'津南区'
      }, {
        name: '1',
        phone: '1381814563',
        province: '天津',
        city: '天津',
        addr: '西青区'
      }
    ]
    return  arr
}
/**
 * 查询 地址
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                uid:'1',
                nickname:'233',
                name:'121',
                phone:'13833337998',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                        name:'海河区域负责人',
                        phone:'QQ11115611',
                        province:'天津市',
                        city:'直辖市',
                        addr:'天津中德应用技术大学'
                    },
                    {
                        addrid:'2',
                        name:'南洋区域负责人',
                        phone:'QQ12215121',
                        province:'天津市',
                        city:'直辖市',
                        addr:'天津师范职业技术大学'
                  },
                  {
                    addrid: '2',
                    name: '电子负责人',
                    phone: 'QQ12152121',
                    province: '天津市',
                    city: '直辖市',
                    addr: '天津电子信息技术学院'
                  } 
      ],
       hd: [
        {
          addrid: '1',
          name: '志愿活动1',
          phone: '帮助老人',
          province: '天津市',
          city: '直辖市',
          addr: '天津中德应用技术大学'
        },
        {
          addrid: '2',
          name: '志愿活动2',
          phone: '服务社区',
          province: '天津市',
          city: '直辖市',
          addr: '天津师范职业技术大学'
        },
        {
          addrid: '3',
          name: '志愿活动3',
          phone: '照顾孤寡老人',
          province: '天津市',
          city: '直辖市',
          addr: '天津电子信息技术学院'
        }
      ]
            }
    return arr
}
/**
 * 省
 * */ 
function provinceData(){
    var arr = [
        // {pid:1,pzip:'110000',pname:'北京市'},
        // {pid:2,pzip:'120000',pname:'天津市'}
        '请选择省份','福建省'
    ]
    return arr
}
/**
 * 市
 * */ 
function cityData(){
    var arr = [
        // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
        // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
        '请选择城市','福州市','厦门市','宁德市'
    ]
    return arr
}
/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  getPickerData : getPickerData,
  getSkilledData :getSkilledData,
  userData : userData,
  provinceData : provinceData,
  cityData : cityData,
  searchAddrFromAddrs : searchAddrFromAddrs

}