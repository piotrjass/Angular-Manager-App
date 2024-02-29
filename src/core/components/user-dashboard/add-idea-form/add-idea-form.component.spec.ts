import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdeaFormComponent } from './add-idea-form.component';

describe('AddIdeaFormComponent', () => {
  let component: AddIdeaFormComponent;
  let fixture: ComponentFixture<AddIdeaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIdeaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddIdeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
