import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTortaZonaComponent } from './grafica-torta-zona.component';

describe('GraficaTortaZonaComponent', () => {
  let component: GraficaTortaZonaComponent;
  let fixture: ComponentFixture<GraficaTortaZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaTortaZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaTortaZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
