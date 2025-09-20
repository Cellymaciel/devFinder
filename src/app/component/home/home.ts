import { Component } from '@angular/core';
import { InputSearch } from '../input-search/input-search';
import { Router} from '@angular/router';
import { GithubService } from '../../service/github.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [InputSearch, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private router: Router, private gitHubService: GithubService){}

  onSearchUser(username: string) {
    this.gitHubService.getUser(username).subscribe({
      next:(user) =>{
        console.log('Dados do usuario:', user)
      },

    })
  this.router.navigate(['/perfil', username]);
}
}
