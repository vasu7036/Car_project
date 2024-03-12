import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecarDetailsComponent } from './singlecar-details.component';

describe('SinglecarDetailsComponent', () => {
  let component: SinglecarDetailsComponent;
  let fixture: ComponentFixture<SinglecarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglecarDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglecarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
