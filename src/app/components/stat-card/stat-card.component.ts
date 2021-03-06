import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../inherit-class.component";

@Component({
  selector: "stat-card",
  templateUrl: "./stat-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatCardComponent extends InheritClassComponent {
  @Input()
  public value: number;
}
