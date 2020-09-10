import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostContentComponent } from './single-post-content.component';

describe('SinglePostContentComponent', () => {
  let component: SinglePostContentComponent;
  let fixture: ComponentFixture<SinglePostContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
