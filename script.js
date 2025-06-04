function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const text = document.createTextNode(" " + taskText);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  input.value = '';
}

function deleteChecked() {
  const taskList = document.getElementById('taskList');
  const items = taskList.querySelectorAll('li');

  items.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      taskList.removeChild(item);
    }
  });
}
