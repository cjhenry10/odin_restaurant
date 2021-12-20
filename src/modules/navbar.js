
console.log("navbar.js");

export function constructNavbar(navLinks) {

    const showPage = (link) => {
        console.log(link);
        let pageSection = document.getElementById(link);

        function timeFunc1() {
            pageSection.classList.remove("hidden");
            pageSection.classList.add("show");
            let x = document.getElementById("responsive");
            if (x.className === "navbar-links") {
                x.className += " active";
            }
            else {
                x.className = "navbar-links"
            }
        }
        function timeFunc2() {
            navLinks.forEach((navLink) => {
                if (navLink !== link && document.getElementById(navLink).classList == "show") {
                    document.getElementById(navLink).classList.add("hidden");
                    document.getElementById(navLink).classList.remove("show");
                };
            })
        }

        setTimeout(timeFunc1, 300);
        setTimeout(timeFunc2, 250);
    }

    const navBar = document.createElement("nav");
    navBar.classList.add("navbar");

    const hamburger = document.createElement("a");
    hamburger.href = "javascript:void(0)";
    hamburger.classList.add("toggle-button");
    hamburger.onclick = function() {
        let x = document.getElementById("responsive");
        if (x.className === "navbar-links") {
            x.className += " active";
        }
        else {
            x.className = "navbar-links"
        }
    }
    for (let i = 0; i < 3; i++) {
        let bar = document.createElement("span");
        bar.classList.add("bar");
        hamburger.appendChild(bar);
    }
    navBar.appendChild(hamburger);

    const linkDiv = document.createElement("div");
    linkDiv.classList.add("navbar-links");
    linkDiv.id = "responsive";

    const navUl = document.createElement("ul");


    navLinks.forEach((link) => {
        let navLi = document.createElement("li");
        let navA = document.createElement("a");

        navA.onclick = () => showPage(link);
        // navA.onclick = setTimeout(console.log("timeout test", 4000));
        
        navA.textContent = link;
        navLi.appendChild(navA);
        navUl.appendChild(navLi);
    });

    linkDiv.appendChild(navUl);
    navBar.appendChild(linkDiv);
    document.body.insertBefore(navBar, document.getElementById("content"));
}