import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
