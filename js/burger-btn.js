export default function initBurgerBtn(){
    
    const menuBtn = document.querySelector('.hamburger');
    const pageList = document.querySelector('.page_links_list');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('is-active');
            pageList.classList.add('active');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('is-active');
            pageList.classList.remove('active');
            menuOpen = false;
        }
    });

    const links = document.querySelectorAll('.page_list_items a');
    links.forEach((e) => {
        e.addEventListener('click', () => {
            menuBtn.classList.remove('is-active');
            pageList.classList.remove('active');
        })
    });
}
