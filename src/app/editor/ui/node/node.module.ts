import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';
import { IconModule } from '../../../shared/ui/icon/icon.module';

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
