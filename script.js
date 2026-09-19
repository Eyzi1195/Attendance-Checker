/* =================================
   LOGIN
================================= */

const loginPage = document.getElementById("loginPage");
const mainWebsite = document.getElementById("mainWebsite");

const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

const teacherIdInput = document.getElementById("teacherId");
const passwordInput = document.getElementById("password");

const teacherName = document.getElementById("teacherName");


// TEMPORARY LOGIN
// Database/authentication will be added later.

const DEMO_TEACHER_ID = "123456";
const DEMO_PASSWORD = "teacher123";


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const teacherId = teacherIdInput.value.trim();
    const password = passwordInput.value.trim();


    if (
        teacherId === DEMO_TEACHER_ID &&
        password === DEMO_PASSWORD
    ) {

        loginError.style.display = "none";

        teacherName.textContent = "Teacher " + teacherId;

        loginPage.classList.add("hidden");

        mainWebsite.classList.remove("hidden");

    } else {

        loginError.style.display = "block";

    }

});


/* =================================
   NAVIGATION
================================= */

const navItems =
    document.querySelectorAll(".nav-item");

const pages = {
    home: document.getElementById("homePage"),
    record: document.getElementById("recordPage"),
    about: document.getElementById("aboutPage")
};

const pageTitle =
    document.getElementById("pageTitle");


navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const selectedPage =
            item.getAttribute("data-page");


        // Remove active state
        navItems.forEach(function(nav) {

            nav.classList.remove("active");

        });


        item.classList.add("active");


        // Hide all pages
        Object.values(pages).forEach(function(page) {

            page.classList.remove("active-page");

        });


        // Show selected page
        pages[selectedPage].classList.add("active-page");


        // Change title
        if (selectedPage === "home") {

            pageTitle.textContent = "Home";

        }

        if (selectedPage === "record") {

            pageTitle.textContent = "Record";

        }

        if (selectedPage === "about") {

            pageTitle.textContent = "About Us";

        }

    });

});


/* =================================
   QR SCANNER MODAL
================================= */

const scanButton =
    document.getElementById("scanButton");

const scannerModal =
    document.getElementById("scannerModal");

const closeScanner =
    document.getElementById("closeScanner");


scanButton.addEventListener("click", function() {

    scannerModal.classList.add("show");

});


closeScanner.addEventListener("click", function() {

    scannerModal.classList.remove("show");

});


/* Close modal when clicking outside */

scannerModal.addEventListener("click", function(event) {

    if (event.target === scannerModal) {

        scannerModal.classList.remove("show");

    }

});


/* =================================
   LOGOUT
================================= */

const logoutButton =
    document.getElementById("logoutButton");


logoutButton.addEventListener("click", function() {

    mainWebsite.classList.add("hidden");

    loginPage.classList.remove("hidden");

    loginForm.reset();

    loginError.style.display = "none";

});