import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{
  firstOperand : number | null = null
  secondOperand : number | null = null
  operator : string = ''
  result : number | null = null;
  display : string | undefined = ''

  ngOnInit(): void {

  }

  clearCalculator(){
    this.display = ''
    this.firstOperand = null
    this.secondOperand = null
    this.operator = ''
  }

  appendNumber(number:string){
    this.display += number;
  }

  setOperatore(op:string){
    if (this.display) {
      this.firstOperand = parseFloat(this.display)
      this.operator = op
      this.display = ''
    }
  }

  caluclate(){
    if (this.display && this.firstOperand !== null && this.operator) {
      this.secondOperand = parseFloat(this.display)
      switch (this.operator) {
        case '+':
          this.result = this.firstOperand + this.secondOperand
          break;
        case '-':
          this.result = this.firstOperand - this.secondOperand
          break;
        case '/':
          this.result = this.firstOperand / this.secondOperand
          break;
        case '*':
          this.result = this.firstOperand * this.secondOperand
          break;
      }
      this.display = this.result?.toString()
      this.firstOperand = null
      this.secondOperand = null
      this.operator = ''
    }
  }
  
}
