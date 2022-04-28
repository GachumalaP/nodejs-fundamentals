// const url = require("url");

const myUrl = new URL(
  "https://fashion-shop.com:8080/products?searchTerm=dress"
);

//get url domain
console.log(myUrl.href);

//host without port
console.log(myUrl.host);

//host with port
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//query parameters object
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append("abc", "text")

//query params
console.log(myUrl.search);

//loop through query params 

myUrl.searchParams.forEach((value, key) => console.log(`${key} : ${value}`));