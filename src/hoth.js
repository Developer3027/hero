// Function to fetch and display Hoth
// Called by button so pass in element
const fetchPlanet = async (element) => {
  /**
   * Async function to fetch and parse the response from
   * https://www.swapi.tech/api/planets/4. The response is expected
   * to be in JSON format and contain the properties for Hoth.
   * @function
   * @returns {Promise<Object>} - The parsed response data
   */
  const planetResponse = async () => {
      const res = await fetch("https://www.swapi.tech/api/planets/4");
      const data = await res.json();
      console.log("Calling swapi api for Hoth");
      return data;
  };

  /**
   * Async function to fetch and parse the response from
   * https://api.open-meteo.com/v1/forecast?latitude=78.28&longitude=106.48&hourly=temperature_2m
   * The response is expected to be in JSON format and contain hourly temperatures
   * for Hoth.
   * @function
   * @returns {Promise<Object>} - The parsed response data
   */
  const weatherResponse = async () => {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=78.28&longitude=106.48&hourly=temperature_2m")
    const data = await res.json();
    console.log("Calling weather api for Hoth");
    return data;
  }
  // Try to fetch Hoth
  try {
      // Fetch Hoth before click event of button
      // const currentHothData = await planetResponse();

      // Fetch weather before click event of button
      // const currentWeatherData = await weatherResponse();
      
      // Set up the click event listener on the button
      element.addEventListener('click', async () => {
          const currentHothData = await planetResponse(); // Fetch Hoth object
          const currentWeatherData = await weatherResponse(); // Fetch Hoth weather

          // Extract wanted properties from object
          const { name, rotation_period, orbital_period, gravity, climate, terrain } = currentHothData.result.properties;
          const temperature = currentWeatherData.hourly.temperature_2m[0]; // Get temperature
          const temperatureInFahrenheit = Math.round((temperature * 9/5) + 32); // Convert temperature to fahrenheit
          
          // Create the content to display
          const content = `
              <div class="card-wrapper">
                  <div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg" style="border-radius: 5px;" alt="${name}" />
                  </div>
                  <div class="card-content">
                      <h3>${name}</h3>
                      <span>Current Temperature: ${temperatureInFahrenheit} °F</span>
                      <p>This planet is a frozen wasteland of ice and snow. Orbits just inside the goldie lock zone of star 956A4. Day is an hour less and a year is much longer. May have moons with hot cores. It is still not clear what exactly caused the zombie outbreak. This classified footage is the last few minutes of the battle.</p>
                      <p>Rotation: ${rotation_period} rt</p>
                      <p>Orbital: ${orbital_period} orb</p>
                      <p>Gravity: ${gravity} g</p>
                      <p>Climate: ${climate} </p>
                      <p>Terrain: ${terrain} </p>
                  </div>
              </div
          `;

          // Display the content in the element with id 'Hoth'
          document.getElementById("Hoth").innerHTML = content;

          // Disable the button after fetching the data
          // Prevent multiple api calls
          element.disabled = true;
      });
  // Catch any errors of api call.
  } catch (error) {
      console.error('Error grabbing Hoth:', error);
      document.getElementById('Luke').innerText = 'Maybe a frozen wasteland?';
  }
};

// Export the function as default
export default fetchPlanet;
