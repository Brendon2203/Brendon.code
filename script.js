    const text = "Full-Stack Developer";
        let index = 0;
        function typeEffect() {
            if (index < text.length) {
                document.getElementById("typingText").textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100); // Velocidade da digitação
            }
        }
        document.addEventListener("DOMContentLoaded", typeEffect);

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se há um tema salvo no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        // Atualiza o texto do botão se o tema for escuro
        if (currentTheme === 'dark-theme') {
            themeToggle.textContent = 'Tema Claro';
        }
    }

    // Adiciona o evento de clique ao botão
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // Salva a preferência do tema no localStorage
        let theme = 'light-theme'; // Padrão é claro
        if (body.classList.contains('dark-theme')) {
            theme = 'dark-theme';
            themeToggle.textContent = 'Tema Claro';
        } else {
            themeToggle.textContent = 'Tema Escuro';
        }
        localStorage.setItem('theme', theme);
    });

    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão do link
            const targetId = link.getAttribute('href'); // Pega o href (ex: #sobre)
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posição do elemento alvo
                const headerOffset = document.querySelector('header').offsetHeight; // Altura do cabeçalho fixo
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                // Rola suavemente até a posição ajustada
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

