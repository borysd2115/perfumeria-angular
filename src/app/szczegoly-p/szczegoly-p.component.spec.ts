import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolyPComponent } from './szczegoly-p.component';

describe('SzczegolyPComponent', () => {
  let component: SzczegolyPComponent;
  let fixture: ComponentFixture<SzczegolyPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzczegolyPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SzczegolyPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
