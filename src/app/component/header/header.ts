import { Component } from '@angular/core';
import { InputSearch } from '../input-search/input-search';
import { Home } from '../home/home';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [InputSearch, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router: Router){}

onSearchUser(username: string) {
  this.router.navigate(['/perfil',username])
}


}
