import { Component, OnInit } from "@angular/core";
import {InheritClassComponent} from "../inherit-class.component";

@Component({
  selector: "loading-spinner",
  templateUrl: "./loading-spinner.component.html",
  styleUrls: ["./loading-spinner.component.scss"]
})
export class LoadingSpinnerComponent extends InheritClassComponent {}
