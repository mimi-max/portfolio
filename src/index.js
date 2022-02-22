let header = document.querySelector('.main-header')

document.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if (window.scrollY > 50) {
        header.classList.add("main-header--dark")
    } else {
        header.classList.remove("main-header--dark")
    }
})