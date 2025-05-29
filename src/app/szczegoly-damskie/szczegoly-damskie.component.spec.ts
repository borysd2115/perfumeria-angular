import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolyDamskieComponent } from './szczegoly-damskie.component';

describe('SzczegolyDamskieComponent', () => {
  let component: SzczegolyDamskieComponent;
  let fixture: ComponentFixture<SzczegolyDamskieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SzczegolyDamskieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SzczegolyDamskieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
