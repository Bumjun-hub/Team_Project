import { use, useEffect, useState } from "react";

function Weather({location_x, location_y}){
    let [weather_list, set_weather_list]=useState([{}]);
    useEffect(()=>{
        const today=new Date();
        let current_date=""+today.getFullYear();
        if(today.getMonth()+1<=9){
            current_date+="0"+(today.getMonth()+1);
        }else{
            current_date+=today.getMonth()+1;
        }
        current_date+=today.getDate();

        let hours=today.getHours()*60;
        let minutes=today.getMinutes();
        let sum=hours+minutes;
        let current_time="";
        if(sum>=0&&sum<=134){
            current_time="2300";
        }
        if(sum>=135&&sum<=314){
            current_time="0200";
        }
        if(sum>=315&&sum<=494){
            current_time="0500"
        }
        if(sum>=495&&sum<=674){
            current_time="0800";
        }
        if(sum>=675&&sum<=854){
            current_time="1100";
        }
        if(sum>=855&&sum<=1034){
            current_time="1400";
        }
        if(sum>=1035&&sum<=1214){
            current_time="1700";
        }
        if(sum>=1215&&sum<=1394){
            current_time="2000";
        }
        if(sum>=1395&&sum<=1499){
            current_time="2300"
        }
        //          00시 00분 : 0
        //          02시 15분 : 135
        //          05시 15분 : 315
        //          08시 15분 : 495
        //          11시 15분 : 675
        //          14시 15분 : 855
        //          17시 15분 : 1035
        //          20시 15분 : 1215
        //          23시 15분 : 1395
        //          24시 59분 : 1499

        var xhr = new XMLHttpRequest();
        var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'SZp6eNNgHHm1Hb4EDzMhh8kDhsRDdX3ITdtxIiOK6jvPjiNBY30pKM9OZv4%2BUbVSX9Pn9iEHS1o04HZ%2Fu4UykA%3D%3D'; /*Service Key*/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
        queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
        queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(current_date); /**/
        queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(current_time); /**/
        queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
        queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/
        
        xhr.open('GET', url + queryParams);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                localStorage.setItem("weather", this.responseText);
            }
        };
        xhr.send('');

        const temp_list=Object.values(JSON.parse(localStorage.getItem("weather")).response.body.items)[0];
        let temp_time="";
        if((hours/60)<=9){
            temp_time="0"+((hours/60)+1)+"00";
        }else{
            temp_time=""+((hours/60)+1)+"00";
        }
        const first_filtered_list=temp_list.filter((value)=>{
            return value.category=="SKY"||value.category=="PTY";
        })
        console.log(first_filtered_list);
        
        const four_day_later=new Date(new Date().setDate(new Date().getDate()+4));
        let four_day_later_text="";
        four_day_later_text+=four_day_later.getFullYear();
        if((four_day_later.getMonth()+1)<=9){
            four_day_later_text+="0"+(four_day_later.getMonth()+1);
        }else{
            four_day_later_text+=(four_day_later.getMonth()+1);
        }
        if(four_day_later.getDate()<=9){
            four_day_later_text+="0"+four_day_later.getDate();
        }else{
            four_day_later_text+=four_day_later.getDate();
        }
        console.log(temp_time);
        const second_filtered_list=first_filtered_list.filter((value)=>{
            return value.fcstDate==current_date?value.fcstTime==temp_time:value.fcstDate==four_day_later_text?value.fcstTime=="0000":value.fcstTime=="1200";
        })
        console.log(second_filtered_list);
        // 오늘 = 현재 시간
        // 1일뒤 ~ 3일 뒤 = 12시 00분
        // 4일뒤 = 00시 00분        

        let temp_text="";
        let temp_fcst_value="";
        let temp_month_date="";
        let temp_array=[];
        let temp_count=0;
        for(let z=0;z<second_filtered_list.length;z++){       
            temp_fcst_value+=second_filtered_list[z].fcstValue;
            if(z%2==1){
                if(temp_count==0){
                    temp_month_date="오늘";
                }else if(temp_count==1){
                    temp_month_date="내일";
                }else{
                    temp_month_date=parseInt(second_filtered_list[z].fcstDate.substring(4, 6))+"/"+parseInt(second_filtered_list[z].fcstDate.substring(6, 8));
                }
                temp_text=`{"date":"${temp_month_date}", "value":${temp_fcst_value}}`;
                console.log(temp_text);
                temp_array.push(JSON.parse(temp_text));
                temp_text="";
                temp_fcst_value="";
                temp_count++;
            }
        }
        set_weather_list(temp_array);
        
      


    }, [])
    
    return(
        <>
            {weather_list.map((value, index, array)=>{
                let temp_value=`img/weather/w${value.value}.png`;
                return(
                    <div key={index+1}>
                        <span style={{marginLeft:"20px", fontWeight:"600"}}>{value.date}</span><br></br>
                        <img className="weather_img" src={temp_value} style={{width:"65px"}}></img>
                    </div>
                )
            })}
        </>
    )
}

export default Weather;