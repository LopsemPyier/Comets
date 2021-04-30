import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { RouterModule } from '@angular/router';
import { IsLoadingModule } from '@service-work/is-loading';
import { EditorModule } from '../ui/editor/editor.module';

@NgModule({
	declarations: [
		FeatureComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: FeatureComponent },
		]),
		IsLoadingModule,
		EditorModule,
	],
})
export class FeatureModule {
}
