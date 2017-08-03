import {Component, Input} from "@angular/core";

@Component({
  selector: "stat-bar",
  templateUrl: "./stat-bar.component.html",
  styleUrls: ["./stat-bar.component.scss"]
})
export class StatsBarComponent {
  @Input()
  public value: string;

  @Input()
  public percentage: string;

  @Input()
  public name: string;

  @Input()
  public description: string;

  @Input()
  public color: string;
}
