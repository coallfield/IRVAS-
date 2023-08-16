const modals = (modalWindow, mainButton, phoneLinks, closeModalButton, phoneModal) => {
    const button = document.querySelector(mainButton)
    const modalEngineer = document.querySelector(modalWindow)
    const closeButton = document.querySelectorAll(closeModalButton)
    const buttonContactUs = document.querySelectorAll(phoneLinks)
    const modalPhone = document.querySelector(phoneModal)

    let timerPhoneModalId = setTimeout(showPhoneModal, 60000)

    buttonContactUs.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            showPhoneModal();
        })
    })

    button.addEventListener('click', () => {
        showEngineerModal();
    })
    
    closeButton.forEach((el) => {
        el.addEventListener('click', () => {
           hideEngineerModal();
           hidePhoneModal();
        })
    })


    function hideEngineerModal() {
        modalEngineer.classList.remove('show');
        modalEngineer.classList.add('hide');
        document.body.style.overflow = ''
    }

    function showEngineerModal() {
        modalEngineer.classList.add('show');
        modalEngineer.classList.remove('hide');
        document.body.style.overflow = 'hidden'
    }

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains(modalWindow.slice(1))){
           hideEngineerModal();
        }
        if(e.target.classList.contains(phoneModal.slice(1))){
            hidePhoneModal();
        }
    })

    function showPhoneModal () {
        modalPhone.classList.add('show');
        modalPhone.classList.remove('hide');
        clearTimeout(timerPhoneModalId)
        document.body.style.overflow = 'hidden'
    }

    function hidePhoneModal() {
        modalPhone.classList.remove('show');
        modalPhone.classList.add('hide');
        document.body.style.overflow = ''
    }
}

export default modals