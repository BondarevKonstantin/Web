const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо, мы скоро с вами свяжемся!';

    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3');

    const statusMessage = document.createElement('div');
    statusMessage.style.fontSize = '2rem';
    statusMessage.style.color = '#ffffff';

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    };

    [form1, form2, form3].forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let inputs = form.querySelectorAll('input');
            inputs.forEach(element => {
                element.value = '';
            });

            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);
            let body = {};

            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('Server connection failed');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch ((error) => {
                    console.error(error);
                    statusMessage.textContent = errorMessage;
                });
        });
    });
};

export default sendForm;
