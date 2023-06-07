const companies = [
    {name:"Company one", category:"Finance", start:"1980", end:"1984"},
    {name:"Company two", category:"Business", start:"1964", end:"2000"},
    {name:"Company three", category:"Retail", start:"1992", end:"2014"},
    {name:"Company four", category:"Agric", start:"1997", end:"2005"},
    {name:"Company five", category:"Web3", start:"2000", end:"2020"},
    {name:"Company six", category:"Retail", start:"1980", end:"1972"},
    {name:"Company seven", category:"Education", start:"1950", end:"2017"},
    {name:"Company eight", category:"Health", start:"2013", end:"2023"},
    {name:"Company nine", category:"Research", start:"1990", end:"2014"},
    {name:"Company ten", category:"Science", start:"1946", end:"2026"},
    {name:"Company eleven", category:"Retail", start:"1957", end:"2023"},
    {name:"Company twelve", category:"Supply", start:"1904", end:"2002"}


];

const ages = [12, 15, 23, 28, 34, 17, 49, 21, 55, 10, 39];

//ForEach function for looping through an array

//1. Normal for loops

for(let i = 0; i < companies.length; i++) {
    console.log(companies[i])
};


//forEach function

companies.forEach(company => {
    console.log(company)
});

//filter

let canDrink = [];

for(i = 0; i < ages; i++) {
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
};

console.log(canDrink);


//filter

const canDrink2 = ages.filter(age => age >= 21);

console.log(canDrink2);


//filter out companies in retail

const retailComp = companies.filter(Company => Company.category === 'Retail');

console.log(retailComp);

//filter out all companies in the 80s

const allCompanies = companies.filter(Company => Company.start >= 1980 && Company.end < 1990);

console.log(allCompanies);

//filter all companies that lasted more than 10 years

const lastYearCompanies = companies.filter(Company => Company.end  - Company.start >= 10);

console.log(lastYearCompanies);

//map companies names

const mapCompanies = companies.map(Company => Company.name);

console.log(mapCompanies);

//map companies names, start and end dates

const mapCompanies3 = companies.map(Company => `${Company.name} [${Company.start} - ${Company.end}]`);

console.log(mapCompanies3);

//map companies names, category

const mapCompanies4 = companies.map(Company => `[${Company.name} - ${Company.category}]`);

console.log(mapCompanies4);

//map companies names, start and end dates, category

const mapCompanies5 = companies.map(Company => `${Company.name} [${Company.start} - ${Company.end} - ${Company.category}]`);

console.log(mapCompanies5);

//use map to get squareroot of all ages

const agesSquareRoot = ages.map(age => Math.sqrt(age));

console.log(agesSquareRoot)

//multiply ages by two

const agesMultiply = ages.map(age => age * 2);

console.log(agesMultiply);

// first multiply ages then get squareroot

const agesMap = ages
    .map(age => age * 2)
    .map(age => Math.sqrt(age));

console.log(agesMap);

//sort companies by start year

const sortCompanies = companies.sort((a,b) => (
    a.start > b.start ? 1 : -1   //read more about ternary operators
    
    ));


//sort ages lowest to highest

const sortAges = ages.sort((a,b) => a - b);

console.log(sortAges);

//sort ages highest to lowest

const sortAges2 = ages.sort((a,b) => b - a);

console.log(sortAges2);

//use reduce function to add all ages

const sumAges = ages.reduce((total, age) => total + age, 0);

console.log(sumAges);

//use reduce function to get total years for all companies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears);



