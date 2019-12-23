let name = document.getElementById('name')
let password = document.getElementById('password')
let form = document.getElementById('form')
let errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push('Name is required')
    }

    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})