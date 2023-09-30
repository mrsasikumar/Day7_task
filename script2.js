//Q.2 
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data = JSON.parse(request.response);
    var data = data.filter((data)=>data.population<200000);
    console.log(data);
        
    
}

