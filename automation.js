let pup = require('puppeteer');

let gPage;



pup
   .launch({headless: false})
   .then(function(browser) {
       return browser.newPage();
   })
 
   .then(function(page) {
       gPage = page;
       return page.goto("https://www.google.com");

   })
   
   .then(function(){
       return gPage.type("input.gLFyf.gsfi","Cats");
   })
   .then(function(){
       return Promise.all([
           gPage.waitForNavigation(),gPage.click([".FPdoLc.lJ9FBc [value='Google Search']"]),
       ])
   })
   .then(function(){
       return gPage.screenshot({path:"ss.png"})
   })
  
   .catch(function(err){
       console.log(err);
   });