import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermDashboardComponent } from './long-term-dashboard.component';

describe('LongTermDashboardComponent', () => {
  let component: LongTermDashboardComponent;
  let fixture: ComponentFixture<LongTermDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongTermDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LongTermDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
