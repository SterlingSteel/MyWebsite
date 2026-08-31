import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
    selector: 'app-prime',
    imports: [FormsModule],
    templateUrl: './prime.html',
    styleUrl: './prime.css',
})
export class Prime {
    n: number = 0;
    result: string = '';
    compute() {
        this.result = prime(this.n) ? "number is prime": "number is not prime"
    }
}



function prime(n: number):boolean {
    let cnt = 0;

    // If number is less than/equal to 1,
    // it is not prime
    if (n <= 1)
        return false
    else {

        // Count the all divisors of 
        // given number
        for (let i = 1; i <= n; i++) {

            // Check n is divided by
            // i or not
            if (n % i == 0)
                cnt++;
        }

        // If n is divisible by more than 2 numbers
        // then it is not prime
        if (cnt > 2)
            return false;

        // else it is prime
        else
            return true
    }

}