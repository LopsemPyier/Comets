import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
	declarations: [
		LoadingComponent,
	],
	imports: [
		CommonModule,
		IconModule,
	],
	exports: [
		LoadingComponent,
	],
})
export class LoadingModule {
}
