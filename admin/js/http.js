/* 沙箱模式 */
/* (function(w){
    var baseURL = 'http://localhost:8080/api/v1'
    var BigNew = {
        baseURL:baseURL,//基地址
        user_login:      baseURL + '/admin/user/login',//用户登录
        user_info:       baseURL + '/admin/user/info',//用户信息
        user_detail:     baseURL + '/admin/user/detail',//用户详情
        user_edit:       baseURL + '/admin/user/edit',//用户编辑
        category_list:   baseURL + '/admin/category/list',//文章类别查询
        category_add:    baseURL + '/admin/category/add',//文章类别新增
        category_search: baseURL + '/admin/category/search',//文章类别搜索
        category_edit:   baseURL + '/admin/category/edit',//文章类别编辑
        category_delete: baseURL + '/admin/category/delete',//文章类别删除
        article_query:   baseURL + '/admin/article/query',//文章搜索
        article_publish: baseURL + '/admin/article/publish',//文章发布
        article_search:  baseURL + '/admin/article/search',//文章信息查询
        article_edit:    baseURL + '/admin/article/edit',//文章编辑
        article_delete:  baseURL + '/admin/article/delete',//文章删除
        comment_list:    baseURL + '/admin/comment/search',//文章评论列表
        comment_pass:    baseURL + '/admin/comment/pass',//文章评论通过
        comment_reject:  baseURL + '/admin/comment/reject',//文章评论不通过
        comment_delete:  baseURL + '/admin/comment/delete',//文章评论删除
    };

    //暴露接口
    w.BigNew = BigNew;
})(window); */


(function (w) {
	$.ajaxSetup({
		// 每次登陆需要token,来辨别身份--全局封装token 方便调用
		headers: {
			// token被本地存储中 直接获取
			Authorization: localStorage.getItem('token')
		},

		// 获取数据前
		beforeSend: function () {
			// 加载数据前显示进度条
			if (window.NProgress) {
				NProgress.start();
			}
		},

		// 获取数据失败
		error: function () {
			$('.modal').modal();
			$('.modal-body p').html('获取数据出现错误!重新登陆')
		},

		// 获取数据不管成功还失败
		complete: function(){
			if (window.NProgress) {
				NProgress.done();
			}
		},
	})

	// 当点击登录进行跳转
	$('.to-login').click(function () {
		// e.preventDefault();
		location.href = './login.html'
	});


	// 封装网址
	// 基地址
	const baseUrl = 'http://localhost:8080/api/v1';
	const urls = {
		user_info:	`${baseUrl}/admin/user/info`,						//	用户信息
		user_detail:	`${baseUrl}/admin/user/detail`,				//	用户详情
	}
	w.urls = urls;
})(window)



