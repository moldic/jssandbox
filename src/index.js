import "./styles.css";

const addTask = () => {
  const txt = document.getElementById("add-text");
  addTodo(txt.value);
  txt.value = "";
};

const addTodo = (txt) => {
  const todolist = document.getElementById("todo-list");
  const li = document.createElement("li");
  const div = document.createElement("div");

  div.innerText = txt;
  const f_button = addButton(div, "完了");
  f_button.addEventListener("click", finishButton);
  const d_button = addButton(div, "削除");
  d_button.addEventListener("click", deleteButton);
  li.appendChild(div);

  todolist.appendChild(li);
};

const addDone = (txt) => {
  const donelist = document.getElementById("done-list");
  const li = document.createElement("li");
  const div = document.createElement("div");

  div.innerText = txt;
  const r_button = addButton(div, "戻す");
  r_button.addEventListener("click", returnButton);
  li.appendChild(div);

  donelist.appendChild(li);
};

const addButton = (div, txt) => {
  const btn = document.createElement("button");
  btn.innerText = txt;
  div.appendChild(btn);
  return btn;
};

//イベントリスナに登録した場合、第一引数には固定でイベントが入る。
const deleteButton = (e) => {
  const currentItem = e.target.parentNode.parentNode;
  currentItem.parentNode.removeChild(currentItem);
};

const finishButton = (e) => {
  addDone(e.target.parentNode.childNodes[0].textContent);
  deleteButton(e);
};

const returnButton = (e) => {
  addTodo(e.target.parentNode.childNodes[0].textContent);
  deleteButton(e);
};

document.getElementById("add-task").onclick = addTask;
