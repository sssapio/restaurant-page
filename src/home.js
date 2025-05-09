const homeBtn = document.querySelector("#homeBtn");
const content1 = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
  const remove = () => {
    content1.innerHTML = "";
  };
  remove();
  const home = document.createElement("div");
  const h1 = document.createElement("h1");
  const descr = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const hours = document.createElement("div");
  const p3 = document.createElement("p");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");
  const li6 = document.createElement("li");
  const li7 = document.createElement("li");
  const location = document.createElement("div");
  const p4 = document.createElement("p");
  const ul1 = document.createElement("ul");
  const li8 = document.createElement("li");

  p1.innerHTML =
    "Beary's has the best porridge! The atmosphere and customer servic make you feel like you are sitting in the middle of the woods,eating like a bear! This is exactly the kind of place that I like toreturn to again and again";
  p2.innerHTML = "Goldilocks";
  h1.innerHTML = "Beary's Breakfast Bar";
  p3.innerHTML = "Hours";
  li1.innerHTML = "Sunday: 8am - 8pm";
  li2.innerHTML = "Monday: 6am - 6pm";
  li3.innerHTML = "Tuesday: 6am - 6pm";
  li4.innerHTML = "Wednesday: 6am - 6pm";
  li5.innerHTML = "Thursday: 6am - 10pm";
  li6.innerHTML = "Friday: 6am - 10pm";
  li7.innerHTML = "Saturday: 8am - 10pm<";
  p4.innerHTML = "Location";
  li8.innerHTML = "123 Forest Drive, Forestville, Maine";

  p2.classList.add("descr-tag");
  descr.classList.add("descr");
  home.classList.add("home");
  hours.classList.add("hours");
  p3.classList.add("hours-tag");
  p4.classList.add("loctn-tag");
  location.classList.add("location");

  location.appendChild(p4);
  location.appendChild(li8);
  location.appendChild(ul1);
  hours.appendChild(p3);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
  ul.appendChild(li6);
  ul.appendChild(li7);
  hours.appendChild(ul);
  descr.appendChild(p1);
  descr.appendChild(p2);
  home.appendChild(h1);
  home.appendChild(descr);
  home.appendChild(hours);
  home.appendChild(location);

  content1.appendChild(home);
});
export { homeBtn, content1 };
