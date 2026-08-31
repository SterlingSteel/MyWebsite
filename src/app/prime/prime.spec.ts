import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prime } from './prime';

describe('Prime', () => {
  let component: Prime;
  let fixture: ComponentFixture<Prime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
