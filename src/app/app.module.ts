import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PainelComponent } from './components/painel/painel.component';
import { ProgressoComponent } from './components/progresso/progresso.component';
import { TentativasComponent } from './components/tentativas/tentativas.component';
import { TopoComponent } from './components/topo/topo.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    ProgressoComponent,
    TentativasComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
