import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionBoxSkeletonComponent } from './suggestion-box-skeleton.component';

describe('SuggestionBoxSkeletonComponent', () => {
  let component: SuggestionBoxSkeletonComponent;
  let fixture: ComponentFixture<SuggestionBoxSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionBoxSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionBoxSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
