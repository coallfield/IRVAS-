
const calcModal = (modalInfo) => {

    //Calc Modal
    const calcModalButtons = document.querySelectorAll('.popup_calc_btn');
    const calcModals = document.querySelector('.popup_calc');
    const buttonCloseCalcModal = document.querySelector('.popup_calc_close');
    const balconIcons = document.querySelectorAll('.balcon_icons_img');
    const bigImages = document.querySelectorAll('[data-glazing]');
    const nextButton = document.querySelector('.popup_calc_button');
    
   

    //Profile Modal
    const profileModal = document.querySelector('.popup_calc_profile');
    const closeProfileModalButton = document.querySelector('.popup_calc_profile_close');
    const nextProfileButton = document.querySelector('.popup_calc_profile_button');
    const selectGlazing = document.querySelector('#view_type');


    // Final Modal
    const finalModal = document.querySelector('.popup_calc_end');
    const closeFinalButton = document.querySelector('.popup_calc_end_close');
    

    

    // one resolution for all photos
    bigImages.forEach(el => {
        el.style.margin = 'auto'
        el.style.marginBottom = '3rem'
        el.style.width = '300px'
        el.style.height = '201px'
    })
    
   

    hideBigImages();
    showBigImages();
    setDisableButtons(nextButton);
    closeButton(buttonCloseCalcModal, calcModals);
    closeButton(closeProfileModalButton, profileModal);
    closeButton(closeFinalButton, finalModal);
    backgroundClose('popup_calc', calcModals);
    backgroundClose('popup_calc_profile', profileModal);
    backgroundClose('popup_calc_end', finalModal);
    checkBoxes();
    


   
    document.addEventListener('change', () => {
        if(!document.getElementById('cold-check').checked && !document.getElementById('warm-check').checked){
            setDisableButtons(nextProfileButton);
        } 
        else {
            setEnableButtons(nextProfileButton);
        }
    })
    
   
    selectGlazing.addEventListener('change', () => {
        modalInfo.glazingType = selectGlazing.value;
    })

    document.querySelectorAll("#width,#height").forEach((el) => {
        el.addEventListener("input", () => {
            if (document.getElementById("width").value === '' || document.getElementById("height").value === '' || document.getElementById("width").value.match(/[^0-9 ]/g, ' ') || document.getElementById("height").value.match(/[^0-9 ]/g, ' ')) {
                setDisableButtons(nextButton)
            } else {
                setEnableButtons (nextButton);
                modalInfo.width = document.getElementById("width").value
                modalInfo.height = document.getElementById("height").value
            }

        });
    });

    balconIcons.forEach((el, ind) => {
        el.addEventListener('click', () => {
            hideBigImages();
            modalInfo.windowForm = ind + 1
            balconIcons.forEach(el => el.classList.remove('do_image_more'));
            el.classList.add('do_image_more');
            showBigImages(ind);
            
        })
    })

   
    nextButton.addEventListener('click', () => {
        closeModal(calcModals);
        openModal(profileModal);
        modalInfo.glazingType = selectGlazing.value;
    })

    nextProfileButton.addEventListener('click', () => {
        closeModal(profileModal);
        openModal(finalModal);
    })

    calcModalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(calcModals);
            balconIcons.forEach((el, ind) => {
                if(el.classList.contains('do_image_more')){
                    modalInfo.windowForm = ind + 1
                }
            })
        })
    })

    // Functions 

    function hideBigImages() {
        bigImages.forEach(el => el.classList.remove('show'))
        bigImages.forEach(el => el.classList.add('hide'))
    }

    function showBigImages(ind = 0) {
        bigImages[ind].classList.add('show');
        bigImages[ind].classList.remove('hide');
    }


    function closeModal(modal) {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = ''
    }

    function openModal(modal) {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'
    }

    function closeButton(button, modal){
        button.addEventListener('click', () => {
            closeModal(modal);
        })
    }

    function backgroundClose(selector, modal){
        document.addEventListener('click', (e) => {
            if(e.target.classList.contains(selector)){
                closeModal(modal)
            }
        })
    }

    
    function setDisableButtons(button) {
        button.setAttribute('disabled', '')
        button.style.background = 'grey'
        button.style.boxShadow = '1px 2px 20px 0px grey'
        button.style.border = '1px solid grey'
    } 
    function setEnableButtons(button) {
        button.removeAttribute('disabled');
        button.style.background = ''
        button.style.boxShadow = ''
        button.style.border = ''
    }

    function checkBoxes() {
        document.getElementById('cold-check').addEventListener('change', () => {
            if(document.getElementById('cold-check').checked){
                document.getElementById('warm-check').checked = false
                modalInfo.windowProfile = 'cold'
            } 
        })
        document.getElementById('warm-check').addEventListener('change', () => {
            if(document.getElementById('warm-check').checked){
                document.getElementById('cold-check').checked = false
                modalInfo.windowProfile = 'warm'
            } 
        })  
    }

   
   
}

export default calcModal








