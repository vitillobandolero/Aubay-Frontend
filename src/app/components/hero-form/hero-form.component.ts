import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent implements OnInit {

  createHero = "Create Superhero";
  editHero = "Edit Superhero";
  hero: Hero = new Hero();
  error: any;

  constructor(private service: HeroService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if (id) {
        this.service.getHeroById(id).subscribe(hero => this.hero = hero);
      }
    });
  }

  public create(): void {
    this.service.createHero(this.hero).subscribe(hero => {
      console.log(hero);
      alert(`Hero ${hero.name} created succesfull `)
      this.router.navigate(['/heroes']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    });
  }

  public edit(): void {
    this.service.editHero(this.hero).subscribe(hero => {
      console.log(hero);
      alert(`Hero ${hero.name} edited succesfull `)
      this.router.navigate(['/heroes']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
}
