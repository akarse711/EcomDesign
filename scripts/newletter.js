const newsletterForm = document.getElementById("newsletter-form");
const emailInput = document.getElementById("newsletter-email");
const messageDiv = document.getElementById('newsletter-message');

function generateCode(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email.includes("@")) {
    messageDiv.textContent = "Please enter a valid email address.";
    messageDiv.style.color = "red";
    return;
  }

  const code = generateCode();
  messageDiv.style.color = "green";
  messageDiv.textContent = `Thanks for subscribing! Your discount code is: ${code}`;

  newsletterForm.reset();
});