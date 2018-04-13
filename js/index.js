/*
* @Author: Administrator
* @Date:   2018-03-31 09:21:23
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-04 16:50:12
*/
var weather;
$.ajax({
	url: 'https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁',
	type: 'get',
	dataType: 'jsonp',
	success: function(obj){
		console.log(obj);
		weather=obj.data.weather;
		console.log(weather);
	},
})
var city;
$.ajax({
    url: 'https://www.toutiao.com/stream/widget/local_weather/city/',
    type: 'get',
    dataType: 'jsonp',
    success: function(obj){
        console.log(obj);
        city=obj.data;
        console.log(city);
    },
})
// 渲染数据
function updata(){
	// 城市名称
    var city_name=document.querySelector(".chengshi");
    city_name.innerHTML=weather.city_name;
    // 空气质量
    var quality_level=document.querySelector(".kongqi h2");
    quality_level.innerHTML=weather.quality_level;
    // 当前温度
    var current_temperature=document.querySelector("header h3");
    current_temperature.innerHTML=weather.current_temperature+"°";
    // 当前天气情况
    var current_condition=document.querySelector("header h4");
    current_condition.innerHTML=weather.current_condition;
    // 今天天气
    var dat_condition=document.querySelector(".jinming_left .bottom_text");
    dat_condition.innerHTML=weather.dat_condition;
    // 今天的最高温
    var dat_high_temperature=document.querySelector("#dat_high_temperature");
    dat_high_temperature.innerHTML=weather.dat_high_temperature;
     // 今天的最低温
    var dat_low_temperature=document.querySelector("#dat_low_temperature");
    dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
    // 今天天气的icon
    var dat_weather_icon_id=document.querySelector(".bottom_tu");
    dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
    // 明天的天气
    var tomorrow_condition=document.querySelector(".jinming_right .bottom_text ");
    tomorrow_condition.innerHTML=weather.tomorrow_condition;
     // 明天的最高温
    var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
    tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
    // 明天的最低温
    var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
    tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
    // 明天天气的icon
    var tomorrow_weather_icon_id=document.querySelector(".mbottom_tu");
    tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;
    // 时间的预报
    for(var i in weather.hourly_forecast){
    	// 创建div
    	var con1=document.createElement("div");
    	// 添加类名
    	con1.className="con1";
    	// 获取父元素
    	var gundong=document.querySelector(".gundong");
    	// 插入到父元素中
        gundong.appendChild(con1);
        // 获取时间
        var shijian1=document.createElement("div");
        shijian1.className="shijian1";
        con1.appendChild(shijian1);
        var shijian2=document.createElement("span");
        shijian2.innerHTML=weather.hourly_forecast[i].hour+":00";
        shijian1.appendChild(shijian2);
        // 获取图片
        var weather_icon_id=document.createElement("div");
        weather_icon_id.className="img";
        weather_icon_id.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
        con1.appendChild(weather_icon_id);
        // 获取度数
        var temperature=document.createElement("div");
        temperature.className="du";
        temperature.innerHTML=weather.hourly_forecast[i].temperature+"°";
        con1.appendChild(temperature);
    }   
    // 未来天气的预报
    for(var i in weather.forecast_list){
        // 创建div
        var con=document.createElement("div");
        // 添加类名
        con.className="con";
        // 获取父元素
        var gundong1=document.querySelector(".gundong1");
        // 插入到父元素中
        gundong1.appendChild(con);
        // 获取日期
        var date=document.createElement("div");
        date.className="riqi";
        date.innerHTML=weather.forecast_list[i].date.slice(5,7)+"/"+weather.forecast_list[i].date.slice(8);
        con.appendChild(date);
        // 获取天气
        var condition=document.createElement("div");
        condition.className="weaH";
        condition.innerHTML=weather.forecast_list[i].condition;
        con.appendChild(condition);
        // 获取最高温
        var high_temperature=document.createElement("div");
        high_temperature.className="high";
        high_temperature.innerHTML=weather.forecast_list[i].high_temperature+"°";
        con.appendChild(high_temperature);
        // 获取图标
        var tubiao=document.createElement("div");
        tubiao.className="imgH";
        tubiao.style=`background-image:url(img/${weather.forecast_list[i].weather_icon_id}.png)`;
        con.appendChild(tubiao);
        // 获取最低温
        var low_temperature=document.createElement("div");
        low_temperature.className="low";
        low_temperature.innerHTML=weather.forecast_list[i].low_temperature+"°";
        con.appendChild(low_temperature);
        // 获取风向
        var wind_direction=document.createElement("div");
        wind_direction.className="wind";
        wind_direction.innerHTML=weather.forecast_list[i].wind_direction;
        con.appendChild(wind_direction);
        // 获取风级
        var wind_level=document.createElement("div");
        wind_level.className="wind_q";
        wind_level.innerHTML=weather.forecast_list[i].wind_level+"级";
        con.appendChild(wind_level);
    }
 // 渲染城市
    
    for (var j in city){ 
        var rencity=document.createElement("div");
        rencity.className="rencity";
        var remen=document.querySelector(".remen");
        rencity.innerHTML=j;
        remen.appendChild(rencity);
        // for (var j in city){
        // var rencity=document.createElement("div");
        // rencity.className-"rencity";
        // rencity.innerHTML=j;
        // remencity.appendChild(rencity);

//         var remencity=document.createElement("li");
//         remencity.innerHTML=j;
//         city_list.appendChild(remencity);
    for(var m in city[j]){
        var city_name=document.createElement("div");
        city_name.className="city_name";
        city_name.innerHTML=m;
        // rencity=document.querySelector(".rencity");
        remen.appendChild(city_name);
    }
}
}
// 请求各城市的天气
function AJAX(str){
    var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
    $.ajax({
        url:url1,
        type: 'get',
        dataType: 'jsonp',
        success: function(obj){
            weather=obj.data.weather;
            updata();
            $(".city").css({"display":"none"});
            } 

    })

}
// 页面加载以后执行
window.onload=function(){
    updata();
    $(".city_name").on("click",function(){
        var cityh=this.innerHTML;
        AJAX(cityh);
    });
    $(".chengshi").on("click",function(){
       $(".city").css({"display":"block"});  
    })
// 获取焦点 改变按钮内容
    $(".left_text").on("focus",function(){
        $(".search_right").html("搜索");
    })
//按钮
    var button=document.querySelector(".search_right");
    console.log(button);
    // 点击取消 城市页面消失
    button.onclick=function(){
        var text=button.innerText;
        console.log(text);
        if(text=="取消"){
            $(".city").css({"display":"none"});
        }
        // 点击搜索
        else{
            // 获取输入的内容
            var str1=document.querySelector(".left_text").value;
            // 二重循环
            for(var a in city){
                for(var b in city[a]){
                    if(str1==b){
                        AJAX(str1);
                        return;
                    }
                }
            }
            // 弹出
            alert("没有该城市");
        }
    }


}
