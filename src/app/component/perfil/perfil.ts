import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Home } from "../home/home";
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-perfil',
  imports: [Header, Home, RouterLink, ButtonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

}
