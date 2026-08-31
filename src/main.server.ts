import { config } from './app/app.config.server';
import {bootstrapApplication, BootstrapContext} from '@angular/platform-browser';
import {App} from './app/app';
import { RouterLink, RouterOutlet } from '@angular/router';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);
export default bootstrap;