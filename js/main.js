// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form — submits to Formspree via fetch so we can show an inline status
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var submitBtn = form.querySelector("button[type='submit']");

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            status.className = "form-status success";
            status.textContent = "Thanks! Your message has been sent — we'll get back to you shortly.";
            form.reset();
          } else {
            return response.json().then(function (data) {
              var detail =
                data && data.errors
                  ? data.errors.map(function (err) { return err.message; }).join(", ")
                  : "Please try again or email us directly at info@directfooddistribution.com.";
              status.className = "form-status error";
              status.textContent = "Something went wrong: " + detail;
            });
          }
        })
        .catch(function () {
          status.className = "form-status error";
          status.textContent =
            "Something went wrong sending your message. Please try again or email us directly at info@directfooddistribution.com.";
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        });
    });
  }
});
