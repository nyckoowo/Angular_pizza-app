import { CommonModule } from '@angular/common'; //needed to add a import in the home component!
import { Component,  OnInit } from '@angular/core';
import { PizzaService } from '../shared/pizza.service';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,CarouselComponent,MatCardModule,MatButtonModule,MatIconModule], // Add this line
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

// this export class is the home component class where is defining the logic in the component
//using the ngOnInit lifecycle hook to call the getPizzas method from the pizza service
export class HomeComponent implements OnInit {
  //pizzas array to store the pizza objects
  pizzas: any[] = [];

  //constructor to inject the pizza service
  constructor(private pizzaService: PizzaService) {}

  //ngOninit Lifecycle
  ngOnInit() {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
