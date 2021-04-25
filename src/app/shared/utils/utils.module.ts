import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithLoadingPipe } from './pipe/with-loading.pipe';


@NgModule({
	declarations: [
		WithLoadingPipe
	],
	exports: [
		WithLoadingPipe
	],
	imports: [
		CommonModule
	]
})
export class UtilsModule {
}
