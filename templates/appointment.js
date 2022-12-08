var taskInput = document.getElementById('newTask');
var addTaskButton = document.getElementById('addTaskButton');
var incompleteTasks = document.getElementById('toDo');


var addTask = function () {
    var text = taskInput.value;
    var li = document.createElement('li');
    li.innerHTML =
        "<span class='dateapp'>" + text + "</span>" +
        "<span class='hourapp'>" + text + "</span>" +
        "<label class='nameapp'>" + text + "</label>" +
        "<button class='edit'>Edit</button>" +
        "<button class='delete'>Delete</button>";
    incompleteTasks.appendChild(li);
    taskInput.value = '';
}

addTaskButton.onclick = addTask;

addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        addTask();
    }
});

incompleteTasks.addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
        var li = e.target.parentElement;
        incompleteTasks.removeChild(li);
    }
});

