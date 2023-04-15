import "./styles.css";
import { toggleService } from "./toggle/utils";

const app = document?.getElementById("app");

if (app) {
  app.innerHTML = `
<h1>XState TypeScript Example</h1>
<div>
  Open the <strong>Console</strong> to view the machine output.
</div>
<div>
  <button id="toggle" onclick="toggle()">toggle</button>
  <div id="toggle-state"></div>
</div>
`;
}

toggleService.start();

function toggle() {
  toggleService.send("TOGGLE");
}

window.toggle = toggle;