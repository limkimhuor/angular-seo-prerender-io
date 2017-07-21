import "bootstrap/dist/css/bootstrap.css";

import home from "./features/home";
import about from "./features/about";
import routing from "./app.config";

import "./styles/app.scss";

const MODULE_NAME = "prerenderApp";

angular.module(MODULE_NAME, ["ui.router", "home", "about"])
  .config(routing);

export default MODULE_NAME;
