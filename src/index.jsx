import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Records } from "./Records.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Records />
  </StrictMode>
);
