import {Component, Input, HostBinding} from "@angular/core";
import {InheritClassComponent} from "../inherit-class.component";

@Component({
  selector: "primary-stat",
  templateUrl: "./primary-stat.component.html",
  styleUrls: ["./primary-stat.component.scss"]
})
export class PrimaryStatComponent extends InheritClassComponent {
  @Input()
  public description: string;
}
