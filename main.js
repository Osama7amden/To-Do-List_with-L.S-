// creating vars
let form = document.querySelector("form");
let input = document.getElementById("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let arr = JSON.parse(localStorage.getItem("task"))
  ? JSON.parse(localStorage.getItem("task"))
  : [];
let itemsStored = JSON.parse(localStorage.getItem("task"))
  ? JSON.parse(localStorage.getItem("task"))
  : [];

// creating fun that can add li to ul
function addToLi(text) {
  if (text) {
    let task = document.createElement("li");
    let span = document.createElement("span");
    task.textContent = text;
    ul.appendChild(task);
    span.textContent = "X";
    task.appendChild(span);

    // removing li from local and page
    span.addEventListener("click", function () {
      task.remove();
    });

    // mark the item which done
    task.addEventListener("click", function () {
      task.classList.toggle("marked");
    });
  }
}

// looping in arr and print all items on page
itemsStored.map((e) => addToLi(e));

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // adding li to ul
  addToLi(input.value);

  // pushing items to arr
  arr.push(input.value);

  // saving items to local storage
  localStorage.setItem("task", JSON.stringify(arr));

  // clearing input value
  input.value = "";
});

// removing items from local and page
button.addEventListener("click", function () {
  localStorage.clear();
  ul.innerHTML = "";
});
