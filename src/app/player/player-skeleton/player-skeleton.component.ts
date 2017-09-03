import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "player-skeleton",
  templateUrl: "./player-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
