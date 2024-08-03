document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const nameInput = form.querySelector('input[name="name"]');
    const surnameInput = form.querySelector('input[name="surname"]');
    const numberInput = form.querySelector('input[name="number"]');
    const addressInput = form.querySelector('input[name="address"]');
    const orderInput = form.querySelector('input[name="order"]');
    const message = form.querySelectorAll('.message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            message[1].textContent = 'Поле не повинне бути порожнім!';
            isValid = false;
        } else {
            message[1].textContent = '';
        }

        if (surnameInput.value.trim() === '') {
            message[0].textContent = 'Поле не повинне бути порожнім!';
            isValid = false;
        } else {
            message[0].textContent = '';
        }

        if (numberInput.value.trim() === '') {
            message[2].textContent = 'Поле не повинне бути порожнім!';
            isValid = false;
        } else {
            message[2].textContent = '';
        }

        if (addressInput.value.trim() === '') {
            message[3].textContent = 'Поле не повинне бути порожнім!';
            isValid = false;
        } else {
            message[3].textContent = '';
        }

        if (orderInput.value.trim() === '') {
            message[4].textContent = 'Поле не повинне бути порожнім!';
            isValid = false;
        } else {
            message[4].textContent = '';
        }

        if (isValid) {
            // Here you can handle form submission (e.g., sending data to backend or showing confirmation)
            // For demo purposes, let's show a confirmation message
            alert('Форма успішно відправлена!');
            form.reset();
        }
    });
});
