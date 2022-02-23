let header = document.querySelector('.main-header')

document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("main-header--dark")
    } else {
        header.classList.remove("main-header--dark")
    }
})
/*
let job = document.getElementById("job");
const finalString = job.textContent
let count = 0
job.innerText = ''
function writeLetter() {
    console.log(job.textContent)
    job.textContent += finalString[count]
    count++
    if (job.textContent.length < finalString.length) {
        setTimeout(writeLetter, 300)
    }
}
setTimeout(writeLetter, 300)
*/

let job = document.getElementById("job")
let stringArray = job.textContent.split("")
job.textContent=""
let string = ""
let count = 0;
const myInterval = setInterval(letterWritting, 300);

function letterWritting() {
    if (count < stringArray.length) {
        string += stringArray[count]
        job.textContent = string
        count++
        // console.log(string)
        
    }else{
        clearInterval(myInterval)
    }
}


