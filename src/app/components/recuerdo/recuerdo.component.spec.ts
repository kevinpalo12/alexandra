import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuerdoComponent } from './recuerdo.component';

describe('RecuerdoComponent', () => {
  let component: RecuerdoComponent;
  let fixture: ComponentFixture<RecuerdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuerdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
