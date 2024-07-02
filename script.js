function validateMessage() {
    const correctMessage = "hello";
    const userInput = document.getElementById("messageInput").value;
    const notification = document.getElementById("notification");

    if (userInput.toLowerCase() === correctMessage) {
        notification.textContent = "Correct message entered!";
        notification.style.color = "green";
    } else {
        notification.textContent = "Incorrect message. Try again.";
        notification.style.color = "red";
    }
}