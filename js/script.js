const loginForm = document.querySelector('#login-form')
const error = document.querySelector('#error-message')
const email = document.querySelector('#mail')
const password = document.querySelector('#password')
const loader = document.querySelector('#loader')

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    if (email.value == 'likeur.off@gmail.com' && password.value == '1234') {
        loader.classList.remove('hidden')
        setTimeout(() => {
            loader.classList.add('hidden')
            console.log('Bien connecté')
            window.location.assign('../pages/dashboard.html')
        }, 1500);
    }else{
        loader.classList.remove('hidden')
        setTimeout(() => {
            loader.classList.add('hidden')
            error.textContent = 'Echec'
        }, 1500);
    }

    loginForm.reset()
  
})
