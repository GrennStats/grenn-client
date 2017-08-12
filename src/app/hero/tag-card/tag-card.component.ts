import {Component, Input} from "@angular/core";
import {TagStat} from "../tag-stat.factory";

@Component({
  selector: "tag-card",
  templateUrl: "./tag-card.component.html",
  styleUrls: ["./tag-card.component.scss"]
})
export class TagCardComponent {
  @Input()
  public stats: TagStat[];
}
