import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "player-list-skeleton",
  templateUrl: "./player-list-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListSkeletonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
