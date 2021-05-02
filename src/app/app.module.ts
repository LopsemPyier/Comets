import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationLayoutModule } from './shared/layout/application-layout/application-layout.module';
import { LayoutModule } from './shared/layout/layout/layout.module';
import { EditorLayoutModule } from './shared/layout/editor-layout/editor-layout.module';
import { AuthLayoutModule } from './shared/layout/auth-layout/auth-layout.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		LayoutModule,
		ApplicationLayoutModule,
		EditorLayoutModule,
		AuthLayoutModule,
		AppRoutingModule,
		GraphQLModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
