import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailNavigationComponent } from './user-detail-navigation.component';

describe('UserDetailNavigationComponent', () => {
  let component: UserDetailNavigationComponent;
  let fixture: ComponentFixture<UserDetailNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
