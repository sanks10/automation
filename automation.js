//requiring puppeteer and storing it
let pup = require('puppeteer');

let gPage;

//code to open google.com and take an ss of the webpage as ss.png
//a basic example of automation

pup
   .launch({headless: false})
   // we used launch function of puppeteer to launch a browser (it returns a promise)
   .then(function(browser) {
       return browser.newPage();
   })
   //then attaches a function to above the promise of opening the browser
   /*int this function we get a browser object in the argument,
   using that object we are opening a new page by calling new page method on that object
   (this again gives us a promise, all pupeteer function/ methods give us a promise)*/ 
   .then(function(page) {
       gPage = page;
       return page.goto("https://www.google.com");

   })
   /*this then attaches a function to the promise of opening a new page,
   inside this function we get a page object in the argument
   we are saving the object globally in a variable called gPage*/

   // calling goto function on page object to go to google.com (gives us a promise)
   .then(function(){
       return gPage.screenshot({ path:"ss.png"});
   })``
   //attaches the function to promise of opening www.google.com
   //this gives us a promise that it will take a screenshot and save it in ss.png
   .catch(function(err){
       console.log(err);
   });