import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPokemonsComponent } from './listagem-pokemons.component';

describe('ListagemPokemonsComponent', () => {
  let component: ListagemPokemonsComponent;
  let fixture: ComponentFixture<ListagemPokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemPokemonsComponent]
    });
    fixture = TestBed.createComponent(ListagemPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
