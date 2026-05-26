// Mobile Navbar

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// EmailJS Init

emailjs.init("cPtl2ConaHbof1h1N");

// Contact Form Email Send

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    const btn =
    this.querySelector("button");

    btn.innerText = "Sending...";

    const params = {
        from_name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        message:
        document.getElementById("message").value,

        subject:
        "New Portfolio Contact"
    };

    emailjs.send(
        "service_hl45zom",
        "template_qv74pz3",
        params
    )

    .then(() => {

        alert(
        "Message Sent Successfully 🚀"
        );

        document
        .getElementById("contact-form")
        .reset();

        btn.innerText =
        "Send Message";
    })

    .catch((error) => {

        console.log(error);

        alert(
        "Failed to send message ❌"
        );

        btn.innerText =
        "Send Message";
    });

});