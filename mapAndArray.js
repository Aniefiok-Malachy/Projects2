// Create a Map to store users and their roles
let userRoles = new Map();

// Create an array to store full user details
let users = [];

// Function to add user
function addUser() {
  const username = document.getElementById("username").value.trim();
  const role = document.getElementById("role").value.trim();
  const location = document.getElementById("location").value.trim();
  const imageFile = document.getElementById("imageUpload").files[0];

  if (username && role && location && imageFile) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const imgSrc = event.target.result;

      // Add to Map
      userRoles.set(username, { role, location, imgSrc });

      // Add to Array
      users.push([username, role, location, imgSrc]);

      // Update the display
      displayUsers();

      // Reset inputs
      document.getElementById("username").value = "";
      document.getElementById("role").value = "";
      document.getElementById("location").value = "";
      document.getElementById("imageUpload").value = "";
    };

    reader.readAsDataURL(imageFile);
  } else {
    alert("Please fill in all fields and upload a profile image.");
  }
}

// Function to display users
function displayUsers() {
  const userDisplay = document.getElementById("userDisplay");
  userDisplay.innerHTML = "";

  users.forEach(([name, role, location, imgSrc]) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <img src="${imgSrc}" alt="${name}'s photo">
      <div class="user-details">
        <strong>Name:</strong> ${name}<br>
        <strong>Role:</strong> ${role}<br>
        <strong>Location:</strong> ${location}
      </div>
    `;

    userDisplay.appendChild(card);
  });
}
