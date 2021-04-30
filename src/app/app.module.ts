import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationLayoutModule } from './shared/ui/application-layout/application-layout.module';
import { LayoutModule } from './shared/ui/layout/layout.module';
import { EditorLayoutModule } from './shared/ui/editor-layout/editor-layout.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		LayoutModule,
		ApplicationLayoutModule,
		EditorLayoutModule,
		AppRoutingModule,
		GraphQLModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
