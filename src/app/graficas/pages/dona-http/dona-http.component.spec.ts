import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaHttpComponent } from 'src/app/graficas/pages/dona-http/dona-http.component';

describe('DonaHttpComponent', () => {
  let component: DonaHttpComponent;
  let fixture: ComponentFixture<DonaHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientModule ],
      declarations: [ DonaHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonaHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
