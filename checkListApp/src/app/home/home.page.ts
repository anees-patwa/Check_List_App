import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ListCoreLogicService } from "../services/list-core-logic.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private router: Router, private service: ListCoreLogicService) {}

  goToAddCore() {
    this.router.navigateByUrl("/addCore");
  }

  ngOnInit() {}
}
