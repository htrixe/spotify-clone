import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadUserComponent } from './head-user.component';

describe('HeadUserComponent', () => {
  let component: HeadUserComponent;
  let fixture: ComponentFixture<HeadUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
