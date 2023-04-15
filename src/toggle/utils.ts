import { StateValue, interpret } from "xstate";
import { toggleMachine } from "./machine";
import { ToggleEvent } from "./types";

// DISCUSS: think in Classes

export const toggleService = interpret(toggleMachine);

toggleService.onTransition((state) => {
  updateDiv(`${state.value.toString()}, count: ${state.context.count}`);
});

// REMINDER: `updateDiv` could be called here as well
toggleService.subscribe((state) => {
  if (state.matches("active")) {
    console.log("it's active!");
  } else if (state.matches("inactive")) {
    console.log("it's inactive!");
  }
});

export function getInitialState() {
  return toggleMachine.initialState;
}

export function getNextEvents() {
  const initialState = getInitialState();
  return initialState.nextEvents;
}

export function transitionTo(
  currentState: StateValue,
  type: ToggleEvent["type"]
) {
  return toggleMachine.transition(currentState, { type });
}

// const initialState = getInitialState();
// console.log({ initialState });
// const nextState = transitionTo(initialState.value, "TOGGLE");
// console.log({ nextState });

function updateDiv(value: string) {
  const block = document.getElementById("toggle-state");
  if (block) {
    block.innerHTML = value;
  }
}
