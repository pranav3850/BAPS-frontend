import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionInformationComponent } from './profession-information.component';

describe('ProfessionInformationComponent', () => {
  let component: ProfessionInformationComponent;
  let fixture: ComponentFixture<ProfessionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
