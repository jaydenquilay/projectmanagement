document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const firstName = this.firstName.value.trim();
    const lastName = this.lastName.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Thank you for your message, " + firstName + "! We'll be in touch soon.");
    this.reset();
  });