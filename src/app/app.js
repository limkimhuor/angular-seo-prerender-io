import 'bootstrap/dist/css/bootstrap.css';

// import angular from 'angular';
// import uirouter from 'angular-ui-router';


import home from './features/home';
import about from './features/about';
import routing from './app.config';
// import mainCtrl from "./controllers/main"

import './styles/app.scss';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};



class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'prerenderApp';

angular.module(MODULE_NAME, ["ui.router", "home", "about"])
  .config(routing);
  // .controller("mainCtrl", mainCtrl);

export default MODULE_NAME;
