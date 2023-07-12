// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogImageContainer = document.getElementById("dog-image-container");

      data.message.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        dogImageContainer.appendChild(img);
      });
    });
});

// Challenge 2
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogBreeds = document.getElementById("dog-breeds");

      for (const breed in data.message) {
        const li = document.createElement("li");
        li.textContent = breed;
        dogBreeds.appendChild(li);
      }
    });
});

// Challenge 3
document.addEventListener("DOMContentLoaded", () => {
  const dogBreeds = document.getElementById("dog-breeds");

  dogBreeds.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.style.color = "blue"; // Change the font color to blue
    }
  });
});

// Challenge 4
document.addEventListener("DOMContentLoaded", () => {
  const breedDropdown = document.getElementById("breed-dropdown");
  const dogBreeds = document.getElementById("dog-breeds");

  breedDropdown.addEventListener("change", (event) => {
    const selectedLetter = event.target.value;

    // Reset the font color of all list items
    const lis = dogBreeds.getElementsByTagName("li");
    for (const li of lis) {
      li.style.color = "";
    }

    // Filter and display the breeds starting with the selected letter
    const filteredBreeds = Array.from(lis).filter((li) =>
      li.textContent.startsWith(selectedLetter)
    );
    for (const li of filteredBreeds) {
      li.style.color = "green"; // Change the font color to green for filtered breeds
    }
  });
});


