// DOM slection ko Lai const hru decalaration
const Name = document.getElementById("name")
const roll = document.getElementById("roll")
const address = document.getElementById("address")

const form = document.getElementById("entryform")
const btn_output = document.querySelector(".btn_output")

const transcript = document.querySelector("aside")
const show_data = document.querySelector(".show_data")

// Counter
let i = parseInt(localStorage.getItem("counter")) || 0

// Form Submit ko addeventlistener
form.addEventListener("submit", function (e) {
    e.preventDefault() // prevent page refresh

    const user_object = {
        data_name: Name.value,
        data_roll: Number(roll.value),
        data_address: address.value
    }

    
    i++
    localStorage.setItem("counter", i)

    localStorage.setItem(`user${i}`, JSON.stringify(user_object))

    // Update transcript
    UpdateTranscript(user_object)

    // Clear input fields
    Name.value = ""
    roll.value = ""
    address.value = ""
})

// btn ko eventlistenrr
btn_output.addEventListener("click", () => {
    show_data.innerHTML = "" // clear previous output

    for (let j = 1; j <= i; j++) {
        const user_retrieve = JSON.parse(localStorage.getItem(`user${j}`))
        if (user_retrieve) {
            ShowOutput(user_retrieve, j)
        }
    }
})

//function implementations //sir le deko func hru
function UpdateTranscript(obj){ //function to dynamically render UI in transcript section
    transcript.innerHTML = `
        <h2> Transcript </h2>
        ${description_list(obj)}
    `
}

function ShowOutput(obj, j){    //function to dynamically render UI in section_output section
     show_data.innerHTML += `
        <div class = "border">
            <h2> User${j}</h2>
            ${description_list(obj)}
        </div>
    `
}

//redundant code
function description_list(obj){
    return `
        <dl class = "details">
            <dt> Name: </dt>
            <dd> ${obj.data_name} </dd>

            <dt> Roll: </dt>
            <dd> ${obj.data_roll} </dd>

            <dt> Address: </dt>
            <dd> ${obj.data_address} </dd>
        </dl>
    `
}
