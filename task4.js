export class Player {
  name;
  level;
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }

    info(){
      return `${this.name} has reached Level ${this.level}!`;
    }

    levelUp(){
      this.level += 1;
    }
  }

  const p1 = new Player("Tara", 6);

  console.log(p1.info());
  p1.levelUp();
  console.log(p1.info());