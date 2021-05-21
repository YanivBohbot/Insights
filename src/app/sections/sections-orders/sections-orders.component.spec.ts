import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsOrdersComponent } from './sections-orders.component';

describe('SectionsOrdersComponent', () => {
  let component: SectionsOrdersComponent;
  let fixture: ComponentFixture<SectionsOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
