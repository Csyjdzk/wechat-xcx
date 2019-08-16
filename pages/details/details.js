//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    details_id: ' ',
    news:[]
  },

  onLoad: function(options) {
    // Do some initialize when page load.
	if(options.details_id){
  		var that = this;
		//发起网络请求
		  wx.request({
			url: 'https://tools.ggvsmm.com/wechat-xcx/getNewListOne.php',
			data: {
			    details_id: options.details_id
			},
			header: {
			  'content-type': 'application/json' // 默认值
			},
			success(res){
			  
			  that.setData({
				news:res.data
			  })
				console.log(res.data)
			},
			fail(res){
			  console.log(res)
			}
		  })
  	}else{
  		console.log('详情ID不存在');
  	}
  },
  
})
