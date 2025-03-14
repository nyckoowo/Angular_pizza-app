import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizePizzaComponent } from './customize-pizza.component';

describe('CustomizePizzaComponent', () => {
  let component: CustomizePizzaComponent;
  let fixture: ComponentFixture<CustomizePizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizePizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
