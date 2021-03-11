import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'homes',
        children: [
          {
            path: '',
            loadChildren: () => import('../homes/homes.module').then( m => m.HomesPageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/homes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/homes',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
