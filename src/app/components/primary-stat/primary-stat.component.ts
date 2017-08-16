import {Component, Input, HostBinding, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../inherit-class.component";

@Component({
  selector: "primary-stat",
  templateUrl: "./primary-stat.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryStatComponent extends InheritClassComponent {
  @Input()
  public description: string;
}
