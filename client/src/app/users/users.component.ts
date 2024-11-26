import { OnInit } from '@angular/core';
import { User } from './users.modele';
import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true, 
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {

  utilisateur: User | undefined; 

  ngOnInit(): void {
    // Replace these placeholder values with actual user information
    this.utilisateur = new User('Ali', 'Alaoui', new Date('1990-01-01'), 'M', '123, RueNarjis');
  }
}
