import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpaceComponent } from './dashboard-space.component';

describe('DashboardSpaceComponent', () => {
  let component: DashboardSpaceComponent;
  let fixture: ComponentFixture<DashboardSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
