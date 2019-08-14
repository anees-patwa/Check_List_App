import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as CoreStuff from "./core.reducer";
import * as ListStuff from "./list.reducer";

export interface AppState {
  core: CoreStuff.CoreState;
  list: ListStuff.ListState;
}

export const reducers: ActionReducerMap<AppState> = {
  core: CoreStuff.coreReducer,
  list: ListStuff.listReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const getCoreState = (state: AppState) => state.core;
export const getListState = (state: AppState) => state.list;

export const getCores = createSelector(
  getCoreState,
  CoreStuff.getCores
);

export const getCoreById = createSelector(
  getCoreState,
  CoreStuff.getCoreById
);

export const getListByCore = createSelector(
  getListState,
  ListStuff.getListById
);

export const getLists = createSelector(
  getListState,
  ListStuff.getLists
);
