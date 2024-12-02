const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function createTaskItem(taskText) {
  const listItem = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  listItem.appendChild(taskSpan);

  const taskActions = document.createElement('div');
  taskActions.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });
  taskActions.appendChild(completeBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });
  taskActions.appendChild(deleteBtn);

  listItem.appendChild(taskActions);

  return listItem;
}

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }
  const newTaskItem = createTaskItem(taskText);
  taskList.appendChild(newTaskItem);
  
  taskInput.value = '';
});
