import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousinsComponent } from './cousins.component';

describe('CousinsComponent', () => {
  let component: CousinsComponent;
  let fixture: ComponentFixture<CousinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CousinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CousinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
