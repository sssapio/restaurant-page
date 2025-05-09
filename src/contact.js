const contactBtn = document.querySelector("#contactBtn");
const content3 = document.querySelector("#content");

contactBtn.addEventListener("click", () => {
  const remove = () => {
    content3.innerHTML = "";
  };
  remove();
  const contact = document.createElement("div");
  const h1 = document.createElement("h1");
  const mama = document.createElement("div");
  const mamaHead = document.createElement("p");
  const ul1 = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  h1.innerHTML = "Contact Us";
  li1.innerHTML = "Chef";
  li2.innerHTML = "555-555-5554";
  li3.innerHTML = "totallyRealEmail@notFake.com";
  mamaHead.innerHTML = "Mama Bear";

  contact.classList.add("home");
  mama.classList.add("hours");
  mamaHead.classList.add("hours-tag");

  ul1.appendChild(li1);
  ul1.appendChild(li2);
  ul1.appendChild(li3);
  mama.appendChild(mamaHead);
  mama.appendChild(ul1);
  contact.appendChild(h1);
  contact.appendChild(mama);
  content3.appendChild(contact);
});

export { contactBtn, content3 };
