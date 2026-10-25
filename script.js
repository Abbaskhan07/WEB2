// Task 1
const userProfile = {
  name: "Аббасхан",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["coding", "football", "music"]
};

const profileInfo = document.getElementById("profileInfo");
const list = document.getElementById("list");

// Task 2
function showProfile() {
  const age = new Date().getFullYear() - userProfile.birthYear;
  const months = age * 12;
  const hobbiesCount = list.getElementsByTagName("li").length;

  profileInfo.textContent = `${userProfile.name}: ${age} years (${months} months), hobbies: ${hobbiesCount}`;
  console.log(userProfile.name, age, months, hobbiesCount);
}

// Task 3-4
document.getElementById("saveBtn").addEventListener("click", () => {
  userProfile.name = document.getElementById("username").value;
  userProfile.birthYear = Number(document.getElementById("birthYear").value);
  profileInfo.style.color = "green";
  showProfile();
});

// Task 5
document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("itemInput");
  if (input.value === "") return;
  list.innerHTML += `<li>${input.value}</li>`;
  input.value = "";
  showProfile();
});

document.getElementById("removeBtn").addEventListener("click", () => {
  if (list.lastElementChild) {
    list.lastElementChild.remove();
  }
  showProfile();
});

showProfile();