import { Component, Input } from '@angular/core';
import { Post } from './Shared/Post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPost: Post[] = [];

  onPostAdded(post) {
    this.storedPost.push(post);
  }

}
