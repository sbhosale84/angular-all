import { Component } from '@angular/core';
import { EmployeesService } from './emplyoees.service';
import { empData } from './EmpDetails';

@Component({
  selector: 'app-root',
  template: `<div>
    <div>
      title
      <input [(ngModel)]="title" type="text" />
      body
      <input [(ngModel)]="body" type="text" />
      <button (click)="addPosts()" type="submit">Add Post</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let post of posts">
          <tr *ngIf="editMode && editId === post.id">
            <td>{{ post.id }}</td>
            <td><input [(ngModel)]="editTitle" type="text" /></td>
            <td><input [(ngModel)]="editBody" type="text" /></td>
            <td>
              <button (click)="updatePatchPost()">Update</button>
              <button (click)="cancelEdit()">Cancel</button>
            </td>
          </tr>
          <tr *ngIf="!editMode || editId !== post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
            <td>
              <button (click)="setEditMode(post.id)">Edit</button>
              <button (click)="deletePosts(post.id)">Delete</button>
            </td>
          </tr>
        </ng-container>
      </tbody>
    </table>
  </div> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '';
  body = '';
  posts: empData[] = [];
  editMode = false;
  editId: number | null = null;
  editTitle: string = '';
  editBody: string = '';

  constructor(private employeeService: EmployeesService) {
    this.getPosts();
  }

  getPosts() {
    this.employeeService.getPosts().subscribe((data) => (this.posts = data));
  }

  addPosts() {
    if (this.title.length > 0 && this.body.length > 0) {
      this.employeeService.addPost(this.title, this.body).subscribe({
        next: (data) => {
          this.posts.unshift(data);
          this.title = '';
          this.body = '';
        },
      });
    }
  }

  updatePost() {
    if (
      this.editId !== null &&
      this.editTitle.length > 0 &&
      this.editBody.length > 0
    ) {
      this.employeeService
        .updatePost(this.editId, this.editTitle, this.editBody)
        .subscribe((data) => {
          const index = this.posts.findIndex((post) => post.id === this.editId);
          if (index !== -1) {
            this.posts[index] = data;
            this.cancelEdit();
          }
        });
    }
  }

  updatePatchPost() {
    if (
      this.editId !== null &&
      this.editTitle.length > 0 &&
      this.editBody.length > 0
    ) {
      this.employeeService
        .updatePatchPost(this.editId, this.editTitle, this.editBody)
        .subscribe((data) => {
          const index = this.posts.findIndex((post) => post.id === this.editId);
          this.posts[index] = data;
          this.cancelEdit();
        });
    }
  }

  deletePosts(id: number) {
    this.employeeService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }

  setEditMode(id: number) {
    const post = this.posts.find((p) => p.id === id);
    if (post) {
      this.editId = id;
      this.editTitle = post.title;
      this.editBody = post.body;
      this.editMode = true;
    }
  }

  cancelEdit() {
    this.editMode = false;
    this.editId = null;
    this.editTitle = '';
    this.editBody = '';
  }
}
