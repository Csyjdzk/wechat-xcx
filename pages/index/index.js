//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text: 'init data',
    num: 0,
	news:[]
  },

  onLoad: function(options) {
    // Do some initialize when page load.
	var that = this;
	//发起网络请求
	  wx.request({
		url: 'https://tools.ggvsmm.com/wechat-xcx/getNewList.php',
		header: {
		  'content-type': 'application/json' // 默认值
		},
		success(res){
		  
		  that.setData({
			news:res.data
		  })
			console.log(res)
		},
		fail(res){
		  console.log(res)
		}
	  })
  },

  
})
