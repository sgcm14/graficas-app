import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaComponent } from 'src/app/graficas/pages/dona/dona.component';

describe('DonaComponent', () => {
  let component: DonaComponent;
  let fixture: ComponentFixture<DonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
