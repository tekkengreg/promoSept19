import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {

  filter: string = ''

  constructor(private cardsService: CardsService) { }

  ngOnInit() {

  }

  isSelected = (cards: any, cardIdToCheck: string) => cards.find(c => c === cardIdToCheck)

  getFilteredCards = ()=> this.cardsService.cards.filter(card => card.name.includes(this.filter))

}
