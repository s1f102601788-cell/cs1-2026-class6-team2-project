const logoButton = document.getElementById("logo-button");

if (logoButton) {
    logoButton.addEventListener("click", function () {
        const sidebar = document.getElementById("sidebar");

        if (sidebar) {
            sidebar.classList.toggle("active");
            document.body.classList.toggle("sidebar-active");
        }
    });
}
