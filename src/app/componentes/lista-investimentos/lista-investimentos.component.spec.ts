import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInvestimentosComponent } from './lista-investimentos.component';

describe('ListaInvestimentosComponent', () => {
  let component: ListaInvestimentosComponent;
  let fixture: ComponentFixture<ListaInvestimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInvestimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
