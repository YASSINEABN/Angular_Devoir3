import { Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserComponent } from './users/users.component';


export const routes: Routes = [
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'users', component: UserComponent },
  { path: '**', redirectTo: 'post/1', pathMatch: 'full' }, 
];
