
const forms = (formsSelector, phoneInputSelector, submitButtonSelector, server, calcForm) => {
    const form = document.querySelectorAll(formsSelector);
    const phoneInput = document.querySelectorAll(phoneInputSelector);
    const submitButton = document.querySelectorAll(submitButtonSelector)
    
    
    
    phoneInput.forEach((input, ind) => {
        input.addEventListener('input', () => {
            if(input.value.match(/[^0-9 ]/g, '')){
                input.style.border = '1px solid red'
                submitButton[ind].setAttribute('disabled', "")
                submitButton[ind].style.background = 'grey'
                submitButton[ind].style.boxShadow = '1px 2px 20px 0px grey'
                submitButton[ind].style.border = '1px solid grey'
            } 
            else {
                input.style.border = ''
                submitButton[ind].removeAttribute('disabled')
                submitButton[ind].style.background = ''
                submitButton[ind].style.boxShadow = ''
                submitButton[ind].style.border = ''
            }
        })
    })

    
    
    form.forEach((el) => {
        bindPostData(el)
    })

    const message = {
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так!',
        loading: 'Ожидайте'
    }

    function makeElement(value, form) {
        const element = document.createElement('p')
        element.innerHTML = value
        element.style.color = 'red'
        setInterval(() => {
            element.remove()
        }, 3000)
        return form.insertAdjacentElement('beforeend', element)
        
    } 

    async function postData (url, form) {
        const request = await fetch(url, {
            method: 'POST',
            body: form
        })
        if(!request.ok){
            makeElement(message.failure, form);
        }
        return request
   }


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const formData = new FormData(form);
            if (form.classList.contains('end')) {
                for (let key in calcForm) {
                    formData.append(key, calcForm[key])
                }
                makePostRequest(form, formData)

            } else {
                makePostRequest(form, formData)
            }
        })
    }

    function makePostRequest(form, data) {
        const load = makeElement(message.loading, form)
        postData(server, data)
            .then(() => {
                makeElement(message.success, form);
            }).catch(() => {
                makeElement(message.failure, form);
            }).finally(() => {
                form.reset();
                load.remove();
            })
    }
    
}


export default forms

