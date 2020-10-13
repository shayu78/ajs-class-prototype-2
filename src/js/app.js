/* eslint-disable no-console */

import Bowerman from './Bowerman';

try {
  const bowerman = new Bowerman('bowerman');
  bowerman.damage(true);
  bowerman.damage(200);
  console.log(bowerman.health);
  bowerman.damage(20);
} catch (error) {
  console.error(error.message);
}

try {
  const bowerman = new Bowerman('bowerman');
  console.log(bowerman);
  bowerman.levelUp();
  console.log(bowerman);
  bowerman.damage(200);
  bowerman.levelUp();
} catch (error) {
  console.error(error.message);
}
