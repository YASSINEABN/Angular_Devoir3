import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  imports: [CommonModule]
})
export class PostDetailsComponent implements OnInit {
  post!: Post; 
  postId!: number; 

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient 
  ) {}

  ngOnInit(): void {
   
    this.postId = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
      .subscribe(
        (data) => {
          this.post = data; 
        },
        (error) => {
          console.error('Erreur de récupération du post', error); 
        }
      );
  }
}
