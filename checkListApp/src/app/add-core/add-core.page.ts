import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ListCoreLogicService } from "../services/list-core-logic.service";

@Component({
  selector: "app-add-core",
  templateUrl: "./add-core.page.html",
  styleUrls: ["./add-core.page.scss"]
})
export class AddCorePage implements OnInit {
  public addCoreForm: FormGroup;
  constructor(
    private FB: FormBuilder,
    private router: Router,
    private service: ListCoreLogicService
  ) {
    this.addCoreForm = this.FB.group({
      coreTitle: ["", Validators.required]
    });
  }

  ngOnInit() {}

  addCoreFormSubmit(value: any) {
    console.log("Adding core: ", this.addCoreForm.controls["coreTitle"].value);
    this.service.createCore(this.addCoreForm.controls["coreTitle"].value);
    this.router.navigateByUrl("/home");
  }
}
