const links = [
    {url: 'https://www.toysrus.com/', urldescription: 'Click here to see Toys R Us'},
    {url: 'https://www.travelers.com/', urldescription: 'Click here to see Travelers'},
    {url: 'https://www.citi.com/', urldescription: 'Click here to see Citibank'},
    {url: 'https://www.dunkindonuts.com/', urldescription: 'Click here to see Dunkin Donuts'},
    {url: 'https://www.walmart.com/', urldescription: 'Click here to see Walmart.com'},
]

module.exports = {
    getAllLinks
}

function getAllLinks(){
    return links;
}