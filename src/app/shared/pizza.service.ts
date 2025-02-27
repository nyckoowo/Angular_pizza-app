import { Injectable } from '@angular/core';

//Use injectable to inject the service into the compoonent
@Injectable({
  providedIn: 'root', //this makes the service available to the entire application
})
export class PizzaService {



// Removed the duplicate export class PizzaService
    private nextPizzaId = 1;

    private pizzas=[{
        id: this.nextPizzaId++,
        name: 'Margherita',
        description: 'Classic cheese and tomato',
        price: 10,
        image: 'Images/pizza-margherita.jpg',
      },
      {
        id: this.nextPizzaId++,
        name: 'Pepperoni',
        description: 'Pepperoni and cheese',
        price: 12,
        image: 'Images/pizza-peperoni.jpg',
      },
      {
        id: this.nextPizzaId++,
        name: 'Veggie',
        description: 'Mixed vegetables',
        price: 11,
        image: 'Images/pizza-veggie.jpg',
      },
      {
        id: this.nextPizzaId++,
        name: 'BBQ Chicken',
        description: 'Grilled chicken, BBQ sauce, and cheese',
        price: 13,
        image: 'Images/pizza-BBQ_chicken.jpg',
      },
      {
        id: this.nextPizzaId++,
        name: 'Hawaiian',
        description: 'Ham, pineapple, and cheese',
        price: 12,
        image: 'Images/pizza-hawaiian.jpg',
      },
      {
        id: this.nextPizzaId++,
        name: 'Meat Lovers',
        description: 'Pepperoni, sausage, bacon, and ham',
        price: 15,
        image: 'Images/pizza-meat-lovers.jpg',
      },
      {
        id: this.nextPizzaId++,
        name: 'Four Cheese',
        description: 'Mozzarella, parmesan, gorgonzola, and cheddar',
        price: 14,
        image: 'Images/pizza-cheese.jpg',
      },  
      {
        id: this.nextPizzaId++,
        name: 'White Pizza',
        description: 'Ricotta, mozzarella, and garlic sauce',
        price: 13,
        image: 'Images/White-Pizza.jpg'
      }
    ];
    //getPizza method returns an array of pizza objects
    getPizzas(): { id: number; name: string; description: string; price: number; image: string }[] {
      return this.pizzas;
    }
    
  
    //GetPizzaByName returns the pizza array by name
    getPizzaByName(name: string): { name: string; description: string; price: number; image: string } | undefined {
      const pizza = this.getPizzas().find((pizza) => pizza.name === name);
      return pizza ? pizza : undefined;
    }

    getPizzaById(nextPizzaId: number):{ name: string; description: string; price: number; image:string}| undefined {
      const pizza = this.getPizzas().find((pizza) => pizza.id === nextPizzaId);
      return pizza ? pizza : undefined;
    }
  }
