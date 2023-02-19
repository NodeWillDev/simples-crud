import express from 'express';
import router from '@routes/routes';

class App {
  public express: express.Express;

  constructor() {
    this.init();
  }

  init() {
    this.express = express();
    this.express.use(express.json());
    this.express.use(router);
  }
}

export default new App().express;
