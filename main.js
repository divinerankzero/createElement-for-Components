// Update your code from the previous challenge to add the chat messages to the messages elements via a document fragment.
const fragment = document.createDocumentFragment();

const messagesElement = document.querySelector("#messages");

let messages = [
        "Are we doing fireworks this year?",
        `After last year's "tree incident", should we?`,
        "The fire fighters put it out in like a minute. Wasn't even a real fire.",
        "We can set them off in the street.",
        "Our neighbors' houses are flammable, too.",
        "DINOSAURS RULE THE EARTH"
]

for (let i = 0; i < messages.length; i++) {
    const section = document.createElement("section");
    section.innerHTML = messages[i];
    fragment.appendChild(section);
}

document.querySelector("#messages").appendChild(fragment);