import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent {

  num1: number;
  num2: number;
  resultado: number;

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      num1: ['', Validators.required],
      num2: ['', Validators.required]
    });
  }

  sumar() {
    const result = Number(this.form.value.num1) + Number(this.form.value.num2)
    console.log(Number(this.form.value.num1));
    return this.resultado = result;

  }

  sumar2(num1:number, num2:number) {
    const result = num1 + num2;
    return this.resultado = result;
  }

  restar() {
    const result = this.form.value.num1 - this.form.value.num2;
    this.resultado = result;
  }

  sendCalculadora () {
    const result = this.form.value.num1 * this.form.value.num2;
    this.resultado = result;
    console.log(result);
  }


}
