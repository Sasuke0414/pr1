fetch("https://fakestoreapi.com/products?limit=20")
  .then((res) => res.json())
  .then((json) => domUI(json));

function domUI(data) {
  console.log(data);

  const dom = document.querySelector("#dom");
  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class='card-image'>
           <img src=${element.image} alt='jpg'/>
        </div>
        <h2 class='card-title'>${element.title}<h2/>
        <h3 class='card-category'>${element.category}<h3/>
        <h2 class='card-price'>$${element.price}<h3/> `;

    dom.appendChild(card);
  });
}
