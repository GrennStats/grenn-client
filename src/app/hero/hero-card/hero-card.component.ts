import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "hero-card",
  templateUrl: "./hero-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardComponent {
  @Input()
  public stats: any;
}
