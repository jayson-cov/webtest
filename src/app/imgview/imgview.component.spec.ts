import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgviewComponent } from './imgview.component';

describe('ImgviewComponent', () => {
  let component: ImgviewComponent;
  let fixture: ComponentFixture<ImgviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
