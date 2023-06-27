import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/Models/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})

export class BeerComponent {
  @Input() beers: Beer[] = [];

}
