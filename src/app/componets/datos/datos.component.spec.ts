// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DatosComponent } from './datos.component';

// describe('DatosComponent', () => {
//   let component: DatosComponent;// Se crea una variable de tipo DatosComponent
//   let fixture: ComponentFixture<DatosComponent>;//Se crea una variable de tipo ComponentFixture<DatosComponent>

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DatosComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DatosComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('nombe del titulo', (() => {
//     const fixture = TestBed.createComponent(DatosComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Calculadora');
//   }));

//   it('informacion', (() => {
//     const fixture = TestBed.createComponent(DatosComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('#info').textContent).toContain('Calculadora que suma dos números');
//   }));

//   //<label for="num1">Número 1</label>
//   it('label numero 1', (() => {
//     const fixture = TestBed.createComponent(DatosComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('label[for="num1"]').textContent).toContain('Número 1');
//   }));

//    //<label for="num2">Número 2</label>
//     it('label numero 2', (() => {
//       const fixture = TestBed.createComponent(DatosComponent);
//       fixture.detectChanges();
//       const compiled = fixture.debugElement.nativeElement;
//       expect(compiled.querySelector('label[for="num2"]').textContent).toContain('Número 2');
//     }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// describe('Resultado de la calculadora: ', () => {
//   let component: DatosComponent;
//   let fixture: ComponentFixture<DatosComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DatosComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DatosComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('Suma', (() => {
//     const fixture = TestBed.createComponent(DatosComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     const num1: number = 2.5;
//     const num2: number = 2.5;
//     const res = fixture.componentInstance.sumar2(num1, num2);
//     expect(compiled.querySelector('h2').textContent).toContain('Resultado: 5');
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
