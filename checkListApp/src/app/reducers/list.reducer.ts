import { ChecklistItem } from "../interfaces/ChecklistItem";
import { List } from "../interfaces/List";
import { ActionsUnion, ActionTypes } from "../actions/app.actions";
import * as cloneDeep from "lodash/cloneDeep";

export interface ListState {
  data: List[];
}

export const initialListState = {
  data: []
};

export function listReducer(
  state = initialListState,
  action: ActionsUnion
): ListState {
  switch (action.type) {
    case ActionTypes.CreateItem: {
      let index = state.data.indexOf(action.payload.list);
      let listToChange = cloneDeep(state.data[index]);
      console.log("This is the list I'm changing: ", listToChange);
      listToChange.items.push(action.payload.item);
      console.log("New List after adding Item: ", listToChange);
      return {
        ...state,
        data: [
          ...state.data.slice(0, index),
          listToChange,
          ...state.data.slice(index + 1)
        ]
      };
    }

    case ActionTypes.CheckItem: {
      let index = state.data.indexOf(action.payload.list);
      let listToChange = cloneDeep(state.data[index]);
      listToChange.items[
        listToChange.items.indexOf(action.payload.item)
      ].checked = true;
      return {
        ...state,
        data: [
          ...state.data.slice(0, index),
          listToChange,
          ...state.data.slice(index + 1)
        ]
      };
    }

    case ActionTypes.CreateList: {
      return {
        ...state,
        data: [...state.data, action.payload.list]
      };
    }

    default: {
      return state;
    }
  }
}

export const getLists = (state: ListState) => state.data;
export const getListById = (state: ListState, props: { id: number }): List => {
  let list = state.data.find(list => list.coreId === props.id);
  return list;
};
