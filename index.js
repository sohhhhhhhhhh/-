document.getElementById('change-btn').addEventListener('click', function() {
    const greeting = document.getElementById('greeting-text');
    greeting.textContent = greeting.textContent === 'Hello, World!'
        ? 'Hello, FEFU!'
        : 'Hello, World!';
});