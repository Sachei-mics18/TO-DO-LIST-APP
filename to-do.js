const TaskInput = document.getElementById("TaskInput");
const AddTaskBtn = document.getElementById("AddTaskBtn");
const DateInput = document.getElementById("DateInput");
const TaskList = document.getElementById("TaskList");

AddTaskBtn.addEventListener("click", AddTask);

function AddTask() {
    const TaskText = TaskInput.value.trim();
    const TaskDate = DateInput.value;

    if (TaskText === "" || TaskDate === "") return;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${TaskDate}</td>
        <td>${TaskText}</td>
        <td>
            <a class="Edit" onclick="EditTask(this)">Edit</a>
            <a class="Delete" onclick="DeleteTask(this)">Delete</a>
        </td>
    `;
    TaskList.appendChild(row);
    TaskInput.value = "";
    DateInput.value = "";
}

function EditTask(btn) {
     const row = btn.parentElement.parentElement;
     const TaskDate = row.children[0].textContent;
     const TaskText = row.children[1].textContent;

     row.children[0].innerHTML = '<input type="Date" value="${TaskDate}">';
     row.children[1].innerHTML = '<input type="Text" value="${TaskText}">';

     const actionCell = row.children[2];
     actionCell.innerHTML = `
        <a class="Save" onclick="SaveTask(this)">Save</a>
    `;
}

function SaveTask(btn) {
     const row = btn.parentElement.parentElement;
     const newDate = row.children[0].querySelector('input').value;
     const newText = row.children[1].querySelector('input').value;

     if (newText === "" || newDate === "") return;

     row.children[0].textContent = newDate;
     row.children[1].textContent = newText;

     const actionCell = row.children[2];
     actionCell.innerHTML = `
        <a class="Edit" onclick="EditTask(this)">Edit</a>
        <a class="Delete" onclick="DeleteTask(this)">Delete</a>
    `;
}

function DeleteTask(btn) {
     const row = btn.parentElement.parentElement;
     TaskList.removeChild(row);
}