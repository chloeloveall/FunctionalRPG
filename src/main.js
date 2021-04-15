import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

let stateControl = storeState();
const warrior = { strength: 5, dexterity: 3, intelligence: 1, hitPoints: 100, experiencePoints: 0, level: 1 };
const wizard = { strength: 2, dexterity: 1, intelligence: 6, hitPoints: 100, experiencePoints: 0, level: 1 };
const thief = { strength: 3, dexterity: 5, intelligence: 1, hitPoints: 100, experiencePoints: 0, level: 1 };

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// const plusStrength = changeState("strength")(1);
// const plusIntelligence = changeState("intelligence")(1);
// const plusDexterity = changeState("dexterity")(1);
const addXP = changeState("experiencePoints")(50);
const addHP = changeState("hitPoints")(15);
const lowerHP = changeState("hitPoints")(-15);
const learnFireball = changeState("fireballLevel")(1);
// const levelUp = changeState("level")(1);

$(document).ready(function () {
  $("#buttonForWarrior").click(function () {
    stateControl = storeState(warrior);
    console.log(stateControl());
    $(".heroSelect").hide();
    $(".hero").show();
    $(".heroLevel").append(`Level: ${stateControl().level}`);
    $(".stats").append(` Strength: ${stateControl().strength} Dexterity: ${stateControl().dexterity} Intelligence: ${stateControl().intelligence} Hit Points: ${stateControl().hitPoints} Experience Points: ${stateControl().experiencePoints}`);
    return stateControl;
  });
  $("#buttonForWizard").click(function () {
    stateControl = storeState(wizard);
    console.log(stateControl());
    $(".heroSelect").hide();
    $(".hero").show();
    $(".heroLevel").append(`Level: ${stateControl().level}`);
    $(".stats").append(`Strength: ${stateControl().strength} Dexterity: ${stateControl().dexterity} Intelligence: ${stateControl().intelligence} Hit Points: ${stateControl().hitPoints} Experience Points: ${stateControl().experiencePoints}`);
  });
  $("#buttonForThief").click(function () {
    stateControl = storeState(thief);
    console.log(stateControl());
    $(".heroSelect").hide();
    $(".hero").show();
    $(".heroLevel").append(`Level: ${stateControl().level}`);
    $(".stats").append(`Strength: ${stateControl().strength} Dexterity: ${stateControl().dexterity} Intelligence: ${stateControl().intelligence} Hit Points: ${stateControl().hitPoints} Experience Points: ${stateControl().experiencePoints}`);
  });
  $("#AddXP").click(function () {
    stateControl(addXP);
    $(".stats").text(`Strength: ${stateControl().strength} Dexterity: ${stateControl().dexterity} Intelligence: ${stateControl().intelligence} Hit Points: ${stateControl().hitPoints} Experience Points: ${stateControl().experiencePoints}`);
    console.log(stateControl());
    console.log(stateControl().experiencePoints)
  });
  $("#AddHP").click(function () {
    stateControl(addHP);
    $(".stats").text(`Strength: ${stateControl().strength} Dexterity: ${stateControl().dexterity} Intelligence: ${stateControl().intelligence} Hit Points: ${stateControl().hitPoints} Experience Points: ${stateControl().experiencePoints}`);
    console.log(stateControl());
  });
  $("#LowerHP").click(function () {
    stateControl(lowerHP);
    $(".stats").text(`Strength: ${stateControl().strength} Dexterity: ${stateControl().dexterity} Intelligence: ${stateControl().intelligence} Hit Points: ${stateControl().hitPoints} Experience Points: ${stateControl().experiencePoints}`);
    console.log(stateControl());
  });
  $("#LearnFireball").click(function () {
    stateControl(learnFireball);
    $(".fireballLevel").text(`Fireball Level: ${stateControl().fireballLevel}`)
    console.log(stateControl());
  });
});
