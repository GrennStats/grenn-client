import {Component, Input} from "@angular/core";

@Component({
  selector: "stat-card",
  templateUrl: "./stat-card.component.html",
  styleUrls: ["./stat-card.component.scss"]
})
export class StatCardComponent {
  @Input()
  public value: number;
}
