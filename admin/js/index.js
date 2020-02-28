$(function(){
  // 除了登录接口,其他接口都需要带上token
  // 通过ajax发请求获取用户的信息
  $.ajax({
    type: "get",
    // 用户信息的接口地址
    // url: "http://localhost:8080/api/v1/admin/user/info",
    url: urls.user_info,        //使用封装好的 用户信息的接口地址
    // data: "data",
    dataType: "JSON",
    // 1.每次登陆需要token,来辨别身份 -- 2.现在使用封装过的token-(http.js)
    // headers:{
    //   Authorization : localStorage.getItem('token')
    // },

    
    success: function (response) {
      console.log(response);
      if (response.code === 200) {
        const userPic = response.data.userPic;
        const nickname = response.data.nickname;
        // 设置/获取 img属性的值 : attr()
        // 需要同时改变个人中心的图片  ('.user_info img','.user_center_link img')主意引号
        // $('.user_info img','.user_center_link img').attr({ src:userPic });
        $('.user_info img , .user_center_link img').attr({ src:userPic });
        // 名字设置
        $('.user_info span').html('欢迎&nbsp;&nbsp;' + nickname);
      }
    }

  });


  // 当点击退出情况token值
    $('.logout').click(function(e){
      // console.log(e);
      // 删除token
      localStorage.removeItem('token');
      location.href = './login.html'
    })


    // 点击左侧当前元素高亮
    $('.level01').click(function (e) { 
      e.preventDefault();
      // 点击当前元素添加类名--其他兄弟元素-排他思想-移除类名
      // addClass():添加类名
      // siblings():其他兄弟元素
      // removeClass():移除类名
      // $(this).addClass('active').siblings().removeClass(这里少加了 移除的东西); //这里少加了 移除的东西

      // 当前元素高亮
      $(this).addClass('active').siblings().removeClass('active'); 
      // 判断他下一个兄弟元素有level02就展开
      // next():下一个兄弟元素
      // hasClass():检查元素
      // slideToggle():进行切换 显示/隐藏
      // find():检查数组中的条件元素
      // toggleClass() : 方法对添加和移除被选元素的一个或多个类进行切换
      // eq('0'):获取第N个索引元素
      if ($(this).next().hasClass('level02')) {

        // 显示/隐藏  二级菜单
        $(this).next().slideToggle();

        // 转换箭头
        $(this).find('b').toggleClass('rotate0')

      // 默认第一个为选中黄色 
      $(this).next().find('li').eq('0').addClass('active').siblings().removeClass('active');
      
      }else{ 
        // 如果点击的菜单没有二级菜单 level02 就移除颜色
        // 点击其他菜单排除 level02 里面 li 的黄色
        $('.level02 li').removeClass('active');
      }
    });

    // 点击二级菜单也需要进行颜色的 排他处理
    $('.level02 li').click(function (e) { 
      e.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      
    });
})
