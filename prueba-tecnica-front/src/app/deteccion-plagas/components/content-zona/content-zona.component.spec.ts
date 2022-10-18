import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentZonaComponent } from './content-zona.component';

describe('ContentZonaComponent', () => {
  let component: ContentZonaComponent;
  let fixture: ComponentFixture<ContentZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
