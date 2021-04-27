import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';
import { IconModule } from '../../../shared/icon/icon.module';

@NgModule({
	declarations: [
		NodeComponent,
	],
	imports: [
		CommonModule,
		IconModule,
	],
	exports: [
		NodeComponent,
	],
})
export class NodeModule {
}
