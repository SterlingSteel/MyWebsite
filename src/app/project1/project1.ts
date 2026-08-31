import { Component, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project1',
  imports: [FormsModule],
  templateUrl: './project1.html',
  styleUrl: './project1.css',
})
export class Project1 {
  x: number = 0;
  y: number = 0;
  opp: string = '+';
  result: string = '';
  compute(){
    this.result = ''+ Calc(this.x, this.y, this.opp)
  } 
}

export function Calc(x: number, y: number, opp: string) {


  switch (opp) {
    case '+':
      return x + y;
      break;
    case '-':
      return x - y;
      break;
    case '*':
      return x * y;
      break;
    case '/':
      if (y == 0)
        throw new Error(" invalid ");
      return x / y;
      break;
    default:
      throw new Error("invalid operator");
  }


}
