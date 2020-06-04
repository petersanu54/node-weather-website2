console.log('hello')
const  message1 = document.querySelector('#message1')
const  message2 = document.querySelector('#message2')
const form = document.querySelector('form')
const input = document.querySelector('input')
console.log('first')
form.addEventListener('submit',(e)=>{
    console.log('secnd')
    e.preventDefault()
    
    const location = input.value

    message1.textContent = "loading"
    message2.textContent = ""

    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            console.log('third')
            if(data.error){
                message1.textContent = data.error
            }
            message1.textContent = data.weather
        })
    })
})