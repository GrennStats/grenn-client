import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "square-image",
  templateUrl: "./square-image.component.html",
  styleUrls: ["./square-image.component.scss"],
  styles: [`
    :host {
      display: block;
      overflow: hidden;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareImageComponent {
  @Input()
  public image: string;
}
