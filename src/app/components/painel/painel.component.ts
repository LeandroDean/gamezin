import { Component, OnInit } from '@angular/core';

import { Frases } from '../shared/frases.model'
import { Frasess } from '../painel/frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frases[] = Frasess
  public instrucao: string = 'Traduza a frase:'
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: Frases
  public tentativas: number = 3

  public progresso: number = 0

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.frases)
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    console.log("Verifica resposta", this.resposta)

    if (this.rodadaFrase.frasesPtBr == this.resposta) {
      alert('a tradução está correta')
      this.rodada++
      console.log(this.rodada)
      this.rodadaFrase = this.frases[this.rodada]
      this.progresso = this.progresso + 25

    } else {
      alert('você errou')
      this.tentativas--
      if(this.tentativas === -1) {
        alert('Você perdeu toda as suas vidas, infezlimente você é um Matheus')
      }
    }
  }
}
