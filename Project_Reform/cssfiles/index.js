function toggleNav() {
    var nav = document.querySelector('menu-button-div');
    nav.computedStyleMap.display = (nav.computedStyleMap.display ==='flex') ? 'none' : 'flex';
}