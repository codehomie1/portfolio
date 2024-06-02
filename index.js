document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    const formData = new FormData(this);
    formData.append("customer_name", formData.get("name"));
    formData.append("customer_email", formData.get("email"));

    emailjs.sendForm(
      "service_bybc66b",
      "template_gzqrsxh",
      this,
      function (response, error) {
        if (response) {
          console.log("Email sent successfully:", response);
          alert("Thank you for contacting us!");
        } else {
          console.error("Error sending email:", error);
          alert(
            "An error occurred while sending your message. Please try again later."
          );
        }
      }
    );

    // clear form
    this.reset();

    // change form into thank you message
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
  });

