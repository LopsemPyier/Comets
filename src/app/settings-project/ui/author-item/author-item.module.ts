import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorItemComponent } from './author-item.component';
import { IconModule } from '../../../shared/ui/icon/icon.module';

@NgModule({
	declarations: [
		AuthorItemComponent,
	],
	imports: [
		CommonModule,
		IconModule,
	],
	exports: [
		AuthorItemComponent,
	],
})
export class AuthorItemModule {
}
