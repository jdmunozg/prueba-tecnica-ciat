import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteccionPlagasComponent } from './deteccion-plagas.component';

describe('DeteccionPlagasComponent', () => {
  let component: DeteccionPlagasComponent;
  let fixture: ComponentFixture<DeteccionPlagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeteccionPlagasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeteccionPlagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
