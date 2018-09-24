import { Apollo } from 'apollo-angular';
import { Component, OnInit } from "@angular/core";
import gql from 'graphql-tag';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  constructor(
    private apollo: Apollo,
  ) { }

  public ngOnInit(): void {
    this.createUser();
    this.allUsers();
  }

  public allUsers(): void {

    this.apollo.query({
      query: gql`
      query {
        allUsers {
          id
          nome
          email
        }
      }`
    }).subscribe(res => console.log(res));
  }

  createUser(): void {

    this.apollo.mutate({
      mutation: gql`
      mutation CreateNewUser($nome: String!, $email: String!, $password: String!) {
        createUser(nome: $nome, email: $email, password: $password) {
          id
          nome
          email
        }
      }`,
      variables: {
        nome: 'Iron Man',
        email: 'ironman@avengers.com',
        password: '1234567'
      }
    }).subscribe(res => console.log(res));

  }

}
