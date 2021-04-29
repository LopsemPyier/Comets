import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';
import { IconModule } from '../../../shared/ui/icon/icon.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		NodeComponent,
	],
	imports: [
		CommonModule,
		IconModule,
		FormsModule,
	],
	exports: [
		NodeComponent,
	],
})
export class NodeModule {
}
