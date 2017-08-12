import {Component, Input} from "@angular/core";

@Component({
  selector: "player-entry",
  templateUrl: "./player-entry.component.html",
  styleUrls: ["./player-entry.component.scss"]
})
export class PlayerEntryComponent {
  @Input()
  public player;
}
