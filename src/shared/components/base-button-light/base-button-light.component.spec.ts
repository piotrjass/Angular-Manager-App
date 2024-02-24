import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseButtonLightComponent } from './base-button-light.component';

describe('BaseButtonLightComponent', () => {
  let component: BaseButtonLightComponent;
  let fixture: ComponentFixture<BaseButtonLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseButtonLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseButtonLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
