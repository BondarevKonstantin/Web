const toggleMenu = () => {
    const menu = document.querySelector('menu');

    document.querySelector('body').addEventListener('click', () => {
        let target = event.target;
        if (!menu.classList.contains('active-menu')) {
            if (target.classList.contains('menu')) {
                menu.classList.add('active-menu');
            } else {
                target = target.closest('.menu');
                if (target) {
                    menu.classList.add('active-menu');
                }
            }
        } else {
            if (target.classList.contains('close-btn') || target.classList.contains('menu-link')) {
                menu.classList.remove('active-menu');
            } else {
                target = target.closest('menu');
                if (!target) {
                    menu.classList.remove('active-menu');
                }
            }
        }
    });
};

export default toggleMenu;
