// JavaScript for Library App

document.addEventListener("DOMContentLoaded", () => {
    console.log("Library App Loaded");

    // Example: Dynamic feature for Featured Books
    const featuredSection = document.getElementById("featured");
    const newBook = {
        title: "Exploring JavaScript",
        image: "images/tech.jpg.png",
        description: "A comprehensive guide to modern JavaScript."
    };

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
        <img src="${newBook.image}" alt="${newBook.title}">
        <p>Title: ${newBook.title}</p>
        <p>${newBook.description}</p>
    `;

    featuredSection.appendChild(bookDiv);
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}
