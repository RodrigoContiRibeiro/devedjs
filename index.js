//queryes
const inputForm = document.querySelector(".inputForm");
const buttonForm = document.querySelector(".buttonForm");
const itemList = document.querySelector(".itemList");
const filterOption = document.querySelector(".filterForm");

buttonForm.addEventListener("click", (e) => {
  e.preventDefault(); //evitar o reload do submit

  //criando elementos
  const li = document.createElement("li");
  const delLi = document.createElement("button");
  const okLi = document.createElement("button");

  //adicionando classes
  li.classList.add("li");
  delLi.classList.add("delLi");
  okLi.classList.add("okLi");

  delLi.innerHTML = "<i class='fas fa-trash delLi'></i>"; //Colocando o ícone dentro do delbutton
  okLi.innerHTML = "<i class='fas fa-check okLi'></i>"; //Colocando o ícone dentro do okbutton

  li.innerHTML = "<p> " + inputForm.value + " </p>"; //Valor do li igual ao do input

  itemList.appendChild(li); //Colocando o li na ul
  li.appendChild(okLi); // Colocando o okbutton no li
  li.appendChild(delLi); //Colocando o delbutton no li

  inputForm.value = "";

  //---- button events
  //check
  /*   okLi.addEventListener('click', () => {
    okLi.style.backgroundColor = '#d93e30'
    okLi.style.color = 'white'
  })
  //delete
  delLi.addEventListener('click', () => {
    li.style.display = 'none'
  }) */

  li.addEventListener("click", (e) => {
    if (e.target.classList.contains("delLi")) {
      console.log(e.target);
      console.log(e.target.parentElement);
      let todo = e.target.parentElement;
      if (e.target.classList.contains("fa-trash")) {
        todo.parentElement.classList.toggle("fall");
        todo.addEventListener("transitionend", () => {
          todo.parentElement.remove();
        });
      } else {
        todo.classList.toggle("fall");
        todo.addEventListener("transitionend", () => {
          todo.remove();
        });
      }
    }
    if (e.target.classList.contains("okLi")) {
      okLi.classList.toggle("checked");
      //okLi.style.backgroundColor = "#d93e30";
      //okLi.style.color = "#f2f2f2";
    }
  });
});

let li

filterOption.addEventListener("click", filterTodo);

function filterTodo(e) {
  const todos = itemList.childNodes;
  todos.forEach(function (li) {
    switch (e.target.value) {
      case "all":
        li.style.display = "flex";
        break;
      case "completed":
        if (li.classList.contains("okLi")) {
          li.style.display = "flex";
        } else {
          li.style.display = "none";
        }
    }
  });
}
