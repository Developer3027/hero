// Function to fetch and display Luke Skywalker
// Called by button so pass in element
const fetchLuke = async (element) => {
    /**
     * Async function to fetch and parse the response from
     * https://www.swapi.tech/api/people/1. The response is expected
     * to be in JSON format and contain the properties for Luke Skywalker.
     * @function
     * @returns {Promise<Object>} - The parsed response data
     */
    const response = async () => {
        const res = await fetch("https://www.swapi.tech/api/people/1");
        const data = await res.json();
        console.log("Calling swapi api for Luke Skywalker");
        return data;
    };
    // Try to fetch Luke Skywalker
    try {
        // Fetch Luke Skywalker before click event of button
        // const LukeData = await response();
        
        // Set up the click event listener on the button
        element.addEventListener('click', async () => {
            const currentLukeData = await response(); // Fetch Luke Skywalker object

            // Extract wanted properties from object
            const { name, height, mass } = currentLukeData.result.properties;
            const heightToInches = height / 2.54; // Convert height to inches
            const heightInFeet = Math.round(heightToInches / 12 * 10) / 10; // Convert height to feet with one decimal point
            const massInPounds = Math.round(mass * 2.20462); // Convert mass to pounds
            
            // Create the content to display
            const content = `
                <div class="card-wrapper">
                    <img src="https://media.gettyimages.com/id/1934832068/photo/a-new-hope.jpg?s=612x612&w=gi&k=20&c=8CBK7lbFyEtBm7tqfuP8cQmL3QvoOCEc1MJKnzIq-1k=" style="width: 50%; border-radius: 5px;" alt="${name}" />
                    <div class="card-content">
                        <h3>${name}</h3>
                        <p>This young man was going places. He became a fighter pilot at a young age and loved 
                        those movies where the fighter pilot fly's around listening to music. On this day, when 
                        being attacked by the evil Empire, he formed a squad and went at them, improvising a 
                        sick rap while dodging the Empire's attacks. It is still not clear what exactly caused the 
                        zombie outbreak. This classified footage is the last few minutes of the battle.</p>
                        <p>Height: ${heightInFeet} ft</p>
                        <p>Weight: ${massInPounds} lbs</p>
                    </div>
                </div
            `;

            // Display the content in the element with id 'Luke'
            document.getElementById("Luke").innerHTML = content;

            // Disable the button after fetching the data
            // Prevent multiple api calls
            element.disabled = true;
        });
    // Catch any errors of api call.
    } catch (error) {
        console.error('Error grabbing Luke:', error);
        document.getElementById('Luke').innerText = 'Luke may have lost his hand.';
    }
};

// Export the function as default
export default fetchLuke;
