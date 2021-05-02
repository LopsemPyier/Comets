import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorLayoutComponent } from './editor-layout.component';
import { SideBarModule } from '../../ui/side-bar/side-bar.module';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../../ui/loading/loading.module';
import { IsLoadingModule } from '@service-work/is-loading';

@NgModule({
	declarations: [
		EditorLayoutComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		SideBarModule,
		LoadingModule,
		IsLoadingModule,
	],
	exports: [
		EditorLayoutComponent,
	],
})
export class EditorLayoutModule {
}
