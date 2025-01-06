import './style.css'
import fetchLuke from './luke-skywalker.js';
import fetchWalker from './walker.js';
import fetchPlanet from './hoth.js';





document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="top-secret">! Top Secret !</h1>
    <p>
      On December 19th, 2022, at 08:00:00 est, One of our deep space satellites has received a rogue transmission of unknown origin. It was grainy and a digital mess, but with the help of AI it is being pieced together. The transmission seems to come from a galaxy far far away and was picked up by SWAPI as it rounded io, as it was in the dark, in orbit of Jupiter.
    </p>
    <p>
      From what we can gather, an alien species that looks very similar to humans are engaged in conflict. This transmission seems to focus on one particular pilot who likes to rap when engaging the enemy.
    </p>
    <p>
      This may all be concerning on it own, but what got our attention is, this seems to be the first know footage of the zombie outbreak. As suspected, this virus originated a long long time ago. If confirmed, this could be real hope.
    </p>
    <p>
      This file is <strong>top secret</strong> and need to know only. It contains the cleaned footage of the battle as well as the specs for the pilot, tech, and planet where the incident occurred. This information is still fluid but we have been able to piece some information together.
    </p>
    <hr>
    <h2 class="top-secret">Zombie video origin:</h2>
    <div class="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JRAOdRq-1lw?si=whw5ivlUg3iThhyt&amp;start=6" class="zombie-video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
    </div>
    <hr>
    <h2 class="top-secret">Video intelligence report:</h2>
    <!-- Luke Skywalker -->
    <div>
      <h2 class="caution">Pilot: Luke Skywalker</h2>
      <p>
        From other data we have determined that the pilots name is Luke Skywalker. There is a lot of advanced technology and magic involved here, none of which is relevant to this report. From what we have gathered, he is a bit whiny but fights the good fight. Click the button to review specific information.
      </p>
      <button id="fetch-luke" type="button">
        Skywalker file:
      </button>
      <p id="Luke"></p>
    </div>
    <!-- At At Walker -->
    <div>
      <h2 class="caution">Walker: AtAt Walker</h2>
      <p>
        From other data we have determined that the large mechanical walking machine's name is an At At Walker. None of our engineers or scientist can fathom why the empire thought this would be a good idea. Click the button to review specific information.
      </p>
      <button id="fetch-walker" type="button">
        Walker file:
      </button>
      <p id="Walker"></p>
    </div>
    <!-- Hoth Planet -->
    <div>
      <h2 class="caution">Planet: Hoth</h2>
      <p>
        From other data we have determined that the planet is called Hoth. This is a cold wasteland of a planet. Rugged terrain and a harsh climate make it a dangerous place to live. Click the button to review specific information.
      </p>
      <button id="fetch-planet" type="button">
        Hoth file:
      </button>
      <p id="Hoth"></p>
    </div>
  </div>
`

fetchLuke(document.querySelector('#fetch-luke'));

fetchWalker(document.querySelector('#fetch-walker'));

fetchPlanet(document.querySelector('#fetch-planet'));

