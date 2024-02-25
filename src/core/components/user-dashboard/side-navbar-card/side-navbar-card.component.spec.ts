import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavbarCardComponent } from './side-navbar-card.component';

describe('SideNavbarCardComponent', () => {
  let component: SideNavbarCardComponent;
  let fixture: ComponentFixture<SideNavbarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavbarCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavbarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
