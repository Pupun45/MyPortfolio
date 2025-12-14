document.addEventListener("DOMContentLoaded", function () {

    /* ============================
       SCROLL REVEAL ANIMATION
    ============================ */
    const scrollElements = document.querySelectorAll(".hidden-scroll");

    if (scrollElements.length > 0) {

        const elementInView = (el, offset = 0) => {
            const elementTop = el.getBoundingClientRect().top;
            return elementTop <= (window.innerHeight - offset);
        };

        const displayScrollElement = (el) => {
            const delay = el.dataset.delay || 0;
            el.style.transitionDelay = delay + "s";
            el.classList.add("visible-scroll");
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach(el => {
                if (elementInView(el, 100)) {
                    displayScrollElement(el);
                }
            });
        };

        window.addEventListener("scroll", handleScrollAnimation);
        handleScrollAnimation();
    }

    /* ============================
       PROFILE IMAGE HOVER POPUP
    ============================ */
    const img = document.getElementById("profile-img");
    const popup = document.getElementById("tech-stack-popup");

    if (img && popup) {
        img.addEventListener("mouseenter", () => {
            popup.classList.remove("opacity-0", "translate-x-4");
            popup.classList.add("opacity-100", "translate-x-0");
        });

        img.addEventListener("mouseleave", () => {
            popup.classList.add("opacity-0", "translate-x-4");
            popup.classList.remove("opacity-100", "translate-x-0");
        });
    }

});


document.addEventListener("DOMContentLoaded", function () {

    const scrollElements = document.querySelectorAll(".hidden-scroll");

    const elementInView = (el, offset = 150) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= window.innerHeight - offset;
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach(el => {
            if (elementInView(el)) {
                el.classList.add("visible-scroll");
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // run on load
});

//Resume js

// Scroll Reveal
document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".hidden-scroll");

    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    };

    const displayScrollElement = (element) => {
        const delay = parseFloat(element.dataset.delay || 0);
        element.style.transitionDelay = `${delay}s`;
        element.classList.add("visible-scroll");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // run once on load
});

// Optional: you can add download logging or interaction here if needed
document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector(".download-btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            console.log("Resume download clicked!");
        });
    }
});

const RECIPIENT_EMAIL = "youremail@example.com"; // Change to your email

//Contact section
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const gmailLink = document.getElementById('gmailDirectLink');

    form?.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const senderEmail = document.getElementById('senderEmail').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !senderEmail || !subject || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        const emailBody = `Hi Jyoti,\n\nI am ${name} and I am contacting you regarding:\n\n${message}\n\nYou can reach me at ${senderEmail}.\n\nBest regards,\n${name}`;
        const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    });

    // Gmail Direct Link
    if (gmailLink) {
        gmailLink.href = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=Inquiry%20from%20Portfolio`;
    }

    // Scroll Reveal
    const scrollElements = document.querySelectorAll(".hidden-scroll");
    const elementInView = (el, offset = 0) => el.getBoundingClientRect().top <= (window.innerHeight - offset);
    const displayScrollElement = (el) => el.classList.add("visible-scroll");
    const handleScrollAnimation = () => {
        scrollElements.forEach(el => { if (elementInView(el, 150)) displayScrollElement(el); });
    };
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
});
