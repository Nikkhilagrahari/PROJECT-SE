const BASE_URL = "https://project-se-soe4.onrender.com";

// Redirect to login if token missing
if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.href = "login.html";
}

function goToLost() {
  window.location.href = "lost.html";
}

function goToFound() {
  window.location.href = "found.html";
}
