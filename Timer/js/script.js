window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // timer
    function countTimer(deadline) {

        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,

            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60) / 60);

            return {timeRemaining, hours, minutes, seconds};
        }

        function updateClock() {
            let timer = getTimeRemaining();

            if (timer.hours < 10) {
                timerHours.textContent = "0" + timer.hours;
            } else {
                timerHours.textContent = timer.hours;
            }

            if (timer.minutes < 10) {
                timerMinutes.textContent = "0" + timer.minutes;
            } else {
                timerMinutes.textContent = timer.minutes;
            }

            if (timer.seconds < 10) {
                timerSeconds.textContent = "0" + timer.seconds;
            } else {
                timerSeconds.textContent = timer.seconds;
            }

            if (timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000);
            } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }

        updateClock();
    }

    countTimer('29 october 2019');

    // Menu

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

    toggleMenu();

    // popup

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

    togglePopup();

    // Табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

            const toggleTabContent = (index) => {
                for (let i = 0; i < tabContent.length; i++) {
                    if (index === i) {
                        tab[i].classList.add('active');
                        tabContent[i].classList.remove('d-none');
                    } else {
                        tabContent[i].classList.add('d-none');
                        tab[i].classList.remove('active');
                    }
                }
            };


            tabHeader.addEventListener('click', (event) => {
                let target = event.target;
                    target = target.closest('.service-header-tab');

                if (target) {
                    tab.forEach((item, i) => {
                        if (item === target){
                            toggleTabContent(i);
                        }
                    });
                }
            });
    };

    tabs();
// Слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            dots = document.querySelector('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');

        for (let i = 0; i < slide.length; i++) {
            let li = document.createElement('li');
            dots.appendChild(li);
        }

        const dot = dots.querySelectorAll('li');

        for (let i = 0; i < dot.length; i++) {
            if (i == 0) {
                dot[i].classList.add('dot-active');
            }
            dot[i].classList.add('dot');
        }

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')){
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length-1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(3000);

    };

    slider();

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

    changeTeamPhoto();

// Калькулятор

    const checkCalcInput = () => {
        const inputs = document.querySelectorAll('input.calc-item');
        inputs.forEach(item => {
            item.addEventListener('input', () => {
                let pattern = /([^0-9.])/;
                item.value = item.value.replace(pattern, '');
            });
        });

    };

    checkCalcInput();

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1,
                typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if(calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('input', (event) => {
            let target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };

    calc();
});
