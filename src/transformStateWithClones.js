'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here

  let currentState = { ...state };
  const result = [];

  for (const action of actions) {
    const { type } = action;

    if (type === 'clear') {
      currentState = {};
    }

    if (type === 'addProperties') {
      currentState = { ...currentState, ...action.extraData };
    }

    if (type === 'removeProperties') {
      const newState = { ...currentState };

      for (const key of action.keysToRemove || []) {
        delete newState[key];
      }
      currentState = newState;
    }
    result.push({ ...currentState });
  }

  return result;
}

module.exports = transformStateWithClones;
