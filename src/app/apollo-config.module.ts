import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
    imports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
    ]
})
export class ApolloConfigModule {
    constructor(
        private apollo: Apollo,
        private httpLink: HttpLink
    ) {
     const uri = 'https://api.graph.cool/simple/v1/cjmba2hiq11cv01009591v3v9';
     const http = httpLink.create({ uri });

     apollo.create({
        link: http,
        cache: new InMemoryCache()
     });
    }
}