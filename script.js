// Get references to DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to create a new task element
function createTaskElement(taskText) {
  // Create the <li> element
  const taskItem = document.createElement('li');
  
  // Create the text node for the task text
  const taskTextNode = document.createTextNode(taskText);
  
  // Append the text node to the <li> element
  taskItem.appendChild(taskTextNode);

  // Create the "Complete" button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.onclick = function() {
    taskItem.classList.toggle('completed');
  };
  taskItem.appendChild(completeBtn);

  // Create the "Delete" button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    taskList.removeChild(taskItem);
  };
  taskItem.appendChild(deleteBtn);

  // Return the newly created task item
  return taskItem;
}

// Event listener to add a new task when the button is clicked
addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();

  // Ensure the input is not empty
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task element
  const newTask = createTaskElement(taskText);
  
  // Append the new task to the task list
  taskList.appendChild(newTask);

  // Clear the input field after adding the task
  taskInput.value = '';
});
