import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "lifetime-stats-card",
  templateUrl: "./lifetime-stats-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifetimeStatsCardComponent {
  @Input()
  public stats;
}
