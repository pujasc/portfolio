document.addEventListener('DOMContentLoaded', function() {
    const hello = document.getElementById('hello');
    const greetings = ['BONJOUR', 'HOLA', 'HELLO', 'CIAO', 'HALLO', 'こんにちは', '안녕하세요'];
    let index = 0;

    setInterval(() => {
        hello.textContent = greetings[index];
        index = (index + 1) % greetings.length;
    }, 2000);
});