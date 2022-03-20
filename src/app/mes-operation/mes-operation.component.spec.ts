import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesOperationComponent } from './mes-operation.component';

describe('MesOperationComponent', () => {
  let component: MesOperationComponent;
  let fixture: ComponentFixture<MesOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
