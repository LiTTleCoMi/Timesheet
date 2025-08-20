import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/modules/app-module';

platformBrowser()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
