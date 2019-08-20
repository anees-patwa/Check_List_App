import { Component, OnInit } from "@angular/core";
import { List } from "../interfaces/List";
import { ActivatedRoute } from "@angular/router";
import { ListCoreLogicService } from "../services/list-core-logic.service";
import { ChecklistItem } from "../interfaces/ChecklistItem";
import { AlertController } from "@ionic/angular";
import { Observable } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  public unchecked: Observable<ChecklistItem[]>;
  public checked: Observable<ChecklistItem[]>;
  public list: List;
  constructor(
    public route: ActivatedRoute,
    public service: ListCoreLogicService,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    let listId = Number(this.route.snapshot.paramMap.get("id"));

    this.unchecked = new Observable(observer => {
      this.service.getListByCoreId(listId).subscribe(list => {
        let tempUnChecked = [];

        for (let item of list.items) {
          if (!item.checked) {
            tempUnChecked.push(item);
          }
        }

        observer.next(tempUnChecked);
      });
    });

    this.checked = new Observable(observer => {
      this.service.getListByCoreId(listId).subscribe(list => {
        let tempChecked = [];

        for (let item of list.items) {
          if (item.checked) {
            tempChecked.push(item);
          }
        }

        observer.next(tempChecked);
      });
    });
  }

  checkItem($event) {
    console.log(
      "checked item: ",
      $event.target.name,
      " with id: ",
      $event.target.id
    );

    this.service.checkItem($event.target.id, $event.target.name, this.list);
  }

  addItemToList() {
    this.alertCtrl
      .create({
        header: "New Checklist Item",
        message: "What should the title of this item be?",
        inputs: [
          {
            type: "text",
            name: "title"
          }
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Add",
            handler: data => {
              console.log(
                "title of item to be added: ",
                data,
                " to list with id: ",
                this.list.coreId
              );
              this.service.addItemToList(data.title, this.list);
            }
          }
        ]
      })
      .then(alert => {
        alert.present();
      });
  }

  generateList() {
    let coreId = Number(this.route.snapshot.paramMap.get("id"));
    this.service.createList(coreId);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
