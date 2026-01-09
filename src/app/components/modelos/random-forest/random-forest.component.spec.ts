import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomForestComponent } from './random-forest.component';

describe('RandomForestComponent', () => {
  let component: RandomForestComponent;
  let fixture: ComponentFixture<RandomForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomForestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
