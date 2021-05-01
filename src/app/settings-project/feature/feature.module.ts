import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsProjectComponent } from './settings-project.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../../shared/ui/input/input.module';
import { IconModule } from '../../shared/ui/icon/icon.module';
import { ButtonModule } from '../../shared/ui/button/button.module';
import { MessageModule } from '../../shared/ui/message/message.module';
import { AuthorItemModule } from '../ui/author-item/author-item.module';
import { IsLoadingModule } from '@service-work/is-loading';
import { TextareaModule } from '../../shared/ui/textarea/textarea.module';

@NgModule({
	declarations: [
		SettingsProjectComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: SettingsProjectComponent },
		]),
		ReactiveFormsModule,
		InputModule,
		IconModule,
		ButtonModule,
		MessageModule,
		AuthorItemModule,
		IsLoadingModule,
		TextareaModule,
	],
})
export class FeatureModule {
}
