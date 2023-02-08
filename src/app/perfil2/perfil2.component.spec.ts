import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfil2Component } from './perfil2.component';

describe('Perfil2Component', () => {
  let component: Perfil2Component;
  let fixture: ComponentFixture<Perfil2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Perfil2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perfil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('nombre del usuario', (() => {
    const fixture = TestBed.createComponent(Perfil2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Programmer');
  }));

  it('total de transacciones', (() => {
    const fixture = TestBed.createComponent(Perfil2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#p2').textContent).toContain('Total Transaction');
  }));


  it('boton message now', (() => {
    const fixture = TestBed.createComponent(Perfil2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#but').textContent).toContain('Message now');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
