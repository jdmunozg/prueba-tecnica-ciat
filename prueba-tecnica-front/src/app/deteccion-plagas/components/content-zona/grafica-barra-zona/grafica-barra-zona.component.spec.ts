import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarraZonaComponent } from './grafica-barra-zona.component';

describe('GraficaBarraZonaComponent', () => {
  let component: GraficaBarraZonaComponent;
  let fixture: ComponentFixture<GraficaBarraZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaBarraZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaBarraZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
