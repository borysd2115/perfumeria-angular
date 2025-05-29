import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumyDamskieComponent } from './perfumy-damskie.component';

describe('PerfumyDamskieComponent', () => {
  let component: PerfumyDamskieComponent;
  let fixture: ComponentFixture<PerfumyDamskieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumyDamskieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfumyDamskieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
