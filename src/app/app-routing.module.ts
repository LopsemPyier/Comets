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
      // {
      //   path: '',
      //   loadChildren: async () =>
      //     (await import('@comets/client/home')).HomeModule,
      // },
      // {
      //   path: 'terms-of-service',
      //   loadChildren: async () =>
      //     (await import('@comets/client/terms-of-service'))
      //       .TermsOfServiceModule,
      // },
      // {
      //   path: 'download',
      //   loadChildren: async () =>
      //     (await import('@comets/client/download')).DownloadModule,
      // },
      // {
      //   path: 'contact',
      //   loadChildren: async () =>
      //     (await import('@comets/client/contact')).ContactModule,
      // },
      // {
      //   path: 'collection',
      //   redirectTo: 'collection/playlists',
      //   pathMatch: 'full'
      // }
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
export class AppRoutingModule { }
