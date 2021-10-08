this.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () => {

        if (question.parentNode.classList.contains("active")) {
            question.parentNode.classList.toggle("active")
        }
        else {
            questions.forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active")
            console.log(question)
        }
    }))
})

function validation(event) {
    event.preventDefault()

    let email = document.getElementById("email").value;
    let errorEmail = document.getElementById("error-email");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email == "") {
        errorEmail.innerHTML = "Email cannot be empty"
        document.querySelector(".error-container").style.display = " block";
        let err = document.getElementById("email")
        err.classList.add("error-input")
    }
    else {
        if (email.match(pattern)) {
            errorEmail.innerHTML = ""
            document.querySelector(".error-container").style.display = "none"
        }
        else {
            errorEmail.innerHTML = "Whoops, make sure it's an email"
            document.querySelector(".error-container").style.display = "block"
        }
    }

    return false
}

window.onload = function () {
    tab1.style.borderBottom = "4px solid var(--red)"
    tab1.style.opacity = "1"
}

let tab1 = document.querySelector('.first-css')
let tab2 = document.querySelector('.second-css')
let tab3 = document.querySelector('.third-css')

function slide1 () {
    document.querySelector(".section4-picture").style.backgroundImage = "url('/images/illustration-features-tab-1.svg')"
    document.querySelector(".section4-picture").style.backgroundPosition = "left top"
    document.querySelector(".section4-h1").innerHTML = "Bookmark in one click"
    document.querySelector(".section4-p").innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
}

function slide2 () {
    document.querySelector(".section4-picture").style.backgroundImage = "url('/images/illustration-features-tab-2.svg')"
    document.querySelector(".section4-picture").style.backgroundPosition = "center top"
    document.querySelector(".section4-h1").innerHTML = "Intelligent search"
    document.querySelector(".section4-p").innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
}

function slide3 () {
    document.querySelector(".section4-picture").style.backgroundImage = "url('/images/illustration-features-tab-3.svg')"
    document.querySelector(".section4-picture").style.backgroundPosition = "center top"
    document.querySelector(".section4-h1").innerHTML = "Share your bookmarks"
    document.querySelector(".section4-p").innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
}

tab1.addEventListener("click", () => {
    tab1.style.borderBottom = "4px solid var(--red)"
    tab1.style.opacity = "1"
    tab2.style.opacity = "0.75"
    tab3.style.opacity = "0.75"
    tab2.style.borderBottom = "none"
    tab3.style.borderBottom = "none"
    slide1()
})

tab2.addEventListener("click", () => {
    tab2.style.borderBottom = "4px solid var(--red)"
    tab2.style.opacity = "1"
    tab1.style.opacity = "0.75"
    tab3.style.opacity = "0.75"
    tab1.style.borderBottom = "none"
    tab3.style.borderBottom = "none"
    slide2()
})

tab3.addEventListener("click", () => {
    tab3.style.borderBottom = "4px solid var(--red)"
    tab3.style.opacity = "1"
    tab2.style.opacity = "0.75"
    tab1.style.opacity = "0.75"
    tab1.style.borderBottom = "none"
    tab2.style.borderBottom = "none"
    slide3()
})

