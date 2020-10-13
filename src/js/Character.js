import charactersTypes from './data';

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) throw new Error('Некорректное имя');
    if (!charactersTypes.includes(type)) throw new Error('Некорректный тип');
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else throw new Error('Нельзя повысить уровень умершего');
  }

  damage(points) {
    if (this.health > 0) {
      if (Number.isInteger(points) && points > 0) this.health -= points * (1 - this.defence / 100);
      else throw new Error('Некорректное значение урона');
    } else throw new Error('Нельзя нанести урон умершему');
  }
}
