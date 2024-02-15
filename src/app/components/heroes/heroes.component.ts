import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { HttpClientModule } from '@angular/common/http';
import { NgIf, NgForOf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgForOf, CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  titulo = "Superheroes";
  heroes: Hero[];

  constructor(private service: HeroService) { }

  ngOnInit() {
    console.log('aqui');
    this.service.getAllPageable("0", "10").subscribe(heroes => this.heroes = heroes.content);
  }

}
