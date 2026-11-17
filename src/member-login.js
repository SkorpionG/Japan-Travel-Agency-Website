const showRegisterBtn = document.getElementById("show-register");
const showLoginBtn = document.getElementById("show-login");
const loginSection = document.getElementById("login-section");
const registerSection = document.getElementById("register-section");

if (showRegisterBtn && loginSection && registerSection) {
  showRegisterBtn.addEventListener("click", () => {
    loginSection.classList.add("hidden");
    registerSection.classList.remove("hidden");
  });
}

if (showLoginBtn && loginSection && registerSection) {
  showLoginBtn.addEventListener("click", () => {
    registerSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
  });
}
