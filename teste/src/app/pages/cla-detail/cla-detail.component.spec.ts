import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaDetailComponent } from './cla-detail.component';

describe('ClaDetailComponent', () => {
  let component: ClaDetailComponent;
  let fixture: ComponentFixture<ClaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
