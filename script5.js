//Q.5

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
 
request.onload = function () {
  if (request.status === 200) {
    var data = JSON.parse(request.responseText);
 
    // Filter countries with USD as currency
    const usdCurrencies = data.filter(country => {
        const currencies = country.currencies;
        return currencies && currencies.USD;
      });
 
    console.log("Countries with US Dollar currency:",usdCurrencies );
  } else {
    console.error("Error fetching data. Status code:", request.status);
  }
};
 
request.onerror = function () {
  console.error("Request failed.");
};




    

  
     
    
    
