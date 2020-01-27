function TaskList() {
  this.tasks = [],
  this.currentId = 0
}

TaskList.prototype.addTask = function(task) {
  task.id = this.AssignId()
  this.tasks.push(task);
}

TaskList.prototype.AssignId = function () {
  this.currentId += 1;
  return this. currentId;
}

TaskList.prototype.findTask = function(id) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

function TaskDetails(name, goal, time) {
  this.name = name,
  this.goal = goal,
  this.time = time
}



var taskList = new TaskList();

$(document).ready(function () {
  $("#to-do").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputGoal = $("input#goal").val();
    var inputTime = $("input#time").val();
    var newTask =  new TaskDetails(inputName, inputGoal, inputTime)
    taskList.addTask(newTask);
  console.log(taskList.tasks);
  
  });
});