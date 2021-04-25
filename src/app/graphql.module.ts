import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { setContext } from '@apollo/client/link/context';
import { HttpClientModule } from '@angular/common/http';

const uri = environment.apiUrl; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
	const basic = setContext(() => ({
		headers: {
			Accept: 'charset=utf-8',
		},
	}));

	const auth = setContext(() => {
		const token = localStorage.getItem('token');

		if (token === null) {
			return {};
		} else {
			return {
				headers: {
					Authorization: `Bearer ${ token }`,
				},
			};
		}
	});

	const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
	const cache = new InMemoryCache();

	return {
		link,
		cache,
	};
}

@NgModule({
	exports: [
		HttpClientModule,
	],
	providers: [{
		provide: APOLLO_OPTIONS,
		useFactory: createApollo,
		deps: [HttpLink],
	}],
})
export class GraphQLModule {
}
