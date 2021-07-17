var times = ['08 AM','09 AM','10 AM','11 AM','12 PM','01 PM','02 PM','03 PM','04 PM','05 PM'];
var storageArray =[];
var currentday = document.getElementById('currentDay');
var text = document.createTextNode(moment().format("dddd") + " "  + moment().format("MM/DD/YYYY"));
currentday.appendChild(text);

function checkTimes(){
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
};

document.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target.id);
    if (e.target.id.substring(2,7) === 'block'){
        var divID = document.getElementById(e.target.id);
        var input = document.createElement("input");
        input.id = "input" + e.target.id.substring(0,2);
        input.className = "form-control";
        var text = document.createTextNode('Test');
        divID.innerHTML='';
        divID.appendChild(input);
    }

    if (e.target.id.substring(2,6) === 'edit'){
        var divID = document.getElementById(e.target.id.substring(0,2)+'block');
        var inputID = document.getElementById("input" + e.target.id.substring(0,2));
        if (inputID){
            var textValue = document.getElementById("input" + e.target.id.substring(0,2)).value;
            var text = document.createTextNode(textValue);
            var calendarItem = {
                date:moment().format("MM/DD/YYYY"),
                text: textValue,
                block: e.target.id.substring(0,2)+'block'
            }
            storageArray = JSON.parse(localStorage.getItem("plans"));
            if (!storageArray){
                storageArray = [];
            }

            for (i=0; i < storageArray.length; i++){
                if (storageArray[i].block === e.target.id.substring(0,2)+'block' && storageArray[i].date === moment().format("MM/DD/YYYY")){
                    storageArray.splice(i, 1);
                }
            }

            storageArray.push(calendarItem);
            localStorage.setItem("plans", JSON.stringify(storageArray));
            divID.innerHTML='';
            divID.appendChild(text);
        }

    }    
});

function setCalendar(){
    storageArray = JSON.parse(localStorage.getItem("plans"));
    if (!storageArray){
        storageArray = [];
    }

    for (i=0; i < storageArray.length; i++){
        if (storageArray[i].date === moment().format("MM/DD/YYYY")){
            var div = document.getElementById(storageArray[i].block);
            var text = document.createTextNode(storageArray[i].text);
        div.innerHTML='';
        div.appendChild(text);
        }
    }
}

setCalendar();
checkTimes();
