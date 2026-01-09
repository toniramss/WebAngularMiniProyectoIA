import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsComponentsDescriptionComponent } from './analytics-components-description.component';

describe('AnalyticsComponentsDescriptionComponent', () => {
  let component: AnalyticsComponentsDescriptionComponent;
  let fixture: ComponentFixture<AnalyticsComponentsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsComponentsDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsComponentsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
