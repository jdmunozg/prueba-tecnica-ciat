import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarraPlagaZonaComponent } from './grafica-barra-plaga-zona.component';

describe('GraficaBarraPlagaZonaComponent', () => {
  let component: GraficaBarraPlagaZonaComponent;
  let fixture: ComponentFixture<GraficaBarraPlagaZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaBarraPlagaZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaBarraPlagaZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
