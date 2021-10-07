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

this.addEventListener("DOMContentLoaded", () => {
    const tab = document.querySelectorAll(".tab")
    tab.forEach((t) => t.addEventListener("click", () => {

        if (t.parentNode.classList.contains("active")) {
            t.parentNode.classList.toggle("active")
            
        }
        else {
            tab.forEach(t => t.parentNode.classList.remove("active"))
            t.parentNode.classList.add("active")
            console.log(t)
        }
    }))
})