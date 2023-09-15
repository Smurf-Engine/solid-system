import { Level } from "./level";
import { Settings } from "./settings";

class Game {
  previousTime = Date.now();
  level = new Level();

  constructor() {
    this.run();
  }

  run = () => {
      let newTime = Date.now();
      Settings.add('dt',(newTime - this.previousTime) / 1000);
      this.previousTime = newTime;

      this.level.run();

      requestAnimationFrame(this.run);
  }
}

onload = () => {
  new Game()
};