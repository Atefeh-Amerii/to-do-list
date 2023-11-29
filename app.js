const inputSearch = document.querySelector(".input-search");
const linksContainer = document.querySelector(".links-container");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", () => {
  const inputValue = inputSearch.value;
  if (inputValue === "") {
    alert("چیزی ننوشتی که!");
  } else {
    let liList = document.createElement("li");
    {
      /*age khasti class bedi be li ya span mitooni az `` bare nevestan estefade koni*/
    }
    liList.innerHTML = `<p class='listyle'>${inputValue}</p><span>\u00d7</span>`;
    
    linksContainer.appendChild(liList);
   
  }
  saveData();
  inputSearch.value = "";
});

linksContainer.addEventListener("click", function (e) {
    {
        /*age ba class bood e.tareget.classlist.contain("")*/
      }

  if (e.target.tagName === "P") {
    e.target.classList.toggle("done");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", linksContainer.innerHTML);
};
const getData = () => {
  linksContainer.innerHTML = localStorage.getItem("data");
};
getData();
