import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonshortenComponent } from './buttonshorten.component';

describe('ButtonshortenComponent', () => {
  let component: ButtonshortenComponent;
  let fixture: ComponentFixture<ButtonshortenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonshortenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonshortenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
