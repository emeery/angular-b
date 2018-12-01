import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServidoresComponent } from './servidores/servidores.component';
import { ServidorComponent } from './servidor/servidor.component';
@NgModule({
  declarations: [
    AppComponent,
    ServidoresComponent,
    ServidorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
