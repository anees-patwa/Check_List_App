import { Action } from "@ngrx/store";
import { ChecklistItem } from "../interfaces/ChecklistItem";
import { Core } from "../interfaces/Core";
import { List } from "../interfaces/List";

export enum ActionTypes {
  CreateCore = "Create Core",
  CreateCoreItem = "Create Core Checklist Item",
  DeleteCoreItem = "Delete Core Checklist Item",
  DeleteCore = "Delete Core",
  CreateItem = "Create Checklist Item",
  DeleteItem = "Delete Checklist Item",
  CheckItem = "Check a Checklist Item",
  CreateList = "Create a Checklist"
}

export class CreateCore implements Action {
  readonly type = ActionTypes.CreateCore;

  constructor(public payload: { core: Core }) {}
}

export class CreateCoreItem implements Action {
  readonly type = ActionTypes.CreateCoreItem;

  constructor(public payload: { core: Core; title: string }) {}
}

export class DeleteCoreItem implements Action {
  readonly type = ActionTypes.DeleteCoreItem;

  constructor(public payload: { core: Core; title: string }) {}
}

export class DeleteCore implements Action {
  readonly type = ActionTypes.DeleteCore;

  constructor(public payload: { core: Core }) {}
}

export class CreateItem implements Action {
  readonly type = ActionTypes.CreateItem;

  constructor(public payload: { list: List; item: ChecklistItem }) {}
}

export class DeleteItem implements Action {
  readonly type = ActionTypes.DeleteItem;

  constructor(public payload: { list: List; item: ChecklistItem }) {}
}

export class CheckItem implements Action {
  readonly type = ActionTypes.CheckItem;

  constructor(public payload: { list: List; item: ChecklistItem }) {}
}

export class CreateList implements Action {
  readonly type = ActionTypes.CreateList;

  constructor(public payload: { list: List }) {}
}

export type ActionsUnion =
  | CreateCore
  | CreateCoreItem
  | DeleteCoreItem
  | DeleteCore
  | CreateItem
  | DeleteItem
  | CheckItem
  | CreateList;
