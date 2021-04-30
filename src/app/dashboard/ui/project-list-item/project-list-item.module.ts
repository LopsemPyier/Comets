import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListItemComponent } from './project-list-item.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '../../../shared/ui/icon/icon.module';

@NgModule({
	declarations: [
		ProjectListItemComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		IconModule,
	],
	exports: [
		ProjectListItemComponent,
	],
})
export class ProjectListItemModule {
}
