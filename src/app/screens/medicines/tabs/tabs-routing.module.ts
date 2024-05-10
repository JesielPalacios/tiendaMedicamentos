import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    // path: 'tabs',
    path: '',
    component: TabsPage,
    children: [
      {
        // path: 'tab1',
        // path: 'A',
        path: 'genericos',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        // path: 'tab2',
        // path: 'B',
        path: 'de-marca',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        // path: 'tab3',
        // path: 'C',
        path: 'costosos',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      // {
      //   path: 'genericos/:id',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../tab1/view-message/view-message.module').then(m => m.ViewMessagePageModule)
      //     }
      //   ]
      // },  
      {
        path: '',
        // redirectTo: '/tabs/tab1',
        // redirectTo: '/medicamentos/A',
      redirectTo: 'genericos',
      pathMatch: 'full'
    }
    ]
  },
  {
    path: '',
    // redirectTo: '/tabs/tab1',
    // redirectTo: '/medicamentos/A',
    redirectTo: 'genericos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
