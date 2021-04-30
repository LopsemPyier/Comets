import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { TreeModule } from '../../../editor/ui/tree/tree.module';
import { IconModule } from '../icon/icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		SideBarComponent,
	],
	imports: [
		CommonModule,
		TreeModule,
		IconModule,
		RouterModule,
	],
	exports: [
		SideBarComponent,
	],
})
export class SideBarModule {
}
