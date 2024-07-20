import { RouterModule, Routes } from "@angular/router";
import { CalculatorComponent } from "./calculator.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path:'',
        component:CalculatorComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})  
export class CalculatorRoutingModule{}