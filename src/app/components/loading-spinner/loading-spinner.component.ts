import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../inherit-class.component";

@Component({
  selector: "loading-spinner",
  templateUrl: "./loading-spinner.component.html",
  styleUrls: ["./loading-spinner.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent extends InheritClassComponent {}
