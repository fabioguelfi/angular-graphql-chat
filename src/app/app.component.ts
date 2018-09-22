import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private url = `https://api.graph.cool/simple/v1/cjmba2hiq11cv01009591v3v9`;

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.allUsers();
  }

  public allUsers(): void {
    const body = {
      query: `
      query {
        allUsers {
          id
          nome
          email
        }
      }`
    }
    this.http.post(this.url, body)
    .subscribe(res => console.log(res))
  };

}
