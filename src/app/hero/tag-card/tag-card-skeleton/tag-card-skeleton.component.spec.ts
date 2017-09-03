import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCardSkeletonComponent } from './tag-card-skeleton.component';

describe('TagCardSkeletonComponent', () => {
  let component: TagCardSkeletonComponent;
  let fixture: ComponentFixture<TagCardSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCardSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
