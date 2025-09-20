import { Component } from '@angular/core';
import { InputSearch } from '../input-search/input-search';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [InputSearch, RouterLink ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
