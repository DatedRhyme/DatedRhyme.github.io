function validateMessage() {
    const correctMessage = "Login";
    const userInput = document.getElementById("messageInput").value;
    const notification = document.getElementById("notification");

    if (userInput.toLowerCase() === correctMessage) {
        notification.textContent = "PRP=[Insert Flag Here]";
        notification.style.color = "blue";
    } else {
        notification.textContent = "ACCESS DENIED";
        notification.style.color = "red";
    }
}