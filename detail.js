//analysis parameter
function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)"); 
   //decode
    var r = encodeURI(window.location.search).substr(1).match(reg);  
    if (r != null) {  
        //decode
        return decodeURI(unescape(r[2]));  
    }  
    return null;  
};

var target = getParams("lib_name");

new Vue({
    el: "#main",
    data: {
        lib_name: target,
        open_time: data[target]['開放時間'],
        address: data[target]['地址'],
        phone_num: data[target]['電話'],
        fax: data[target]['傳真']
    }
})