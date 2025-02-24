import { Component, OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PizzaService } from '../shared/pizza.service';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
/*  slides = [
    {Image:  'Images/pizza-margherita.jpg', title: 'Margherita', description: 'Classic cheese and tomato',price: },
    {Image: 'Images/pizza-peperoni.jpg', title: 'Pepperoni', description: 'Pepperoni and cheese',price: },
    {Image: 'Images/pizza-veggie.jpg',title:'Veggie', description: 'Mixed vegetables',price: }
  ];*/
  slides : any[] = [];
  currentIndex=0;

  constructor(private pizzaService : PizzaService){}
  
  ngOnInit(): void {
      this.slides = this.pizzaService.getPizzas();
  }

  nextSlide(){
    this.currentIndex = (this.currentIndex + 1)% this.slides.length;
  }
  prevSlide(){
    this.currentIndex=(this.currentIndex - 1+this.slides.length)% this.slides.length;
  }

}
