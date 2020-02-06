import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: any[] = []
  selectedCards: string[] = []

  constructor(private http: HttpClient) {
    this.getCards()
      .subscribe(({ cards }) => this.cards = cards, err => console.error(err))
  }


  getCards = () => {
    return this.http.get<any>('https://api.pokemontcg.io/v1/cards')
  }

  selectCard = id => {
    const indexFound = this.selectedCards.findIndex(sc => sc === id)
    if (indexFound >= 0)
      this.selectedCards.splice(indexFound, 1)
    else
      this.selectedCards.push(id)
  }
}
