import { MatToolbarModule, MatListModule } from '@angular/material';
import { ApolloConfigModule } from './../apollo-config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    ApolloConfigModule,
    MatToolbarModule,
    MatListModule,
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() private parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the appModule only`)
    }
  }
  /* 
  app.module -> CoreModule
    chat.module -> CoreModule @Optional @SkipSelf() // pega da intancia raiz a cima
  */
}
