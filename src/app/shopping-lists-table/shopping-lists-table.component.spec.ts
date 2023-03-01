import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListsTableComponent } from './shopping-lists-table.component';

describe('ShoppingListsTableComponent', () => {
  let component: ShoppingListsTableComponent;
  let fixture: ComponentFixture<ShoppingListsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
