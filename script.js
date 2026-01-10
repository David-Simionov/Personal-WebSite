// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu on link click (mobile)
navLinks?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// ================= EMAILJS CONTACT FORM =================

(function () {
    emailjs.init("F_dMJQSErAxVM0Rdc");
})();

const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm?.addEventListener("submit", function (e) {
    e.preventDefault();

    formMsg.textContent = "⏳ Sending message...";
    formMsg.style.color = "#666";

    emailjs.sendForm(
        "service_ss1wkma",
        "template_l5jg6k5",
        this
    ).then(() => {
        formMsg.textContent = "✅ Message sent successfully!";
        formMsg.style.color = "green";
        contactForm.reset();
    }).catch((error) => {
        console.error("EmailJS error:", error);
        formMsg.textContent = "❌ Error sending message. Try again.";
        formMsg.style.color = "red";
    });
});


window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.6s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }, 1200);
});
