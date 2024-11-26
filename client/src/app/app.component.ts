import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './users/users.component';
import { PostDetailsComponent } from './post-details/post-details.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent,PostDetailsComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';
}
