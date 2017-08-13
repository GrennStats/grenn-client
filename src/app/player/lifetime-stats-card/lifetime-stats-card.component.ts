import {Component, Input} from "@angular/core";

@Component({
  selector: "lifetime-stats-card",
  templateUrl: "./lifetime-stats-card.component.html",
  styleUrls: ["./lifetime-stats-card.component.scss"]
})
export class LifetimeStatsCardComponent {
  @Input()
  public stats;
}
