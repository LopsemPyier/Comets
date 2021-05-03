import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { IconModule } from '../../../shared/ui/icon/icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		ProjectListComponent,
	],
	imports: [
		CommonModule,
		IconModule,
		RouterModule,
	],
	exports: [
		ProjectListComponent,
	],
})
export class ProjectListModule {
}
