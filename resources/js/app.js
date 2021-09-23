// Your application should meet the requirements listed below:
// 1. Selects from a pool of at least ten names of your classmates.
// 2. A 'Generate Random Names' button that initiates the selection of 4 random names.
// 3. The selected random names are displayed to the browser.
// 4. Each time the Generate Random Names button is pressed, a new set of names appears 
//    (replacing the previous set of 4 random names)
// 5. A button named 'Clear' that removes the populated list from the screen
// 6. The application should be designed to be visually pleasing. 
// Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-5).


//Array of names
const nameArray = ["Ghislaine", "Kaleab", "Anthony T", "Anthony B", "Martin", "Alyssa", "Raven", "Vishva", "Alexandra", "Yannick", "Noah", "Hector", "Perom"];

//Random Name Generator Button
//Get event Target
const grnButton = document.getElementById('randNameGen');
//Where will my randomly generated list go?
const list = document.getElementById('myList');
//Event Handler Function
const generatorFunction = () => {
        document.getElementById('myList').innerHTML = "";
        const prompt = window.prompt("How many names would you like?");
        if(prompt > 20) {
            alert("Please enter a number below 20")
        } else {
    for (let i = 0; i < prompt; i++) {
        let randomNumber = (Math.floor(Math.random()*nameArray.length));
        const randomNameArray = [];
        randomNameArray.push(nameArray[randomNumber]);
        randomNameArray.forEach((item) => {
            let li = document.createElement("li");
            li.innerHTML = item;
            list.appendChild(li);
        })
    }
    }   
}
//Add Event Listener to Target and pass in 'click' and Event Handler as arguments
grnButton.addEventListener('click', generatorFunction);


//Clear Button Functionality
//Get Clear Button - our Event Target 
const clearButton = document.getElementById('clear');
//Define Event Handler
const clearNames = () => {
    document.getElementById('myList').innerHTML = "";
}
//Add Event Listener to Target and pass in 'click' and Event Handler as arguments
clearButton.addEventListener('click', clearNames);

