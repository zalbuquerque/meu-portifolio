// Aguarda o carregamento do DOM para iniciar os scripts
document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('main-header');
    const headerHeight = header.offsetHeight;

    // Scroll suave ao clicar nos links do menu de navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adiciona indicador de link ativo conforme o scroll da página
    const sections = document.querySelectorAll('.section-container');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - headerHeight - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Estilo dinâmico para o link ativo do menu
    const style = document.createElement('style');
    style.innerHTML = `
        nav a.active {
            background-color: var(--primary-color);
            color: var(--light-color);
        }
    `;
    document.head.appendChild(style);
});