# Spread the Love!
## Helping Hands Volunteer App
This application will help the user to find a volunteering opportunity.  The user will be able to select the service area of interest, the demographic group in need, and the general location.  On search, the application will provide a list of opportunities, who is hosting each one, and the link to the website advertising the opportunity.

## What the Project Does
This is a full-stack web application built using a MERN stack framework:  MongoDB + Express.js + React.js + Node.js.  The UI will take user provided criteria to help find a volunteering opportunity that interests them.  The user will be able to select the type of opportunity based on location.  The returned result will provide a list of opportunities and the link to the hosting website for each.

## Design & Technology
* The project uses a MERN stack framework with these design requirements:
    * The application will scrape a targeted 3 volunteering websites and store the results in a Mongo database.  
    * Scraping will occur once each night (not after each user search) 
    * At night, the database will be refreshed as new articles are downloaded automatically through either Node Scheduler or Heroku’s Request Timeout. 
    * A parser will be created for each volunteer site to define what info to pull.  The database structure will be aligned with the extracted fields.  
    * We expect commonality between the volunteer websites to possibly include:
        * Type of Opportunity	
            * [foster grandparent, clerical, general, handyman, food bank, meal delivery, caregiver assistance, landscaping]
        * Targeted Group 
            * [homeless, youth, teens, seniors, veterans, person with disabilities]
        * City 
            * [Denver, Durango, Colorado Springs, Denver, Fort Collins]
    * Users will be given a list of opportunities with information such as:
        * Organization
        * Coordinator
        * Email or phone
        * Location
        * Description
        * Link to website
    * The user can optionally sign up to our application.
        * The benefit provided in sign up will allow the user to select the heart icon to save interested opportunities for future review.
        * On subsequent login, the user will simply be able to continue where they left off.
    * NOTE:  We did not find any volunteer websites that had a viable API.  Therefore we were limited to web scraping.  Volunteer Match does support an API if we wanted to use PHP.  Regardless, that is only one website.
* Key technologies used to build this application are:
    * Create_react_app -- Tool built by Facebook developers to help built React applications saving much in setup time and configuration
    * ES6 -- ES6 (ECMAScript 2015 or JavaScript 6) brings focus on simplicity and readability
    * JSX -- Used by React that extends ECMAScript so that HTML-like text can co-exist with JavaScript/React code.  "JSX allows us to put HTML into JavaScript."
    * HTML and CSS -- Provides the means to create structured documents with style
    * Bootstrap -- Responsive Front-end framework
    * Materialize -- Responsive CSS framework
    * Express.js -- Server framework
    * Node.js -- Server-side JavaScript environment
    * MongoDB -- NoSQL Database
    * Mongoose -- Provides schemas for database collections
    * Cheerio -- Uses DOM manipulation to parse HTML
    * .gitignore -- **/node_modules
    * Heroku -- Cloud Application Platform

## Challenges
* The biggest chanllenge was to learn React, the folder structure, and file dependencies.
* React is so modular, so to gain understanding of API routes, components, and props was a challenge.
* Rendering scraped data to the page was time consuming.  Scrape of a volunteer website into a MongoDB gave us data to work with but was not neat and pretty.

## Future Improvements
* Scrape more volunteering websites
* Provide more visual contents rather than just words like our results data
* Volunteer opportunity filtering
* User signup and Firebase authentication
* Save opportunities of user's interest
* Expand to other states, not just provide opportunity listings in Colorado

## Spread the Love Pages
* Home Page
![Home Page Screenshot](/images/HomePage.png)

* Opportunity Page
![Opportunity Page Screenshot](/images/OpportunityPage.png)

* Results Page
![Returned Results Screenshot](/images/HelpingHands.png)

## Link to [Project Presentation]
(https://1drv.ms/p/s!Ak54UOzYUe6VgYgaPfiEype46jIJIw)

## Link to [My Portfolio] 
(https://jonathanteeter.github.io/jtPortfolio/)