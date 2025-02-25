import { Injectable } from '@angular/core';

//Use injectable to inject the service into the compoonent
@Injectable({

  providedIn: 'root', //this makes the service available to the entire application
}) 

  let nextOrderId= 1;
  let nextPizzaId= 1;
export class PizzaService {

 

    private pizzas=[{

        name: 'Margherita',
        description: 'Classic cheese and tomato',
        price: '$10',
        image: 'Images/pizza-margherita.jpg',
      },
      {
        name: 'Pepperoni',
        description: 'Pepperoni and cheese',
        price: '$12',
        image: 'Images/pizza-peperoni.jpg',
      },
      {
        name: 'Veggie',
        description: 'Mixed vegetables',
        price: '$11',
        image: 'Images/pizza-veggie.jpg',
      },
      {
        name: 'BBQ Chicken',
        description: 'Grilled chicken, BBQ sauce, and cheese',
        price: '$13',
        image: 'Images/pizza-BBQ_chicken.jpg',
      },
      {
        name: 'Hawaiian',
        description: 'Ham, pineapple, and cheese',
        price: '$12',
        image: 'Images/pizza-hawaiian.jpg',
      },
      {
        name: 'Meat Lovers',
        description: 'Pepperoni, sausage, bacon, and ham',
        price: '$15',
        image: 'Images/pizza-meat-lovers.jpg',
      },
      {
        name: 'Four Cheese',
        description: 'Mozzarella, parmesan, gorgonzola, and cheddar',
        price: '$14',
        image: 'Images/pizza-cheese.jpg',
      },  
      {
        name: 'White Pizza',
        description: 'Ricotta, mozzarella, and garlic sauce',
        price: '$13',
        image: 'Images/White-Pizza.jpg'
      }
    ];
    //getPizza method returns an array of pizza objects
    getPizzas(): { name: string; description: string; price: string; image: string }[] {
      return this.pizzas;
    }
  
    //GetPizzaByName returns the pizza array by name
    getPizzaByName(name: string): { name: string; description: string; price: string; image: string } | undefined {
      const pizza = this.getPizzas().find((pizza) => pizza.name === name);
      return pizza ? pizza : undefined;
    }
  }
