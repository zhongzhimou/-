// 实现登录
/* 
  1、登录按钮注册点击（阻止默认行为）
  2、点击事件内部获取 用户名/密码
  3、内容非空判断
  4、非空时发送ajax
  5、发送请求--打印服务器返回的数据
*/
$(function(){
  $('.input_sub').click(function(e){
    // 阻止默认的表单提交事件
    e.preventDefault();
    // 2、点击事件内部获取 用户名/密码
    const user = $('.input_txt').val().trim();
    const pas = $('.input_pass').val().trim();
    // 3、内容非空判断
    if(user === ''|| pas === ''){
      alert('小兄弟,你飘了');
    }else{
      // 4、非空时发送ajax
      $.ajax({
        // 请求方式
        type: "post",
        // 请求地址 = 基地址+请求地址
        url: "http://localhost:8080/api/v1/admin/user/login",
        // 参数
        data: {
          username:user,
          password:pas,
        },
        // dataType: "JSON",
        success: function (response) {
          console.log(response);
          
        }
      });
    }
  })

})
