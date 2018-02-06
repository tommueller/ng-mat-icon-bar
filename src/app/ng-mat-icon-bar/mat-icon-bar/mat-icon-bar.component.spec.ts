import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconBarComponent } from './mat-icon-bar.component';

describe('MatEditBarComponent', () => {
  let component: MatIconBarComponent;
  let fixture: ComponentFixture<MatIconBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatIconBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatIconBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
