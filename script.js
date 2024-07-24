const inputBox = document.getElementById("task");
const listContainer = document.getElementById("list-container");

function addtask() {
  if (inputBox.value === '')
    alert("Enter your work to add Buddy....");
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value + '<span>&#x2717;</span>';
    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); // Consistent casing
}

function display() {
  listContainer.innerHTML = localStorage.getItem("data"); // Consistent casing
}

display();
