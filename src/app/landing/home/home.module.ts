import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'src/app/shared/ui/button/button.module';
import { IconModule } from 'src/app/shared/ui/icon/icon.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../shared/ui/header/header.module';
import { FooterModule } from '../../shared/ui/footer/footer.module';

@NgModule({
	declarations: [
		HomeComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: HomeComponent },
		]),
		ButtonModule,
		IconModule,
		HeaderModule,
		FooterModule,
	],
})
export class HomeModule {
}
