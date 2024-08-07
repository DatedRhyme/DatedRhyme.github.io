function validateMessage() {
    const correctMessage = "boba";
    const userInput = document.getElementById("messageInput").value;
    const notification = document.getElementById("notification");

    if (userInput.toLowerCase() === correctMessage) {
        notification.textContent = "PRP=[Flag]";
        notification.style.color = "green";
    } else {
        notification.textContent = "Access Denied.";
        notification.style.color = "red";
    }
}

function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("September 1, 2024 00:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.textContent = "The date has passed!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    updateCountdown(); // Initial call to display immediately
    const interval = setInterval(updateCountdown, 1000); // Update every second
}

document.addEventListener("DOMContentLoaded", startCountdown);
