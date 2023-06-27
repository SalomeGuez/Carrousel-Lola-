import { Component } from '@angular/core';
import { BeerService } from './beer.service';
import { Beer } from './Models/beer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BeerList';
  beers: Beer[] = [];
  constructor(private beerService: BeerService) {}

  ngOninit():void {
    this.beerService.getBeers().subscribe((response:any): void=>{
      this.beers=response;
      (console.log(this.beers));
    });

  }
}
