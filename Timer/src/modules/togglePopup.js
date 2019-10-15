const togglePopup = () => {
    const popup = document.querySelector(".popup"),
        popupBtn = document.querySelectorAll(".popup-btn");

    popupBtn.forEach(element => {
        element.addEventListener('click', () => {
            popup.style.display = 'block';
        });

    popup.addEventListener('click', () => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popup.style.display = 'none';
            }
        }


    });

    });
};

export default togglePopup;
