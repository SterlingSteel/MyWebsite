import { Routes } from '@angular/router';
import { Project1 } from './project1/project1';
import { App } from './app';
import { Home } from './home/home';
import { Fib } from './fib/fib';
import { Prime } from './prime/prime';
export const routes: Routes = [{path: 'project1', component: Project1},
     {path: '', component: Home}, {path: 'fib', component: Fib}, {path: 'prime', component: Prime}];
