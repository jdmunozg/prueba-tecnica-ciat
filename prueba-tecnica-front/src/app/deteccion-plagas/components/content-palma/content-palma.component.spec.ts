import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPalmaComponent } from './content-palma.component';

describe('ContentPalmaComponent', () => {
  let component: ContentPalmaComponent;
  let fixture: ComponentFixture<ContentPalmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPalmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPalmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
