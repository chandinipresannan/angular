import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-artforms',
  templateUrl: './artform.component.html',
  styleUrls: ['./artform.component.css']
})
export class ArtformComponent  {

  constructor(private router: Router) { }
  artform=data
  goToNextPage(id:any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepage']);
  
  }
}