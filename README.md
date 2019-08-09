# Stratus360Assignment

This is the code for my Stratus360 Technical Case Study.
The application developed in Visual Studio Code and deployed using Heroku Cloud Services.

The index.php file exists because heroku does not recognize a regular .html file but it does recognize .php files. 
So the index.php file is what heroku looks at when deploying the application and that file has a single line of code tha points towards the home.html file which holds the UI of the application.
The get.php file is a php proxy server I created to extract data from the API website. 
This is because the CORS policy on the website was blocking resource sharing from my Javascript HTTP calls but does not block it from the proxy servers.
The app.js file calls all the api data from the proxy server and renders it accordingly into the UI elements. 

I was able to complete all of the functionality that was asked of me in the case study criteria as well as one of the bonus points (random comic button).

The link to the application is below

https://stratus360.herokuapp.com/

