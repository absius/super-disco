var times = ['08AM','09 PM','10 AM','11 AM','12 PM','01 PM','02 PM','03 PM','04 PM','05 PM'];

if (times.includes(moment().format("hh A"))){
    var timestring = moment().format("hh A");
    var index = times.indexOf(timestring);
    var blockClass = timestring.substring(0,2) + "block";
  
    document.getElementById(blockClass).classList.add('bg-success');
    document.getElementById(blockClass).classList.remove('bg-warning');
    document.getElementById(blockClass).classList.remove('bg-secondary');

for(var i = index+1; i < times.length ; i++){
    var blockHour = times[i].substring(0,2) + "block";
    document.getElementById(blockHour).classList.remove('bg-secondary');
    document.getElementById(blockHour).classList.add('bg-warning');
    document.getElementById(blockHour).classList.remove('bg-success');
}

for(var i = index-1; i > 0 ; i--){

    var blockHour = times[i].substring(0,2) + "block";
    document.getElementById(blockHour).classList.add('bg-secondary');
    document.getElementById(blockHour).classList.remove('bg-warning');
    document.getElementById(blockHour).classList.remove('bg-success');
}

}


