const changeTeamPhoto = () => {

    const photoBlock = document.getElementById('command');

    photoBlock.addEventListener('mouseover', (event) => {
        let target = event.target;
        if (target.matches('img')) {
            let savedSrc = target.src;
            target.src = target.dataset.img;
            target.dataset.img = savedSrc;
        }
    });

    photoBlock.addEventListener('mouseout', (event) => {
        let target = event.target;
        if (target.matches('img')) {
            let savedSrc = target.src;
            target.src = target.dataset.img;
            target.dataset.img = savedSrc;
        }
    });

};

export default changeTeamPhoto;
