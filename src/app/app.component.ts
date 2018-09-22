import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private url = `https://api.graph.cool/simple/v1/cjmba2hiq11cv01009591v3v9`;

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.createUser();
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
    };
    this.http.post(this.url, body).subscribe(res => console.log(`Query`, res));
  }

  createUser(): void {

    const body = {
      query: `
        mutation CreateNewUser($nome: String!, $email: String!, $password: String!) {
          createUser(nome: $nome, email: $email, password: $password) {
            id
            nome
            email
          }
        }
      `,
      variables: {
        nome: 'Black Panther',
        email: 'panther@avengers.com',
        password: '123456'
      }
    };

    this.http.post(this.url, body)
      .subscribe(res => console.log('Mutation: ', res));

  }

}
