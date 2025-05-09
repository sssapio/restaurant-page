import "./styles.css";
import { homeBtn, content1 } from "./home.js";
import { menuBtn, content2 } from "./menu.js";
import { contactBtn, content3 } from "./contact.js";
const content = document.querySelector("#content");

content.innerHTML = `
<div class="home">
  <h1>Beary's Breakfast Bar</h1>
  <div class="descr">
    <p>
      Beary's has the best porridge! The atmosphere and customer service make
      you feel like you are sitting in the middle of the woods, eating like a
      bear! This is exactly the kind of place that I like to return to again and
      again
    </p>
    <p class="descr-tag">Goldilocks</p>
  </div>
  <div class="hours">
    <p class="hours-tag">Hours</p>
    <ul>
      <li>Sunday: 8am - 8pm</li>
      <li>Monday: 6am - 6pm</li>
      <li>Tuesday: 6am - 6pm</li>
      <li>Wednesday: 6am - 6pm</li>
      <li>Thursday: 6am - 10pm</li>
      <li>Friday: 6am - 10pm</li>
      <li>Saturday: 8am - 10pm</li>
    </ul>
  </div>
  <div class="location">
    <p class="loctn-tag">Location</p>
    <ul>
      <li>123 Forest Drive, Forestville, Maine</li>
    </ul>
  </div>
</div>;
`;
console.log("What is wrong with you");
