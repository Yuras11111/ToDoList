const input = document.getElementById('taskInput');
const btnOne = document.getElementById('addBtn');
const btnTo = document.getElementById('removeBtn');
const list = document.getElementById('taskList');

btnOne.addEventListener('click', function () {
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;
  list.appendChild(li);
  input.value = '';
});

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const task = input.value.trim();
    if (task === '') return;

    const li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
    input.value = '';
  }
});

btnTo.addEventListener('click', function () {
  if (list.lastElementChild) {
    list.lastElementChild.remove();
  }
});
