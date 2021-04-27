import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { NodeModule } from '../node/node.module';

@NgModule({
	declarations: [
		TreeComponent,
	],
	imports: [
		CommonModule,
		NodeModule,
	],
	exports: [
		TreeComponent,
	],
})
export class TreeModule {
}
