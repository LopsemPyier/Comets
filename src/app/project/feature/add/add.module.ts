import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../../../shared/input/input.module';
import { ButtonModule } from '../../../shared/button/button.module';
import { MessageModule } from '../../../shared/message/message.module';
import { IsLoadingModule } from '@service-work/is-loading';

@NgModule({
	declarations: [
		AddComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: AddComponent },
		]),
		ReactiveFormsModule,
		InputModule,
		ButtonModule,
		MessageModule,
		IsLoadingModule,
	],
})
export class AddModule {
}
