import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../shared/pizza.service';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-customize-pizza',
  templateUrl: './customize-pizza.component.html',
  styleUrl: './customize-pizza.component.scss',
})
export class CustomizePizzaComponent implements OnInit {
  pizza: any;
  drink: string[] = ['Orange Juice', 'Lemonade', 'Cola', 'Milkshake'];
  extraToppings: string[] = [
    'Extra Cheese',
    'Pepperoni',
    'Mushrooms',
    'Olives',
  ];
  selectedDrink: string[] = [];
  selectedToppings: string[] = [];
  finalPrice: number = 0;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const pizzaId = Number(this.route.snapshot.paramMap.get('id')!);
    this.pizza = this.pizzaService.getPizzaById(pizzaId);
    this.finalPrice = this.pizza.price;
  }
  //this is if the price was a string
  //this.finalPrice = parseFloat(this.pizza.price); or
  /*  parsePrice(price: string): number {
      return +price.replace('$', '');
      }*/

  //handle topping selection
  onToppingSelect(topping: string, event: any) {
    if (event.target.checked) {
      this.selectedToppings.push(topping);
      this.finalPrice += 3;
    } else {
      this.selectedToppings = this.selectedToppings.filter(
        (t) => t !== topping
      );
      this.finalPrice -= 3;
    }
  }
  //handle drink selection
  onDrinkSelect(drink: string, event: any) {
    if (event.target.checked) {
      this.selectedDrink.push(drink);
      this.finalPrice += 5;
    } else {
      this.selectedDrink = this.selectedDrink.filter((t) => t !== drink);
      this.finalPrice -= 5;
    }
  }

  onAddToCart() {
    const customizePizza = {
      ...this.pizza,
      toppings: this.selectedToppings,
      finalPrice: this.finalPrice,
    };
    this.cartService.addToCart(customizePizza);
  }
}
