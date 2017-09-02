import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "tag-card-skeleton",
  templateUrl: "./tag-card-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagCardSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
