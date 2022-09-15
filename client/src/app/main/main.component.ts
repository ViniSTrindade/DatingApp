import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
  
export class MainComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:7263/api/users').subscribe({
      next: (response) => this.users = response,
      error: (e) => console.error(e)
    })
  }
}

