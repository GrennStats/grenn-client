import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareImageComponent } from './square-image.component';

describe('SquareImageComponent', () => {
  let component: SquareImageComponent;
  let fixture: ComponentFixture<SquareImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
