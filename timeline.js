window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.container');
    var windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        var position = element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            element.classList.add('show');
        }
    });
});
