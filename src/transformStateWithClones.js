'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here

  let newState = { ...state };
  const array = [];

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        newState = {};
        break;

      case 'addProperties':
        newState = { ...newState, ...action.extraData };
        break;

      case 'removeProperties':
        newState = { ...newState };

        for (const keys of action.keysToRemove) {
          delete newState[keys];
        }
    }
    array.push({ ...newState });
  }

  return array;
}

module.exports = transformStateWithClones;
