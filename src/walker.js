// Function to fetch and display the AtAt Walker
const fetchWalker = async (element) => {
  /**
   * Async function to fetch and parse the response from
   * https://www.swapi.tech/api/vehicles/18. The response is expected
   * to be in JSON format and contain the properties for the AtAt Walker.
   * @function
   * @returns {Promise<Object>} - The parsed response data
   */
  const response = async () => {
      const res = await fetch("https://www.swapi.tech/api/vehicles/18");
      const data = await res.json();
      console.log("Calling swapi api for Walker");
      return data;
  };

  // Try to fetch the Walker
  try {
    // Fetch the Walker before click event of button  
    // const walkerData = await response();
      
      // Set up the click event listener on the button
      element.addEventListener('click', async () => {
          const currentWalkerData = await response(); // Fetch Walker

          // Extract wanted properties from the object
          const { name, crew, passengers, length, vehicle_class, max_atmosphering_speed } = currentWalkerData.result.properties;
          const lengthInFeet = Math.round(length * 3.281); // Convert meters to feet
          
          // Create the content to display
          const content = `
              <div class="card-wrapper">
                  <img src="https://avatarfiles.alphacoders.com/107/thumb-1920-107665.jpg" style="width: 50%; border-radius: 5px;" alt="${name}" />
                  <div class="card-content">
                      <h3>${name}</h3>
                      <p>This is one of the craziest things we have ever seen. A tank that walks around. 
                      Out of all the technology we have ever seen, this is the craziest concept. 5 aliens 
                      to run it, can carry 40. This classified footage is the last few minutes of the battle.</p>
                      <p>class: ${vehicle_class}</p>
                      <p>length: ${lengthInFeet} ft</p>
                      <p>speed: ${max_atmosphering_speed} ?</p>
                      <p>crew: ${crew}</p>
                      <p>passengers: ${passengers}</p>
                  </div>
              </div
          `;

          // Display the content in the element with id 'Walker'
          document.getElementById("Walker").innerHTML = content;

          // Disable the button after fetching the data
          element.disabled = true;
      });
  // If there is an error
  } catch (error) {
      console.error('Error grabbing Walker:', error);
      document.getElementById('Walker').innerText = "Finally scrapped this walking tank concept.";
  }
};

// Export the function
export default fetchWalker;
