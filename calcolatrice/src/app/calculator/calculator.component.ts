import { Component, OnInit, Renderer2 } from '@angular/core';

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
  display : string | undefined = '0'
  swipeDirection : 'right' | 'left' = 'left'
  swipeClass: string = ''
  backgroundColorClass : string = 'background-color-1'

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'background-color-transition');
  }

  clearCalculator(){
    this.display = '0'
    this.firstOperand = null
    this.secondOperand = null
    this.operator = ''
  }

  clearOnlyOne(){
    if (this.display!.length > 1) {
      this.display = this.display?.slice(0,-1)
    } else {
      this.display = '0'
    }
  }

  appendNumber(number:string){
    if (this.display === '0') {
      this.display = number; 
    }else{
      this.display += number;
    }
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
      this.display = this.result?.toString() || '0'
      this.firstOperand = null
      this.secondOperand = null
      this.operator = ''
    }
  }
  

  swipe(){
    // this.swipeClass = this.swipeDirectionn === 'left' ? 'swipe-right' : 'swipe-left'

    // this.swipeDirectionn = this.swipeDirectionn === 'rigth' ? 'left' : 'rigth'
    if (this.swipeDirection === 'right') {
      this.swipeClass = 'swipe-left';
      this.backgroundColorClass = 'background-color-1'
      this.swipeDirection = 'left'; // Cambia direzione per il prossimo clic
    } else {
      this.swipeClass = 'swipe-right';
      this.backgroundColorClass = 'background-color-2'
      this.swipeDirection = 'right'; // Cambia direzione per il prossimo clic
    }
  }
}
