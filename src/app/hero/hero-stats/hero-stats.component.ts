import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {TotalStats} from "../../player/state/player.resource";

@Component({
  selector: "hero-stats",
  templateUrl: "./hero-stats.component.html",
  styleUrls: ["./hero-stats.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroStatsComponent{
  @Input()
  public stats: TotalStats;
}
