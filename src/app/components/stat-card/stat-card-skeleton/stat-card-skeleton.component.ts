import {Component, ViewEncapsulation, ChangeDetectionStrategy} from "@angular/core";
import {InheritClassComponent} from "../../inherit-class.component";

@Component({
  selector: "stat-card-skeleton",
  templateUrl: "./stat-card-skeleton.component.html",
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatCardSkeletonComponent extends InheritClassComponent {
}
