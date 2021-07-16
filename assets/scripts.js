var times = ['08 AM','09 AM','10 AM','11 AM','12 PM','01 PM','02 PM','03 PM','04 PM','05 PM'];

var currentday = document.getElementById('currentDay');
var text = document.createTextNode(moment().format("dddd") + " "  + moment().format("MM/DD/YYYY"));
currentday.appendChild(text);

if (times.includes(moment().format("hh A"))){
    var timestring = moment().format("hh A");
    var index = times.indexOf(timestring);
    var blockClass = timestring.substring(0,2) + "block";
  
    document.getElementById(blockClass).classList.add('present');
    document.getElementById(blockClass).classList.remove('past');
    document.getElementById(blockClass).classList.remove('future');

for(var i = index+1; i < times.length ; i++){
    var blockHour = times[i].substring(0,2) + "block";
    document.getElementById(blockHour).classList.remove('past');
    document.getElementById(blockHour).classList.add('future');
    document.getElementById(blockHour).classList.remove('present');
}

for(var i = index-1; i >= 0 ; i--){

    var blockHour = times[i].substring(0,2) + "block";

    document.getElementById(blockHour).classList.add('past');
    document.getElementById(blockHour).classList.remove('future');
    document.getElementById(blockHour).classList.remove('present');
}

}


