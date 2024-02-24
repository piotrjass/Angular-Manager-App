import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseButtonDarkComponent } from './base-button-dark.component';

describe('BaseButtonDarkComponent', () => {
  let component: BaseButtonDarkComponent;
  let fixture: ComponentFixture<BaseButtonDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseButtonDarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseButtonDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
