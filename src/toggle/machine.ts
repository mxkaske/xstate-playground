import { assign, createMachine } from "xstate";
import { ToggleContext, ToggleEvent } from "./types";

const incrCount = assign<ToggleContext, ToggleEvent>({
  count: (context, event) => context.count + 1,
});

const initialContext: ToggleContext = { count: 0 };

export const toggleMachine = createMachine<ToggleContext, ToggleEvent>(
  {
    id: "machine",
    initial: "inactive",
    context: initialContext,
    states: {
      inactive: {
        on: {
          TOGGLE: {
            target: "active",
            actions: "incrCount",
          },
        },
      },
      active: {
        on: {
          TOGGLE: {
            target: "inactive",
            actions: "incrCount",
          },
        },
      },
    },
  },
  {
    actions: {
      alert: (context, event) => {
        console.log(JSON.stringify({ type: event.type, count: context.count }));
      },
      incrCount,
    },
  }
);

export type ToggleStateMachine = typeof toggleMachine;
