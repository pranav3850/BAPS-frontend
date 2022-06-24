import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaribhaktComponent } from './haribhakt.component';

describe('HaribhaktComponent', () => {
  let component: HaribhaktComponent;
  let fixture: ComponentFixture<HaribhaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaribhaktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaribhaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
