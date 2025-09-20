import { Component } from '@angular/core';
import { InputSearch } from '../input-search/input-search';
import { Home } from '../home/home';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [InputSearch, Home, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
