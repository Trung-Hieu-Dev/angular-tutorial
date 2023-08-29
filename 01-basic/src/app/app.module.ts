import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import components
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    // register all components
    AppComponent,
    ServerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
