import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerHeaderRightComponent } from './inner-header-right.component';

describe('InnerHeaderRightComponent', () => {
  let component: InnerHeaderRightComponent;
  let fixture: ComponentFixture<InnerHeaderRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerHeaderRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerHeaderRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
