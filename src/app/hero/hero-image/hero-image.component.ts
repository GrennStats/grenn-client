import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input} from "@angular/core";
import {HeroKey} from "@grenn/contract";

@Component({
  selector: "hero-image",
  templateUrl: "./hero-image.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class HeroImageComponent {
  @Input()
  public hero: HeroKey;
}
