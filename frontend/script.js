const API_URL = 'http://localhost:3000/tasks';

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: input.value })
  });
  input.value = '';
  fetchTasks();
}

window.onload = fetchTasks;
