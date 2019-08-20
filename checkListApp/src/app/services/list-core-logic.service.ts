import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Core } from "../interfaces/Core";
import { List } from "../interfaces/List";
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";
import * as Selectors from "../reducers/index";
import * as Actions from "../actions/app.actions";

@Injectable({
  providedIn: "root"
})
export class ListCoreLogicService {
  public cores: Observable<Core[]>;
  public coreCount = 0;
  public static itemCount = 0;

  constructor(private store: Store<AppState>) {
    this.cores = this.store.select(Selectors.getCores);
    this.cores.subscribe(coresArray => {
      this.coreCount = coresArray.length;
    });
  }

  getListByCoreId(id: number): Observable<List> {
    return this.store.select(Selectors.getListByCore, {
      id: id
    });
  }

  getCoreById(id: number): Observable<Core> {
    return this.store.select(Selectors.getCoreById, {
      id: id
    });
  }

  createCore(name: string): void {
    let coreToAdd = {
      id: this.coreCount,
      title: name,
      items: []
    };
    console.log("Creating core: ", coreToAdd);

    this.store.dispatch(new Actions.CreateCore({ core: coreToAdd }));
  }

  getAllCores(): Observable<Core[]> {
    console.log("All Cores: ", this.store.select(Selectors.getCores));
    return this.store.select(Selectors.getCores);
  }

  addItemToList(title: string, list: List) {
    let itemToAdd = {
      id: ListCoreLogicService.itemCount,
      title: title,
      checked: false
    };

    ListCoreLogicService.itemCount++;
    this.store.dispatch(
      new Actions.CreateItem({ list: list, item: itemToAdd })
    );
  }

  createList(coreId: number) {
    let listToAdd = {
      coreId: coreId,
      items: []
    };

    this.store.dispatch(new Actions.CreateList({ list: listToAdd }));
  }

  checkItem(id: number, title: string, list: List) {
    let itemToCheck = {
      id: id,
      title: title,
      checked: false
    };

    this.store.dispatch(
      new Actions.CheckItem({ list: list, item: itemToCheck })
    );
  }
}
