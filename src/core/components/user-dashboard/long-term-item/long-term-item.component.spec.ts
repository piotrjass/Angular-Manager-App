import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermItemComponent } from './long-term-item.component';

describe('LongTermItemComponent', () => {
  let component: LongTermItemComponent;
  let fixture: ComponentFixture<LongTermItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongTermItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LongTermItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
