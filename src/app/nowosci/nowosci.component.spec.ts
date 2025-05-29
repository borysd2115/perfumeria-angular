import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowosciComponent } from './nowosci.component';

describe('NowosciComponent', () => {
  let component: NowosciComponent;
  let fixture: ComponentFixture<NowosciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowosciComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NowosciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
