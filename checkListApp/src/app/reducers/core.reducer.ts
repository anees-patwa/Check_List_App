import { Core } from "../interfaces/Core";
import { ActionsUnion, ActionTypes } from "../actions/app.actions";
import { State } from "@ngrx/store";

export interface CoreState {
  data: Core[];
}

export const initialCoreState = {
  data: []
};

export function coreReducer(
  state = initialCoreState,
  action: ActionsUnion
): CoreState {
  switch (action.type) {
    case ActionTypes.CreateCore: {
      return {
        ...state,
        data: [...state.data, action.payload.core]
      };
    }

    case ActionTypes.CreateCoreItem: {
      let toChange: Core = state.data[state.data.indexOf(action.payload.core)];
      toChange.items.push(action.payload.title);
      return {
        ...state,
        data: [...state.data, toChange]
      };
    }

    case ActionTypes.DeleteCore: {
      return {
        ...state,
        ...state.data.splice(state.data.indexOf(action.payload.core), 1)
      };
    }

    case ActionTypes.DeleteCoreItem: {
      let toChange: Core = state.data[state.data.indexOf(action.payload.core)];
      toChange.items.splice(toChange.items.indexOf(action.payload.title), 1);
      let newArray: Core[] = state.data;
      newArray.splice(newArray.indexOf(action.payload.core)).push(toChange);
      return {
        ...state,
        data: newArray
      };
    }

    default: {
      return state;
    }
  }
}

export const getCores = (state: CoreState) => state.data;
export const getCoreById = (state: CoreState, props: { id: number }): Core => {
  return state.data.find(core => core.id === props.id);
};
