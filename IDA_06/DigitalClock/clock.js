clock();


function clock(){
    let d = new Date();

    updateDigitalClock(d);

    let delay = 1000 - new Date().getMilliseconds();
    setTimeout(clock, delay);
}

function updateDigitalClock(d){
    const AA_str = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let YY = d.getFullYear().toString().slice(-2);
    let MM = d.getMonth() + 1;
    let DD = d.getDate();
    let AA = d.getDay();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    if(MM < 10){MM="0"+MM;}
    if(DD < 10){DD="0"+DD;}
    if(hh < 10){hh="0"+hh;}
    if(mm < 10){mm="0"+mm;}
    if(ss < 10){ss="0"+ss;}

    let text = YY + '/' + MM + '/' + DD + '(' + AA_str[AA] + ')<br>' + hh + ':' + mm + ':' + ss;
    document.getElementById("digital_clock").innerHTML = text;
}