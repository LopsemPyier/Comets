import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListItemComponent } from './project-list-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		ProjectListItemComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
	],
	exports: [
		ProjectListItemComponent,
	],
})
export class ProjectListItemModule {
}
