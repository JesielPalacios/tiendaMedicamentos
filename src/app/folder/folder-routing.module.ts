import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { HomePage } from '../screens/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../screens/home/home.module').then(m => m.HomePageModule)
      }
    ]
  },
  // {
  //   path: 'inicio',
  //   component: HomePage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
