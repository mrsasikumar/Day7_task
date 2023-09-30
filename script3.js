//Q1)Get all the countries from Asia continent /region using Filter function
var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
    var countryData = JSON.parse(request.response);
    var data = countryData.filter((element)=>element.region ==="Asia");
    console.log(data);   

    }
    