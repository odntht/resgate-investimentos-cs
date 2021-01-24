import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheResgateComponent } from './detalhe-resgate.component';

describe('DetalheResgateComponent', () => {
  let component: DetalheResgateComponent;
  let fixture: ComponentFixture<DetalheResgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheResgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheResgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
