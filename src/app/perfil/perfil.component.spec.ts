import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('nombre', (() => {
    const fixture = TestBed.createComponent(PerfilComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('Leonardo Borja');
  }));

  it('boton chat', (() => {
    const fixture = TestBed.createComponent(PerfilComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Chat');
  }));

  it('imagen', (() => {
    const fixture = TestBed.createComponent(PerfilComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain('https://lh3.googleusercontent.com/a/AEdFTp6pVkN7slrFTPucWkga0Nx4STI--DxUTXDCjA_M=s96-c-rg-br100');
  }));

  it('articulos', (() => {
    const fixture = TestBed.createComponent(PerfilComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('Articles');
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
