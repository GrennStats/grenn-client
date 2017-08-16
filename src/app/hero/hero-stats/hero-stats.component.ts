import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {TotalStats} from "../../player/state/player.resource";

@Component({
  selector: "hero-stats",
  templateUrl: "./hero-stats.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroStatsComponent{
  @Input()
  public stats: TotalStats;
}
