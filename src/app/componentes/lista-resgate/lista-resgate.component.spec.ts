import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResgateComponent } from './lista-resgate.component';

describe('ListaResgateComponent', () => {
  let component: ListaResgateComponent;
  let fixture: ComponentFixture<ListaResgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaResgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaResgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
