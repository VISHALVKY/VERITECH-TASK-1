function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function closeNavOnClick(event) {
    // Close the sidenav when a link is clicked
    closeNav();
}
document.addEventListener('DOMContentLoaded', (event) => {
    // Add event listener to all sidenav links
    const sidenavLinks = document.querySelectorAll('#mySidenav a');
    sidenavLinks.forEach(link => {
        link.addEventListener('click', closeNavOnClick);
    });
});
