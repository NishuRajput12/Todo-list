
  
function addItem() {
    var inputField = document.getElementById("todoInput");
    var inputValue = inputField.value.trim();
    
    if (inputValue === "") {
      alert("Please enter a task.");
      return;
    }
    
    var list = document.getElementById("todoList");
    var listItem = document.createElement("li");
    listItem.textContent = inputValue;
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
      listItem.remove();
    };
    
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    
    inputField.value = "";
  }
  