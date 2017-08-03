import {Component, Input} from "@angular/core";

@Component({
  selector: "square-image",
  templateUrl: "./square-image.component.html",
  styleUrls: ["./square-image.component.scss"],
  styles: [`
    :host {
      display: block;
      overflow: hidden;
    }
  `]
})
export class SquareImageComponent {
  @Input()
  public image: string;
}
