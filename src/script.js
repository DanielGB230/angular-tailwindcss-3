/* este scrip es de la barra lateral/menu */
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('show');
            overlay.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('show');
            overlay.style.display = 'none';
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('show');
            overlay.style.display = 'none';
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            sidebar.classList.remove('show');
            overlay.style.display = 'none';
        }
    });
});
