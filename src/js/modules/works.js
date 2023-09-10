const works = () => {
    const worksWrapper = document.querySelector('.works');
    const imagesPopup = document.createElement('div')
    const bigImages = document.createElement('img')

    worksWrapper.appendChild(imagesPopup);
    imagesPopup.classList.add('popup');
    imagesPopup.style.justifyContent = 'center';
    imagesPopup.style.alignItems = 'center';
    imagesPopup.style.display = 'none'
    imagesPopup.appendChild(bigImages);
    
    

    worksWrapper.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.classList.contains('preview')){
            const path = e.target.closest('a').getAttribute('href');
            bigImages.setAttribute('src', path)
            imagesPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
    })

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('popup')) {
            imagesPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    })

}

export default works