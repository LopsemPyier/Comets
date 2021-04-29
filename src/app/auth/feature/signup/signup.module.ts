import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/ui/button/button.module';
import { InputModule } from 'src/app/shared/ui/input/input.module';
import { MessageModule } from 'src/app/shared/ui/message/message.module';
import { IsLoadingModule } from '@service-work/is-loading';

@NgModule({
	declarations: [
		SignupComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: SignupComponent },
		]),
		ReactiveFormsModule,
		ButtonModule,
		InputModule,
		MessageModule,
		IsLoadingModule,
	],
})
export class SignupModule {
}
