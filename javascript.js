const endDate = "16 July 2023 10:00 PM"

document.getElementById("endDate").innerText = endDate

const inputs = document.querySelectorAll("input")

// const clock = () =>{

// }



function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000
    if(diff<0) return
    // conver into days
    inputs[0].value = Math.floor(diff / 3600 / 24) 
    inputs[1].value = (Math.floor(diff/3600)%60)
    inputs[2].value = (Math.floor(diff/60)%60)
    inputs[3].value = Math.floor(diff%60)

}

setInterval(() => {
    clock()
}, 1000);


// 1 day = 24 hrs 
// 1 hr = 60 mint 
// 1 mint = 60 sec