import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { RouterModule } from '@angular/router';
import { InputModule } from '../../shared/ui/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../shared/ui/button/button.module';
import { IsLoadingModule } from '@service-work/is-loading';
import { MessageModule } from '../../shared/ui/message/message.module';
import { IconModule } from '../../shared/ui/icon/icon.module';
import { AuthorItemModule } from '../ui/author-item/author-item.module';

@NgModule({
	declarations: [
		FeatureComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: FeatureComponent },
		]),
		InputModule,
		ReactiveFormsModule,
		ButtonModule,
		IsLoadingModule,
		MessageModule,
		IconModule,
		AuthorItemModule,
	],
})
export class FeatureModule {
}
