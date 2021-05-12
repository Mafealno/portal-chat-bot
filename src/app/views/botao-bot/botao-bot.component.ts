import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-bot',
  templateUrl: './botao-bot.component.html',
  styleUrls: ['./botao-bot.component.css'],
})
export class BotaoBotComponent implements OnInit {

  valor : Boolean = false;

  mudarvalor(): void {
    this.valor = !this.valor;
  }

  constructor() {}

  ngOnInit(): void {}
}
