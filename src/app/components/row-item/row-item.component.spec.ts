import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowItemComponent } from './row-item.component';

describe('RowItemComponent', () => {
  let component: RowItemComponent;
  let fixture: ComponentFixture<RowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
