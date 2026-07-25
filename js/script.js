// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================================
// AI CHATBOT
// ================================

const openAI = document.getElementById("openAI");

const closeAI = document.getElementById("closeAI");

const chatbot = document.getElementById("aiChatbot");

const sendMessage = document.getElementById("sendMessage");

const userInput = document.getElementById("userInput");

const chatMessages = document.getElementById("chatMessages");


// OPEN AI

openAI.addEventListener("click", function () {

    chatbot.style.display = "block";

});


// CLOSE AI

closeAI.addEventListener("click", function () {

    chatbot.style.display = "none";

});


// SEND MESSAGE

sendMessage.addEventListener("click", function () {

    sendUserMessage();

});


userInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        sendUserMessage();

    }

});


// AI RESPONSE FUNCTION

function sendUserMessage() {


    const message = userInput.value.trim();


    if (message === "") {

        return;

    }


    // USER MESSAGE

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.textContent = message;


    chatMessages.appendChild(userMessage);


    userInput.value = "";


    // AI THINKING

    const thinkingMessage = document.createElement("div");

    thinkingMessage.className = "bot-message";

    thinkingMessage.textContent = "🤖 Fouji AI is thinking...";


    chatMessages.appendChild(thinkingMessage);


    chatMessages.scrollTop = chatMessages.scrollHeight;


    setTimeout(function () {


        thinkingMessage.remove();


        const response = getAIResponse(message);


        const botMessage = document.createElement("div");

        botMessage.className = "bot-message";

        botMessage.textContent = response;


        chatMessages.appendChild(botMessage);


        chatMessages.scrollTop = chatMessages.scrollHeight;


    }, 1000);

}


// BASIC AI KNOWLEDGE BASE

function getAIResponse(message) {


    const question = message.toLowerCase();


    if (

        question.includes("courage") ||

        question.includes("brave")

    ) {

        return "🛡️ Courage is the strength to face danger and challenges while continuing to perform one's duty.";

    }


    if (

        question.includes("discipline")

    ) {

        return "🎖️ Discipline teaches soldiers punctuality, responsibility, teamwork and dedication.";

    }


    if (

        question.includes("soldier")

    ) {

        return "🇮🇳 Soldiers protect the nation, serve with honour and make great sacrifices for the safety of citizens.";

    }


    if (

        question.includes("army")

    ) {

        return "🪖 The Army represents courage, discipline, teamwork, service and dedication to the nation.";

    }


    if (

        question.includes("jai hind") ||

        question.includes("hello") ||

        question.includes("hi")

    ) {

        return "🇮🇳 Jai Hind! Welcome to Welcome Fouji. How can I help you learn about our brave soldiers?";

    }


    if (

        question.includes("thank")

    ) {

        return "🇮🇳 Thank you for respecting our brave soldiers. Jai Hind!";

    }


    return "🤖 That's an interesting question! I can currently answer questions about soldiers, courage, discipline, army values and patriotism.";

}
