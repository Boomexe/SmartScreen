const timeText = document.getElementById("time-text");
const dateText = document.getElementById("date-text");
const factText = document.getElementById("fact-text");

const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateTime() {
    const currentDate = new Date();
    timeText.innerHTML = `${currentDate.getHours() > 9 ? currentDate.getHours() : "0" + currentDate.getHours()}:${currentDate.getMinutes() > 9 ? currentDate.getMinutes() : "0"+currentDate.getMinutes()}:${currentDate.getSeconds() > 9 ? currentDate.getSeconds(): "0" + currentDate.getSeconds()}`;
    
    dateText.innerHTML = `${dayOfWeek[currentDate.getDay()-1]}, ${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
}

function updateFact() {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    .then(response => {
        if (!response.ok) { 
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    })

    .then(data => {
        console.log(data);
        const requestText = data["text"];

        factText.querySelector("em").innerHTML = requestText;
    })
    .catch(error => {
        console.error('Error:', error)
    })
}

updateTime();
updateFact();

setInterval(updateTime, 1000);
setInterval(updateFact, 3.6e+5)