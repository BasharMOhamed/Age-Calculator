document.getElementById("btn").addEventListener("click", age);
function age(){
    var validation = true;
    var count = 0;
    var Day = document.getElementById("Day").value;
    var Month = document.getElementById("Month").value;
    var Year = document.getElementById("Year").value;

    var date = new Date()
    var currentDay = date.getDate();
    var currentMonth = date.getMonth() + 1;
    var currentYear = date.getFullYear();
    var months = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(Day > months[Month - 1] || Day > 31){
        document.getElementById("Day").classList.add("error");
        validation = false;
    }
    else{
        count++;
        document.getElementById("Day").classList.remove("error")
    }
    if(Month > 12 || Month <=0){
        document.getElementById("Month").classList.add("error");
        validation = false;
    }
    else{
        count++
        document.getElementById("Month").classList.remove("error")
    }
    if(Year>currentYear){
        document.getElementById("Year").classList.add("error");
        validation = false;
    }
    else{
        count++
        document.getElementById("Year").classList.remove("error")
    }
    if(count == 3){
        validation = true;
    }
    console.log(currentMonth)

    if(Day > currentDay){
        currentDay = currentDay + months[currentMonth-1];
        currentMonth = currentMonth - 1 ;
    }
    if(Month > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }
    var d = currentDay - Day;
    var m = currentMonth - Month;
    var y = currentYear - Year;

    if(validation){
        
    document.getElementById("d").innerHTML = d;
    document.getElementById("m").innerHTML = m;
    document.getElementById("y").innerHTML = y;
    }
}