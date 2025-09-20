import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { Header } from '../header/header';
import { Home } from "../home/home";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule,  registerLocaleData } from '@angular/common';
import { GithubService } from '../../service/github.service';
import localePt from '@angular/common/locales/pt';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
registerLocaleData(localePt)

@Component({
  selector: 'app-perfil',
  imports: [Header, ButtonModule, CommonModule, ProgressSpinnerModule],
  providers:[
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {
   user : any;
   repos: any[] = [];
   username: string | null = null;
   isLoading = false;

   constructor( private route: ActivatedRoute, private  gitHubService: GithubService){}

   ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
      if (this.username) {
        this.loadUserProfile(this.username);
    } });
   }

   loadUserProfile(username: string):void{
    this.isLoading = true;
    this.user = null;
    this.repos = []

    this.gitHubService.getUser(username).subscribe({
      next: (data)=>{
        this.user = data;
        this.isLoading = false;
      },
      error: (error) => {
      console.error('Erro ao buscar perfil do usuário', error);
      this.user = null;
      this.isLoading = false;
    }
    })

    this.gitHubService.getRepos(username).subscribe({
      next: (data) =>{
        this.repos = data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
      }
      }
    )
   }


}
