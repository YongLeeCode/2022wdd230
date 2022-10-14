const button = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  let value = input.value;
  input.value = " ";

  if (value != " ") {
    let itemList = document.createElement("li");
    let clearButton = document.createElement("button");
    let contentList = document.createElement("span");

    itemList.append(contentList);
    contentList.textContent = value;
    clearButton.textContent = "❌";
    itemList.append(clearButton);
    list.append(itemList);

    clearButton.onclick = () => {
      itemList.remove();
    };
  }
});