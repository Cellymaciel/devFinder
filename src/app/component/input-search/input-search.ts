import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';


@Component({
  selector: 'app-input-search',
  imports: [InputTextModule,
            CommonModule,
            FormsModule,
            ButtonModule,
            IconFieldModule,
            InputIconModule],
  templateUrl: './input-search.html',
  styleUrl: './input-search.css'
})
export class InputSearch {

userName : string = '';
@Output() search = new EventEmitter<string>();

onSearch(){
  if(this.userName){
    this.search.emit(this.userName)
  }
}



}
