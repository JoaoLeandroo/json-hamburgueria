const api_key = "/stackBurguer.json";
const div = document.querySelector(".div");

fetch(api_key)
  .then((resp) => resp.json())
  .then((json) => {
    const items = json.categories[0].burguers;
    items.map((todo) => {
      const img = document.createElement("img");
      console.log(todo.urlImg);
      img.src = todo.urlImg;
      div.appendChild(img);
    });
  });
