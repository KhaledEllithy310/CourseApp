import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartwidgetComponent } from './cartwidget.component';

describe('CartwidgetComponent', () => {
  let component: CartwidgetComponent;
  let fixture: ComponentFixture<CartwidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartwidgetComponent]
    });
    fixture = TestBed.createComponent(CartwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
