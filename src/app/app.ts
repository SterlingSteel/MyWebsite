import { AfterContentInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calc } from './project1/project1';
import { RouterLink } from '@angular/router';
import { fib } from './fib/fib';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterContentInit {
  protected readonly title = signal('MyWebsite');
  ngAfterContentInit(): void {
    console.log(Calc(1, 2, "-"))

    console.log(fib(1))

  }
}
