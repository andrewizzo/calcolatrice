import { NgModule } from "@angular/core";
import { CalculatorComponent } from "./calculator.component";
import { CommonModule } from "@angular/common";
import { CalculatorRoutingModule } from "./calculator-routing.module";

@NgModule({
    declarations:[CalculatorComponent],
    imports:[CommonModule,CalculatorRoutingModule],
    exports:[]
})
export class CalculatorModule{}