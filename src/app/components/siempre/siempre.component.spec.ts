import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiempreComponent } from './siempre.component';

describe('SiempreComponent', () => {
  let component: SiempreComponent;
  let fixture: ComponentFixture<SiempreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiempreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiempreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
