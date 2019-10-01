const $menuItems = document.querySelectorAll('.main-nav .link[href^="#"]');

$menuItems.forEach($item => {
    $item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 70;
    scrollToPosition(to);
};

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
};

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
};

