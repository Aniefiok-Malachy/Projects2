const users = [
    ["Edidiong Edit", 25, "Senior Marketer", "Akwa Ibom, Nigeria", "Profile.img/Edi.jpg"],
    ["Nseghe Smith", 32, "Senior BD", "London, UK", "Profile.img/Nsehe.jpg"],
    ["Kufre Brown", 28, "Senior BD/ Blogger", "Toronto, Canada", "Profile.img/Ekus.jpg"],
    ["Donatus Wilson", 30, "Senior BD", "Berlin, Germany", "Profile.img/donatus.jpg"],
    ["Malachy Aniefiok", 27, "Frontend Developer", "Akwa Ibom, Nigeria", "Profile.img/Malachy.jpg"]
  ];
  
  const btn = document.getElementById("generate-btn");
  
  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    
    // 🧠 Array Destructuring
    const [name, age, job, location, img] = users[randomIndex];
    
    // Display user info
    document.getElementById("name").textContent = name;
    document.getElementById("age").textContent = `Age: ${age}`;
    document.getElementById("job").textContent = job;
    document.getElementById("location").textContent = location;
    document.getElementById("profile-img").src = img;
  });
  