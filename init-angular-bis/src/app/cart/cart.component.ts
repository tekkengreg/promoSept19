import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
  }

  getImageUrl = id => this.cardsService.cards.find(ca => ca.id === id).imageUrl
}
