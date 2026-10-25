// Task 1: userProfile object
const userProfile = {
  name: "Aidar",
  birthYear: 2005,
  isDeveloper: true,
  hobbies: ["coding", "football", "music"]
};

// Task 2: arithmetic calculations
const profileInfo = document.getElementById("profileInfo");

function showProfile() {
  const age = new Date().getFullYear() - userProfile.birthYear;
  const months = age * 12;
  const hobbiesCount = userProfile.hobbies.length;

  profileInfo.textContent = `${userProfile.name}: ${age} years (${months} months), hobbies: ${hobbiesCount}`;
  console.log(userProfile.name, age, months, hobbiesCount);
}

// Task 3-4: form and event listener
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();
  userProfile.name = document.getElementById("username").value;
  userProfile.birthYear = Number(document.getElementById("birthYear").value);
  showProfile();
});

// Task 5: add / remove list items
const list = document.getElementById("list");
const itemInput = document.getElementById("itemInput");

function renderList() {
  list.innerHTML = "";
  userProfile.hobbies.forEach((h) => {
    const li = document.createElement("li");
    li.textContent = h;
    list.appendChild(li);
  });
}

document.getElementById("addBtn").addEventListener("click", () => {
  const value = itemInput.value.trim();
  if (!value) return;
  userProfile.hobbies.push(value);
  itemInput.value = "";
  renderList();
  showProfile();
});

document.getElementById("removeBtn").addEventListener("click", () => {
  userProfile.hobbies.pop();
  renderList();
  showProfile();
});

showProfile();
renderList();