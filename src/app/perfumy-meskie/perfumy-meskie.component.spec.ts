import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumyMeskieComponent } from './perfumy-meskie.component';

describe('PerfumyMeskieComponent', () => {
  let component: PerfumyMeskieComponent;
  let fixture: ComponentFixture<PerfumyMeskieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumyMeskieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfumyMeskieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
