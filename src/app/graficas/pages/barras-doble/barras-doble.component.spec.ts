import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasDobleComponent } from 'src/app/graficas/pages/barras-doble/barras-doble.component';

describe('BarrasDobleComponent', () => {
  let component: BarrasDobleComponent;
  let fixture: ComponentFixture<BarrasDobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasDobleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrasDobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
