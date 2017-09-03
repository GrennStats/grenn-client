import {Component, Input, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "stat-bar-skeleton",
  templateUrl: "./stat-bar-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatBarSkeletonComponent {
  @Input()
  public name: string;

  @Input()
  public description: string;
}
