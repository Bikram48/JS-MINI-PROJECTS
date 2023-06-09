const miniToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
links.className="links bikram"

miniToggle.onclick = showMobileNav

function showMobileNav() {
    // console.log("clicked")
    // links.classList.toggle("show-links")
    if(links.classList.contains("show-links")) {
        links.classList.remove("show-links")
    } else {
        links.classList.add("show-links")
    }
}

