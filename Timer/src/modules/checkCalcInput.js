const checkCalcInput = () => {
    const inputs = document.querySelectorAll('input.calc-item');
    inputs.forEach(item => {
        item.addEventListener('input', () => {
            let pattern = /([^0-9.])/;
            item.value = item.value.replace(pattern, '');
        });
    });

};

export default checkCalcInput;
