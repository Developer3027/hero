# Hero
This project is for admission consideration into [Code the Dream](https://codethedream.org/). This project is intended to meet certain criteria and be fun. I that regard, there is one thing of note. In creating the concept I used a YouTube video from the bad lip reading channel. It is a funny music video regarding the attack of the rebel base on Hoth. Please be advised that there is a video in the project. It does help cement the concept, but is not required to meet the project criteria. I do **not** consider it vulgar or offensive, however, I suspect *any* video *may* be considered restrictive content for this project.

## Project Criteria
This project needs to do and accomplish the following:
### structure
- [x] Public Git repo that contains the project.
- [x] A HTML document for the page
- [x] A CSS document to style the HTML
- [x] A javascript file to retrieve data from the public api.
- [x] A readme file that includes instructions for running the web page.
### Content
- [x] Display data for at least two of the endpoints of the api.
- [x] Include navigation for the api endpoints.
- [x] Issue new get requests for each api endpoint.
### Functionality
- [x] Ensure trouble free running of site per instructions.
- [x] Ensure api calls are clean and light.
- [x] Write clean and readable code.
- [x] Handle error cases.
- [x] Be mindful or considered about style.

## Concept - Intercepted Transmission
One of our deep space satellites has received a rogue transmission. It was grainy and a digital mess, but with the help of AI it is being pieced together. The transmission seems to come from a galaxy far far away and was picked up by SWAPI as it rounded io, as it was in the dark, in orbit of Jupiter.

From what we can gather, an alien species that looks very similar to humans are engaged in conflict. This transmission seems to focus on one particular pilot who likes to rap when engaging the enemy.

This may all be concerning on it own, but what got our attention is, this seems to be the first know footage of the zombie outbreak. As suspected, this virus originated a long long time ago. If confirmed, this could be real hope.

This file is **top secret** and need to know only. It contains the cleaned footage of the battle as well as the specs for the pilot, tech, and planet where the incident occurred. This information is still fluid but we have been able to piece some information together.

## Site Specs and Information
I am running Node V18.18.2 with NPM V9.8.1. Site was set up with Vite@latest.

To run locally, fork then clone the repo. Run npm install from the root folder to ensure all packages are installed. This uses default Vite and is very lightweight. Run 
```npm run dev```
to start the Vite dev environment. The SWAPI and Weather api's being used are free and open source. No auth required. Each api call is logged in console to note the call was made. Console logs do not return object data and so were left active for this project. Code to make api calls before button clicks is left in place but not used for this project. For Character and Vehicle the response is fine but the Planets call is slow and may want to implement pre-call to weather api.

#### APIs Used
[Star Wars API](https://www.swapi.tech/documentation)

[Weather API](https://open-meteo.com/en/docs)

This is built as a SPA (Single Page Application) in concept. There are buttons to make api calls and populate further information.

* One embed iframe from YouTube.
  * css for mobile response.
  * Some attributes removed to cut down on console warnings.

* There is one call to the characters/1.
  * Found free image url and included in content object returned for character.
  * Calculated conversion for height and weight to US.
  * Mobile responsive.
* There is one call to the vehicles/18
  * Calculated conversion for length in feet.
  * Mobile responsive.
* There is one call to the planets/4
  * Calculated conversion from c to f
  * Fetch weather data for coldest spot on earth
  * Show current temp for coldest spot on earth

Each call, except planets, is it's own separate javascript file. The planet js makes two api calls from separate api's. One for planet data and one for weather data.

### Probable improvements
* Layout of site could be greatly improved. Maybe navigation down the left side to display page data on the right. Maybe a more military style font. Better consider light and dark mode.
* Consolidate api calls and data display into one file. Most of the code in each file is identical.
* Consider and implement SEO.
* Testing should be implemented.
* All of the above improvements suggest using a framework.

The project is live on Netlify and can be reached via [this link](https://fastidious-cuchufli-e25756.netlify.app/)