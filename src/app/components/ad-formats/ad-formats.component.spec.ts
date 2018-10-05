import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFormatsComponent } from './ad-formats.component';

describe('AdFormatsComponent', () => {
  let component: AdFormatsComponent;
  let fixture: ComponentFixture<AdFormatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdFormatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
