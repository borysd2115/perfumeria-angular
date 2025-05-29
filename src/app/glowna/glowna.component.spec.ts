import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlownaComponent } from './glowna.component';

describe('GlownaComponent', () => {
  let component: GlownaComponent;
  let fixture: ComponentFixture<GlownaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlownaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlownaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
