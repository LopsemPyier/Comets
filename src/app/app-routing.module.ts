import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'login',
				loadChildren: async () =>
					(await import('./auth')).LoginModule,
			},
			{
				path: 'signup',
				loadChildren: async () =>
					(await import('./auth')).SignupModule,
			},
			{
				path: '',
				loadChildren: async () =>
					(await import('./landing')).HomeModule,
			},
			{
				path: 'terms-of-service',
				loadChildren: async () =>
					(await import('./landing')).TermsModule,
			},
			{
				path: 'download',
				loadChildren: async () =>
					(await import('./landing')).DownloadModule,
			},
			{
				path: 'credits',
				loadChildren: async () =>
					(await import('./landing')).CreditsModule,
			},
			{
				path: 'dashboard',
				loadChildren: async () =>
					(await import('./project')).DashboardModule,
			},
			{
				path: 'projects/new',
				loadChildren: async () =>
					(await import('./project')).AddModule,
			},
			{
				path: 'collection',
				redirectTo: 'collection/playlists',
				pathMatch: 'full'
			}
		],
	},
	// {
	//   path: '',
	//   redirectTo: '',
	//   pathMatch: 'full'
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
