import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { HttpClientModule } from '@angular/common/http';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HttpClientModule, NgIf, NgForOf, CommonModule, FormsModule, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  titulo = "Superheroes";
  heroes: Hero[];

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.service.getAllPageable("0", "10").subscribe(heroes => this.heroes = heroes.content);
  }

  public delete(hero: Hero): void {
    if (confirm(`Are you sure you want to delete ${hero.name}?`)) {
      this.service.deleteHero(hero.id).subscribe(() => {
        this.service.getAllPageable("0", "10").subscribe(heroes => this.heroes = heroes.content);
      });
    }
  }

}
