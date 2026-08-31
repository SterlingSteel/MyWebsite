import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fib',
  imports: [FormsModule],
  templateUrl: './fib.html',
  styleUrl: './fib.css',
})
export class Fib {
  n: number = 0;
  result: string = '';
  compute() {
    this.result = "" + printFib(this.n)
  }
}



function printFib(n: number) {
  let result = "";
  // If the number of terms is smaller than 1
  if (n < 1) {
    return "Invalid Number of terms\n";
  }

  // First two terms of the series
  let prev1 = 1;
  let prev2 = 0;
  // for loop that prints n terms of fibonacci series
  for (let i = 0; i <= n; i++) {
    const delim = i > 1 ? ",": "";
    // Print current term and update previous terms
    if (i > 2) {
      let curr = prev1 + prev2;
      prev2 = prev1;
      prev1 = curr;
      result += delim + (curr);
    }
    else if (i == 1)
      result += delim + (prev2);
    else if (i == 2)
      result += delim + (prev1);
  }
  return result;
}

export function fib(n: number) {


  // Printing first n fibonacci terms
  printFib(n);
  return 0;
}

