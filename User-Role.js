// Create a Map to store users and their roles
let userRoles = new Map([]);

// Function to display users in the list
function displayUsers() {
  const userList = document.getElementById('userList');
  userList.innerHTML = ''; // Clear old list

  userRoles.forEach((role, user) => {
    const li = document.createElement('li');
    li.textContent = `${user} : ${role}`;
    userList.appendChild(li);
  });
}

// Function to add a new user
function addUser() {
  const username = document.getElementById('username').value.trim();
  const role = document.getElementById('role').value.trim();

  if (username && role) {
    userRoles.set(username, role);
    displayUsers();
    document.getElementById('username').value = '';
    document.getElementById('role').value = '';
  } else {
    alert('Please enter both a name and a role.');
  }
}

// Display initial users when the page loads
displayUsers();
