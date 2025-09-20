import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Home } from "../home/home";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../service/github.service';
@Component({
  selector: 'app-perfil',
  imports: [Header, ButtonModule, CommonModule],
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
    this.gitHubService.getUser(username).subscribe({
      next: (data)=>{
        this.user = data;
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
