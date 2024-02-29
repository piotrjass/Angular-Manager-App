import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLongTermItemFormComponent } from './add-long-term-item-form.component';

describe('AddLongTermItemFormComponent', () => {
  let component: AddLongTermItemFormComponent;
  let fixture: ComponentFixture<AddLongTermItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLongTermItemFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLongTermItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
