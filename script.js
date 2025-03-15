function buyToken() {
    const message = document.getElementById("buy-message");
    message.textContent = "Agent activation simulated! BANKER is now DCAing into MAX.";
    setTimeout(() => message.textContent = "", 3000);
}
