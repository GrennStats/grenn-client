import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-suggestion-box-skeleton',
  templateUrl: './suggestion-box-skeleton.component.html',
  styleUrls: ['./suggestion-box-skeleton.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuggestionBoxSkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
