import { storeState, changeState } from '../src/main.js'

// const stateControl = storeState();

describe('Testing Units', () => {
  const warrior = { strength: 5, dexterity: 3, intelligence: 1 };
  const stateControlWarrior = storeState(warrior);
  const stateControl = storeState();
  const plusStrength = changeState("strength")(1);
  const addHp = changeState("hitPoints")(100);

  // const feed = changeState("soil")(1);
  // const hydrate = changeState("water")(1);
  // const blueFood = changeState("soil")(5);
  // const superWater = changeState("water")(5);

  test('should create warrior class template', () => {
    expect(stateControlWarrior()).toEqual({ strength: 5, dexterity: 3, intelligence: 1 })
  })

  test('should add strength to hero class', () => {
    expect(stateControlWarrior(plusStrength)).toEqual({ strength: 6, dexterity: 3, intelligence: 1 })
  })

  test('should add strength to hero class', () => {
    expect(stateControl(plusStrength)).toEqual({ strength: 1 })
  })

  test('should add new property to hero class', () => {
    expect(stateControl(addHp)).toEqual({ strength: 1, hitPoints: 100 })
  })

  test('should add HP to hero class', () => {
    expect(stateControl(addHp)).toEqual({ strength: 1, hitPoints: 200 })
  })

  // test('should add 5 units of soil to the store state', () => {
  //   expect(stateControl(blueFood)).toEqual({ soil: 6, water: 1 })
  // })

  // test('should add 5 units of water to the store state', () => {
  //   expect(stateControl(superWater)).toEqual({ soil: 6, water: 6 })
  // })
});
