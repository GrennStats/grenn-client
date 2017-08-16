import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "lifetime-stats-card",
  templateUrl: "./lifetime-stats-card.component.html",
  styleUrls: ["./lifetime-stats-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifetimeStatsCardComponent {
  @Input()
  public stats;
}
