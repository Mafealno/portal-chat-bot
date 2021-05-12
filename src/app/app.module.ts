import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// material components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BotaoBotComponent } from './views/botao-bot/botao-bot.component';
import { ContainerOpcoesComponent } from './views/container-opcoes/container-opcoes.component';

@NgModule({
  declarations: [AppComponent, InicioComponent, BotaoBotComponent, ContainerOpcoesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
