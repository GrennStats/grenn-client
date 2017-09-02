import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'hero-image-skeleton',
  templateUrl: './hero-image-skeleton.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroImageSkeletonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
