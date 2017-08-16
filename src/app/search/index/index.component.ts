import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
