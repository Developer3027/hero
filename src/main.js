import './style.css'
import fetchLuke from './luke-skywalker.js';
import fetchWalker from './walker.js';





document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="top-secret">! Top Secret !</h1>
    <p>
      On December 19th, 2022, at 08:00:00 est, the deep space satellite SWAPI, intercepted a transmission of unknown origin. Most of it was a digital mess but it seems that human like individuals are engaged in battle using equipment not currently available to any armed forces. Through the use of AI we were able to decrypt and clean a small part of the message. Although this may seem funny, it is not. It is our belief that this is the origin of the zombie outbreak, in a galaxy far, far away.
    </p>
    <p>
      Data is still being processed, but we believe the following happened a long, long time ago. Please do not be fooled by the advanced technology you will see in the clip. It is still unclear what exactly caused the zombie outbreak. This classified footage is the last few minutes of the battle.
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
  </div>
`

fetchLuke(document.querySelector('#fetch-luke'));

fetchWalker(document.querySelector('#fetch-walker'));

