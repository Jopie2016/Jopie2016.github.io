
function submitForm() {
    let name = document.getElementById("name")
    let form = document.getElementById("myForm")
    // let errorElement = document.getElementById("error")

    if(name == "" || !isNaN(name)){
            alert("Enter your name Nowwwwwwwwww")
            document.getElementById("name").style.borderColor = "red";
        }

    // form.addEventListener("submit",(e) => {
    //     let messages = []
    //     if(name.value === "" || name.value == null){
    //     messages.push("Enter your name Nowwwwwwwwww")
    // }
    
    //     if(messages.length > 0){
    //     e.preventDefault()
    //     errorElement.innerText = messages.join(', ')
    // }
    console.log("hello")

    return false
}

