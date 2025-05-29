import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumyKartaComponent } from './perfumy-karta.component';

describe('PerfumyKartaComponent', () => {
  let component: PerfumyKartaComponent;
  let fixture: ComponentFixture<PerfumyKartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumyKartaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfumyKartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
