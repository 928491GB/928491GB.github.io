document.getElementById("verify-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const code = document.getElementById("verification-code").value;

  const correctCode = "GayBot"; 

  if (code === correctCode) {
    window.location.href = "key.html?auth=done";
  } else {
    document.getElementById("status").textContent = "Invalid Code.";
  }
});