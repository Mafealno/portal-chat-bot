import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-opcoes',
  templateUrl: './container-opcoes.component.html',
  styleUrls: ['./container-opcoes.component.css']
})
export class ContainerOpcoesComponent implements OnInit {

  link = "https://ece.ativossa.com.br/system/templates/chat/aqua/index.html?subActivity=Chat&entryPointId=1001&templateName=aqua&ver=v11&locale=pt-BR";

  opcoes = [
    {
      titulo: "Pagamento",
      descricao: "Pagamento de contas",
      icone: "paid",
      link: this.link,
    },
    {
      titulo: "Reclamação",
      descricao: "Abri reclamação",
      icone: "error",
      link: this.link,
    },
    {
      titulo: "Outros",
      descricao: "Falar sobre outros assuntos",
      icone: "add",
      link: this.link,
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
