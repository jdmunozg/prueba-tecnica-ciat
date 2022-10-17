import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPlagasComponent } from './content-plagas.component';

describe('ContentPlagasComponent', () => {
  let component: ContentPlagasComponent;
  let fixture: ComponentFixture<ContentPlagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPlagasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPlagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
