// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { By } from '@angular/platform-browser';
// import { DatosComponent } from './componets/datos/datos.component';

// describe('AppComponent', () => {

//   let component: DatosComponent;
//   let fixture: ComponentFixture<DatosComponent>;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent,
//         DatosComponent
//       ],
//     }).compileComponents();


//     fixture = TestBed.createComponent(DatosComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();

//   });


//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'ProyectoPublico'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('ProyectoPublico');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('ProyectoPublico app is running!');
//   });

//   it('should create', () => {
//     fixture.detectChanges();
//     const name = fixture.debugElement.query(By.css('p:first-child')).nativeElement;
//     const lastName = fixture.debugElement.query(By.css('p:nth-child(2)')).nativeElement;//Sirve para seleccionar el segundo elemento p
//     const age = fixture.debugElement.query(By.css('p:last-child')).nativeElement;
//     expect(name.textContent).toBe('Nombre: Vinicio');
//     expect(lastName.textContent).toBe('Apellido: Borja');
//     expect(age.textContent).toBe('Edad: 225');
//     expect(component).toBeTruthy();
//   });
// });
