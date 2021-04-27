import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { RouterModule } from '@angular/router';
import { NodeModule } from '../ui/node/node.module';
import { TreeModule } from '../ui/tree/tree.module';
import { IsLoadingModule } from '@service-work/is-loading';

@NgModule({
	declarations: [
		FeatureComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: FeatureComponent },
		]),
		NodeModule,
		TreeModule,
		IsLoadingModule,
	],
})
export class FeatureModule {
}
