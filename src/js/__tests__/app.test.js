/* eslint-disable no-console */

import Character from '../Character';
import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

describe('Character methods', () => {
  const character = new Character('character', 'Bowman');

  test('Character damage value throw', () => {
    expect(() => {
      character.damage('www');
    }).toThrowError(Error);
  });

  test('Character damage', () => {
    character.damage(2000);
    expect(character.health).toBe(-1900);
  });

  test('Character damage throw', () => {
    expect(() => {
      character.damage(20);
    }).toThrowError(Error);
  });

  test('Character levelUp throw', () => {
    expect(() => {
      character.levelUp();
    }).toThrowError(Error);
  });

  const upLevelCharacter = new Character('character', 'Bowman');

  test('Character levelUp', () => {
    upLevelCharacter.levelUp();
    expect(upLevelCharacter).toEqual(
      {
        name: 'character',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 0,
        defence: 0,
      },
    );
  });
});

describe('Bowerman methods', () => {
  const bowman = new Bowerman('bowmen');

  test('Bowerman damage value throw', () => {
    expect(() => {
      bowman.damage('www');
    }).toThrowError(Error);
  });

  test('Bowerman damage', () => {
    bowman.damage(2000);
    expect(bowman.health).toBe(-1400);
  });

  test('Bowerman damage throw', () => {
    expect(() => {
      bowman.damage(20);
    }).toThrowError(Error);
  });

  test('Bowerman levelUp throw', () => {
    expect(() => {
      bowman.levelUp();
    }).toThrowError(Error);
  });

  const upLevelBowman = new Bowerman('bowmen');

  test('Bowerman levelUp', () => {
    upLevelBowman.levelUp();
    expect(upLevelBowman).toEqual(
      {
        name: 'bowmen',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
      },
    );
  });
});

describe('Daemon methods', () => {
  const daemon = new Daemon('daemon');

  test('Daemon damage value throw', () => {
    expect(() => {
      daemon.damage('www');
    }).toThrowError(Error);
  });

  test('Daemon damage', () => {
    daemon.damage(2000);
    expect(daemon.health).toBe(-1100);
  });

  test('Daemon damage throw', () => {
    expect(() => {
      daemon.damage(20);
    }).toThrowError(Error);
  });

  test('Daemon levelUp throw', () => {
    expect(() => {
      daemon.levelUp();
    }).toThrowError(Error);
  });

  const upLevelDaemon = new Daemon('daemon');

  test('Daemon levelUp', () => {
    upLevelDaemon.levelUp();
    expect(upLevelDaemon).toEqual(
      {
        name: 'daemon',
        type: 'Daemon',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
      },
    );
  });
});

describe('Magician methods', () => {
  const magician = new Magician('magician');

  test('Magician damage value throw', () => {
    expect(() => {
      magician.damage('www');
    }).toThrowError(Error);
  });

  test('Magician damage', () => {
    magician.damage(2000);
    expect(magician.health).toBe(-1100);
  });

  test('Magician damage throw', () => {
    expect(() => {
      magician.damage(20);
    }).toThrowError(Error);
  });

  test('Magician levelUp throw', () => {
    expect(() => {
      magician.levelUp();
    }).toThrowError(Error);
  });

  const upLevelDaemon = new Magician('magician');

  test('Magician levelUp', () => {
    upLevelDaemon.levelUp();
    expect(upLevelDaemon).toEqual(
      {
        name: 'magician',
        type: 'Magician',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
      },
    );
  });
});

describe('Swordsman methods', () => {
  const swordsman = new Swordsman('swordsman');

  test('Swordsman damage value throw', () => {
    expect(() => {
      swordsman.damage('www');
    }).toThrowError(Error);
  });

  test('Swordsman damage', () => {
    swordsman.damage(2000);
    expect(swordsman.health).toBe(-1700);
  });

  test('Swordsman damage throw', () => {
    expect(() => {
      swordsman.damage(20);
    }).toThrowError(Error);
  });

  test('Swordsman levelUp throw', () => {
    expect(() => {
      swordsman.levelUp();
    }).toThrowError(Error);
  });

  const upLevelDaemon = new Swordsman('swordsman');

  test('Swordsman levelUp', () => {
    upLevelDaemon.levelUp();
    expect(upLevelDaemon).toEqual(
      {
        name: 'swordsman',
        type: 'Swordsman',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
      },
    );
  });
});

describe('Undead methods', () => {
  const undead = new Undead('undead');

  test('Undead damage value throw', () => {
    expect(() => {
      undead.damage('www');
    }).toThrowError(Error);
  });

  test('Undead damage', () => {
    undead.damage(2000);
    expect(undead.health).toBe(-1400);
  });

  test('Undead damage throw', () => {
    expect(() => {
      undead.damage(20);
    }).toThrowError(Error);
  });

  test('Undead levelUp throw', () => {
    expect(() => {
      undead.levelUp();
    }).toThrowError(Error);
  });

  const upLevelDaemon = new Undead('undead');

  test('Undead levelUp', () => {
    upLevelDaemon.levelUp();
    expect(upLevelDaemon).toEqual(
      {
        name: 'undead',
        type: 'Undead',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
      },
    );
  });
});

describe('Zombie methods', () => {
  const zombie = new Zombie('zombie');

  test('Zombie damage value throw', () => {
    expect(() => {
      zombie.damage('www');
    }).toThrowError(Error);
  });

  test('Zombie damage', () => {
    zombie.damage(2000);
    expect(zombie.health).toBe(-1700);
  });

  test('Zombie damage throw', () => {
    expect(() => {
      zombie.damage(20);
    }).toThrowError(Error);
  });

  test('Zombie levelUp throw', () => {
    expect(() => {
      zombie.levelUp();
    }).toThrowError(Error);
  });

  const upLevelDaemon = new Zombie('zombie');

  test('Zombie levelUp', () => {
    upLevelDaemon.levelUp();
    expect(upLevelDaemon).toEqual(
      {
        name: 'zombie',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
      },
    );
  });
});
