import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { IconModule } from '../../../shared/ui/icon/icon.module';
import { ProjectListItemModule } from '../project-list-item/project-list-item.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		ProjectListComponent,
	],
	imports: [
		CommonModule,
		IconModule,
		ProjectListItemModule,
		RouterModule,
	],
	exports: [
		ProjectListComponent,
	],
})
export class ProjectListModule {
}
