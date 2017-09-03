import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "player-entry-skeleton",
  templateUrl: "./player-entry-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerEntrySkeletonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
