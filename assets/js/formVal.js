const form=document.getElementById("form")

const formname=document.getElementById("name")
const email=document.getElementById("email")
const subject=document.getElementById("subject")
const message=document.getElementById("message")

const nameErr=document.getElementById("nameErr")
const emailErr=document.getElementById("emailErr")
const emailValErr=document.getElementById("emailValErr")
const subjectErr=document.getElementById("subjectErr")
const messageErr=document.getElementById("messageErr")
var validRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit",(Event)=>{
    if(formname.value ===""){
        Event.preventDefault()
        nameErr.classList.remove("display-none")
        formname.focus()
    }
    if(email.value===""){
        Event.preventDefault()
        emailErr.classList.remove("display-none")
        email.focus()
    }
    if(!validRegex.test(email.value)){
        Event.preventDefault()
        emailValErr.classList.remove("display-none")
        email.focus()
    }
    if(subject.value===""){
        Event.preventDefault()
        subjectErr.classList.remove("display-none")
        subject.focus()
    }
    if(message.value===""){
        Event.preventDefault()
        messageErr.classList.remove("display-none")
        message.focus()
    }

}
    
)