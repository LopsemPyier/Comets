import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';

@NgModule({
	declarations: [
		NodeComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		NodeComponent,
	],
})
export class NodeModule {
}
