function generateKey() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";
  for (let i = 0; i < 12; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("key").textContent = key;
  document.getElementById("key-box").style.display = "block"; 
}

window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const isAuthed = params.get("auth") === "done";

  const status = document.getElementById("status");
  const keyBox = document.getElementById("key-box");
  const keyText = document.getElementById("key");
  const getKeyButton = document.getElementById("get-key");

  if (isAuthed) {
    status.textContent = "Verified! Click 'Get Key' For Key";
    getKeyButton.style.display = "inline-block"; 
  } else {
    status.textContent = "	Not Verified!";
    getKeyButton.style.display = "none"; 
  }
};