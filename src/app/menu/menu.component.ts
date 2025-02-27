import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../shared/pizza.service';
import { RouterModule, Router } from '@angular/router';
import { CustomizePizzaComponent } from '../customize-pizza/customize-pizza.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule, CustomizePizzaComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

// this export class is the home component class where is defining the logic in the component
//using the ngOnInit lifecycle hook to call the getPizzas method from the pizza service
export class MenuComponent implements OnInit {

  //pizzas array to store the pizza objects
  pizzas: any[] = [];

//constructor to inject the pizza service
  constructor(private pizzaService: PizzaService, private router: Router) {}

//ngOninit Lifecycle
  ngOnInit(){
    this.pizzas = this.pizzaService.getPizzas();
  }

  //Onpurchase click taking it to the customiza pizza page
  onPurchase(pizzaId:number){
    this.router.navigate(['/customize-pizza', pizzaId]);
  }

}