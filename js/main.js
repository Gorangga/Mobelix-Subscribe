const btn = document.querySelector('#submit');
const form = document.querySelector('#subscription');
const messageEl = document.querySelector('#message');

btn.addEventListener('click', (e) => {
    // prevent the form from submitting
    e.preventDefault();
    subscribe();
});

const subscribe = async () => {
    try {
        let response = await fetch('submit.php', {
            method: 'POST',
            body: new FormData(form),
        });
        const result = await response.json();
        showMessage(result.message, response.status == 200 ? 'success' : 'error');
    } catch (error) {
        showMessage (error.message, 'error');
    }
};

const showMessage = (message, type = 'success') => {
    messageEl.innerHTML = `
    <div class="alert alert-${type}">
        ${message}
    </div>`;
};