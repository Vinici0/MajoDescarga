import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'ProyectoPublico';
  ngOnInit() {
    let calculator = new Calculator();
    let result2 = calculator.multiply(3,3);
    console.log(result2===9);
    console.log(result2!==10);

    let result = calculator.dividir(3,3);
    console.log(result===1);
    console.log(result!==2);

    let result3 = calculator.dividir(3,4);
    console.log(result3);

  }
}
