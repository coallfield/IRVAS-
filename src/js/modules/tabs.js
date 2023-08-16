const tabs = (glazingTabSelector, glazingContentSelector, decorTabSelector, decorContentSelector, activeClass, notActiveClass) => {
    //Glazing 

   const glazingTabs = document.querySelectorAll(glazingTabSelector);
   const tabsGlazingContent = document.querySelectorAll(glazingContentSelector);
   hideGlazingTabs();
   showGlazingTab();

   glazingTabs.forEach((el, ind) => {
        el.addEventListener('click', () => {
            hideGlazingTabs();
            showGlazingTab(ind);
        });
   });

   function hideGlazingTabs() {
        tabsGlazingContent.forEach(el => el.classList.add('hide'));
        tabsGlazingContent.forEach(el => el.classList.remove('show'));
   }

   function showGlazingTab(ind = 0) {
        tabsGlazingContent[ind].classList.remove('hide');
        tabsGlazingContent[ind].classList.add('show');
   }

   //Decoration

    const decorationTabs = document.querySelectorAll(decorTabSelector);
    const tabsDecorationContent = document.querySelectorAll(decorContentSelector);
    
    decorationTabs.forEach((el, ind) => {
        el.addEventListener('click', () => {
            hideDecorationTabs();
            showDecorationTab(ind);
        })


        function hideDecorationTabs() {
            tabsDecorationContent.forEach(el => el.classList.add('hide'));
            tabsDecorationContent.forEach(el => el.classList.remove('show'));
            decorationTabs.forEach(el => el.closest('div').classList.remove(activeClass))
            decorationTabs.forEach(el => el.closest('div').classList.add(notActiveClass))
        }

        function showDecorationTab(ind = 0) {
            decorationTabs[ind].closest('div').classList.add(activeClass)
            decorationTabs[ind].closest('div').classList.remove(notActiveClass)
            tabsDecorationContent[ind].classList.remove('hide');
            tabsDecorationContent[ind].classList.add('show');
        }

    })
}

export default tabs