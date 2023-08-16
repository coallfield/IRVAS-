import "./slider"
import modals from "./modules/modals"
import tabs from "./modules/tabs"
window.addEventListener('DOMContentLoaded', () => {
    modals('.popup_engineer', '.header_btn', '.phone_link', '.popup_close', '.popup')
    tabs('.glazing_block a', '.tabcontent', '.decoration_item a', '.tab_dec_content', 'after_click', 'no_click')



 

})
