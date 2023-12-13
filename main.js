const adviceId = document.querySelector('#advice-id')
const adviceContent = document.querySelector('#advice-content')

const fetchAdvice = async () => {
    try{
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()

        if(response.ok){
            adviceContent.innerHTML = `"${data.slip.advice}"`
            adviceId.innerHTML = data.slip.id
        }
        if(!response.ok){
            adviceContent.innerHTML = `<span class="error">Something went wrong</span>`
        }
    }catch(error){
        adviceContent.innerHTML = `<span class="error">Something went wrong</span>`
    }
}

fetchAdvice()


