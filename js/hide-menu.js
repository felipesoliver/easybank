export default function increaseHideMenuInit() {
    
    const navBar = document.querySelector('header');
    let hideNavBar = window.pageYOffset;
    function hideMenu() {
        
        let showNavBar = window.pageYOffset;
        if(hideNavBar < showNavBar) {
            navBar.classList.add('faded');
        } else {
            navBar.classList.remove('faded');
        };
        hideNavBar = showNavBar;
    }
    window.addEventListener('scroll', hideMenu);
}