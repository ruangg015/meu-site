// Função para alternar a seleção das estrelas
document.querySelectorAll('.stars').forEach(starsContainer => {
    starsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('star')) {
            const ratingValue = event.target.getAttribute('data-value');
            const movieId = starsContainer.getAttribute('data-movie');

            // Limpa as seleções anteriores
            starsContainer.querySelectorAll('.star').forEach(star => {
                star.classList.remove('selected');
            });

            // Marca as estrelas selecionadas
            for (let i = 0; i < ratingValue; i++) {
                starsContainer.children[i].classList.add('selected');
            }

            // Salva a avaliação no localStorage
            localStorage.setItem(movieId, ratingValue);
        }
    });

    // Carrega a avaliação do localStorage
    const movieId = starsContainer.getAttribute('data-movie');
    const savedRating = localStorage.getItem(movieId);
    if (savedRating) {
        for (let i = 0; i < savedRating; i++) {
            starsContainer.children[i].classList.add('selected');
        }
    }
});

// Função para resetar a avaliação do filme
document.querySelectorAll('.resetBtn').forEach(button => {
    button.addEventListener('click', function() {
        const movieId = button.getAttribute('data-movie');
        const starsContainer = document.querySelector(`.stars[data-movie="${movieId}"]`);
        
        // Limpa as estrelas
        starsContainer.querySelectorAll('.star').forEach(star => {
            star.classList.remove('selected');
        });

        // Reseta o valor no localStorage
        localStorage.removeItem(movieId);
    });
});

