/*eslint-disable*/
import $ from 'jquery';
/*eslint-disable*/
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

// const stateControl = storeState();
const warrior = {strength: 5, dexterity: 3, intelligence: 1}
const wizard = {strength: 2, dexterity: 1, intelligence: 6};
const thief = {strength: 3, dexterity: 5, intelligence: 1};

export const changeState = (prop) => {
  return (value) => {
    return (state) =>  ({
      ...state,
      [prop] : (state[prop] || 0) + value
    }) 
  }
}

const plusStrength = changeState("strength")(1);

$(document).ready(function() {
$("#buttonForWarrior").click(function()  {
  event.preventDefault();
  const stateControl = storeState(warrior);
  console.log(stateControl());
  $(".heroSelect").hide();
  $(".hero").show();
  $(".stats").text(`Strength: ${newState.strength} Dexterity: ${newState.dexterity} Intelligence: ${newState.intelligence}`);
})
$("#buttonForWizard").click(function()  {
  event.preventDefault();
  const stateControl = storeState(wizard);
  console.log(stateControl());
  $(".heroSelect").hide();
  $(".hero").show();
})
$("#buttonForThief").click(function()  {
  event.preventDefault();
  const stateControl = storeState(thief);
  console.log(stateControl());
  $(".heroSelect").hide();
  $(".hero").show();
})

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  // $('#plusStrength').click(function() {
  //   const newState = stateControl(plusStrength);
  //   $('#soil-value').text(`Soil: ${(newState.soil === undefined) ? 0 : newState.soil} Water: ${(newState.water === undefined) ? 0 : newState.water}`);
  // });

});
