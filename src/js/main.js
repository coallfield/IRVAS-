import "./slider"
import modals from "./modules/modals"
import tabs from "./modules/tabs"
import forms from "./modules/forms"
import calcModal from "./modules/calc-modal"
import timer from "./modules/timer"
import works from "./modules/works"

window.addEventListener('DOMContentLoaded', () => {
    let modalInfo = {}
    modals('.popup_engineer', '.header_btn', '.phone_link', '.popup_close', '.popup')
    tabs('.glazing_block a', '.tabcontent', '.decoration_item a', '.tab_dec_content', 'after_click', 'no_click')
    forms('form', 'input[name="user_phone"]', 'button[name="submit"]', 'assets/server.php', modalInfo)
    calcModal(modalInfo);
    timer();
    works();
    


    
})

