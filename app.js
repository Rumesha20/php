document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        page.style.display = 'none';
    });

    const showPage = (pageId) => {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    };

    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetPageId = event.target.getAttribute('href').substring(1);
            showPage(targetPageId);
            history.pushState({}, targetPageId, `#${targetPageId}`);
            event.preventDefault();
        });
    });

    window.addEventListener('popstate', () => {
        const currentPageId = window.location.hash.substring(1);
        showPage(currentPageId);
    });
});
