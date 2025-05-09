const menuBtn = document.querySelector("#menuBtn");
const content2 = document.querySelector("#content");

menuBtn.addEventListener("click", () => {
  const remove = () => {
    content2.innerHTML = "";
  };
  remove();
  const menu = document.createElement("div");
  const h1 = document.createElement("h1");
  const beverage = document.createElement("h2");
  const honeyDiv = document.createElement("div");
  const bearyDiv = document.createElement("div");
  const honeyHead = document.createElement("p");
  const honeyp = document.createElement("p");
  const honeyPrice = document.createElement("p");
  const bearyHead = document.createElement("p");
  const bearyp = document.createElement("p");
  const bearyPrice = document.createElement("p");

  h1.innerHTML = "Menu";
  beverage.innerHTML = "Beverages";
  honeyHead.innerHTML = "Honey Tea";
  honeyp.innerHTML =
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
  honeyPrice.innerHTML = "$2";
  bearyHead.innerHTML = "Beary Tea";
  bearyp.innerHTML =
    "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request";
  bearyPrice.innerHTML = "$3";

  menu.classList.add("menu");
  honeyHead.classList.add("hours-tag");
  bearyHead.classList.add("hours-tag");
  honeyPrice.classList.add("hours-tag");
  bearyPrice.classList.add("hours-tag");
  honeyDiv.classList.add("hours");
  bearyDiv.classList.add("hours");

  honeyDiv.appendChild(honeyHead);
  honeyDiv.appendChild(honeyp);
  honeyDiv.appendChild(honeyPrice);
  bearyDiv.appendChild(bearyHead);
  bearyDiv.appendChild(bearyp);
  bearyDiv.appendChild(bearyPrice);
  menu.appendChild(h1);
  menu.appendChild(beverage);
  menu.appendChild(honeyDiv);
  menu.appendChild(bearyDiv);
  content2.appendChild(menu);
});
export { menuBtn, content2 };
