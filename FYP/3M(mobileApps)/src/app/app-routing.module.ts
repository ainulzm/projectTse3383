import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'homes',
    loadChildren: () => import('./homes/homes.module').then( m => m.HomesPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'kl',
    loadChildren: () => import('./kl/kl.module').then( m => m.KlPageModule)
  },
  {
    path: 'selangor',
    loadChildren: () => import('./selangor/selangor.module').then( m => m.SelangorPageModule)
  },
  {
    path: 'kelantan',
    loadChildren: () => import('./kelantan/kelantan.module').then( m => m.KelantanPageModule)
  },
  {
    path: 'kedah',
    loadChildren: () => import('./kedah/kedah.module').then( m => m.KedahPageModule)
  },
  {
    path: 'melaka',
    loadChildren: () => import('./melaka/melaka.module').then( m => m.MelakaPageModule)
  },
  {
    path: 'pahang',
    loadChildren: () => import('./pahang/pahang.module').then( m => m.PahangPageModule)
  },
  {
    path: 'perlis',
    loadChildren: () => import('./perlis/perlis.module').then( m => m.PerlisPageModule)
  },
  {
    path: 'perak',
    loadChildren: () => import('./perak/perak.module').then( m => m.PerakPageModule)
  },
  {
    path: 'johor',
    loadChildren: () => import('./johor/johor.module').then( m => m.JohorPageModule)
  },
  {
    path: 'sabah',
    loadChildren: () => import('./sabah/sabah.module').then( m => m.SabahPageModule)
  },
  {
    path: 'sarawak',
    loadChildren: () => import('./sarawak/sarawak.module').then( m => m.SarawakPageModule)
  },
  {
    path: 'nsembilan',
    loadChildren: () => import('./nsembilan/nsembilan.module').then( m => m.NsembilanPageModule)
  },
  {
    path: 'terengganu',
    loadChildren: () => import('./terengganu/terengganu.module').then( m => m.TerengganuPageModule)
  },
  {
    path: 'penang',
    loadChildren: () => import('./penang/penang.module').then( m => m.PenangPageModule)
  },
  {
    path: 'breakfast',
    loadChildren: () => import('./breakfast/breakfast.module').then( m => m.BreakfastPageModule)
  },
  {
    path: 'lunch',
    loadChildren: () => import('./lunch/lunch.module').then( m => m.LunchPageModule)
  },
  {
    path: 'dinner',
    loadChildren: () => import('./dinner/dinner.module').then( m => m.DinnerPageModule)
  },
  {
    path: 'dessert',
    loadChildren: () => import('./dessert/dessert.module').then( m => m.DessertPageModule)
  },
  {
    path: 'kuih',
    loadChildren: () => import('./kuih/kuih.module').then( m => m.KuihPageModule)
  },
  {
    path: 'diet',
    loadChildren: () => import('./diet/diet.module').then( m => m.DietPageModule)
  },
  {
    path: 'cili',
    loadChildren: () => import('./cili/cili.module').then( m => m.CiliPageModule)
  },
  {
    path: 'kerang',
    loadChildren: () => import('./kerang/kerang.module').then( m => m.KerangPageModule)
  },
  {
    path: 'dapur',
    loadChildren: () => import('./dapur/dapur.module').then( m => m.DapurPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
