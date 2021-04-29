import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { NodeModule } from '../node/node.module';
import { IconModule } from '../../../shared/ui/icon/icon.module';

@NgModule({
	declarations: [
		TreeComponent,
	],
	imports: [
		CommonModule,
		NodeModule,
		IconModule,
	],
	exports: [
		TreeComponent,
	],
})
export class TreeModule {
}
