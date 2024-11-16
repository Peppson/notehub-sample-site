
function toggleDropdown() {
    const menu = document.getElementById("dropdown-menu");
    
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function formSubmit() {
    alert("Success!"); // Massive functionality
}

// Close dropdown menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 740) {
        const menu = document.getElementById("dropdown-menu");
        menu.style.display = "none";
    }
});
