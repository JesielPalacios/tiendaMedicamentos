import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page, 
    // loadChildren: () => import('./tab1.module').then( m => m.Tab1PageModule),
    // children: [
    //     {
    //     path: 'genericos/:id',
    //     children: [
    //       {
    //         path: '',
    //         loadChildren: () =>
    //           import('./view-message/view-message.module').then(m => m.ViewMessagePageModule)
    //       }
    //     ]
    //   },  
    //   {
    //     path: '',
    //     redirectTo: 'genericos',
    //     pathMatch: 'full'
    //   }
    // ]
  },
  {
    path: ':id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'genericos',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
