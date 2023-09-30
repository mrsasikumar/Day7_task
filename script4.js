//Q.4
var request=new XMLHttpRequest();
    request.open('GET',"https://restcountries.com/v3.1/all");
    request.send();
    request.onload=function (){
    var countryData=JSON.parse(request.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    })
    console.log(population);}