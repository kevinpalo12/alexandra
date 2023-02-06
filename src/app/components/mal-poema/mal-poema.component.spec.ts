import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalPoemaComponent } from './mal-poema.component';

describe('MalPoemaComponent', () => {
  let component: MalPoemaComponent;
  let fixture: ComponentFixture<MalPoemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalPoemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalPoemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
