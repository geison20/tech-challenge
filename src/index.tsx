import React from "react";
import ReactDOM from "react-dom/client";
import { UserFactory } from "./main/factories/pages/user";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<UserFactory />)
