import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { ApplicationLayoutComponent } from './shared/layout/application-layout/application-layout.component';
import { EditorLayoutComponent } from './shared/layout/editor-layout/editor-layout.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';

const routes: Routes = [
	{
		path: 'app',
		component: ApplicationLayoutComponent,
		children: [
			{
				path: 'dashboard',
				loadChildren: async () =>
					(await import('./dashboard')).FeatureModule,
			},
			{
				path: 'settings',
				loadChildren: async () =>
					(await import('./settings')).FeatureModule,
			},
			{
				path: 'new',
				loadChildren: async () =>
					(await import('./new-project')).FeatureModule,
			},
			{
				path: 'project/:id/settings',
				loadChildren: async () =>
					(await import('./settings-project')).FeatureModule,
			},
			{
				path: 'project',
				redirectTo: 'dashboard',
				pathMatch: 'full',
			},
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full',
			},
		],
	},
	{
		path: 'editor',
		component: EditorLayoutComponent,
		children: [
			{
				path: ':id',
				loadChildren: async () =>
					(await import('./editor')).FeatureModule,
			},
		],
	},
	{
		path: 'auth',
		component: AuthLayoutComponent,
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
				path: 'logout',
				loadChildren: async () =>
					(await import('./auth')).LogoutModule,
			},
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full',
			},
		],
	},
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
				path: 'project/:id',
				loadChildren: async () =>
					(await import('./editor')).FeatureModule,
			},
			{
				path: 'project',
				redirectTo: 'dashboard',
				pathMatch: 'full',
			},
			{
				path: 'collection',
				redirectTo: 'collection/playlists',
				pathMatch: 'full',
			},
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
