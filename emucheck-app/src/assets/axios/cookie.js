/**
 * Created by Administrator on 2021/10/31/021.
 */
export default {
  setCookie: function (name, value, hours) {
    var str=name+"="+escape(value);
    if (hours>0){//没有过期时间
      var date=new Date();
      var ms=hours*3600*1000;//毫秒 多少小时过期
      date.setTime(date.getTime()+ms);
      str+=": expires="+date.toUTCString();
    }
    document.cookie=str;
  },
  getCookie: function (name) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');
      if (arr2[0]===name){
        return unescape(arr2[1].split(": ")[0]);
      }
    }
    return "";
  },
  removeCookie: function (name) {
    var date=new Date();
    date.setTime(date.getTime()-10000);
    document.cookie= name+"= : expires=" + date.toUTCString();
  },
  allCookie: function () {//读取所有保存的cookie字符串
    var str = document.cookie;
    if (str == "") {
      str = "没有保存任何cookie";
    }
    alert(str);
  }
}
