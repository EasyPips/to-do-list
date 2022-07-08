const text = document.getElementById("text");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const display = document.getElementById("display");
const ul = document.getElementById("un");

const textLenght = () => {
  return text.value.length;
};
const createElement = () => {
  const li = document.createElement("li")
  li.textContent = text.value;
  ul.appendChild(li);
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00d7");
  span.appendChild(txt);
  li.appendChild(span);
  text.value = "";
  span.addEventListener("click", function () {
    li.style.display = "none";
  });
  ul.addEventListener('click', function(){
    const prom = confirm("task completed?");
    if (prom = true) {
      li.style.textDecoration = "line-through";
    }

  })

};

const addFn = () => {
  if (textLenght() > 0) {
    createElement();
  }
};

const key = (event) => {
  if (textLenght() > 0 && event.keyCode === 13) {
    createElement();
  }
};

const removeFn = () => {
  const conf = confirm("did you want to continue clear?");
  if (conf === true) {
    ul.textContent = "";
  }
};

/* event listeners */
add.addEventListener("click", addFn);
text.addEventListener("keypress", key);
remove.addEventListener("click", removeFn);
