import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarListItemComponent } from './navbar-list-item.component';

describe('NavbarListItemComponent', () => {
  let component: NavbarListItemComponent;
  let fixture: ComponentFixture<NavbarListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
