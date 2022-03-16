import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) }, 
{ path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule) }, 
{ path: 'our-gallery', loadChildren: () => import('./our-gallery/our-gallery.module').then(m => m.OurGalleryModule) },
 { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) }, 
 { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
{ path: 'our-attorneys', loadChildren: () => import('./our-attorneys/our-attorneys.module').then(m => m.OurAttorneysModule) },
{ path: 'single-attorneys', loadChildren: () => import('./single-attorneys/single-attorneys.module').then(m => m.SingleAttorneysModule) },
{ path: 'immigration', loadChildren: () => import('./corporate-law/corporate-law.module').then(m => m.CorporateLawModule) },
{ path: 'conveyancing', loadChildren: () => import('./realestate-law/realestate-law.module').then(m => m.RealestateLawModule) },
{ path: 'company-law', loadChildren: () => import('./financial-law/financial-law.module').then(m => m.FinancialLawModule) },
{ path: 'employement-law', loadChildren: () => import('./insurance/insurance.module').then(m => m.InsuranceModule) },
{ path: 'civil-ligitation', loadChildren: () => import('./civil-ligitation/civil-ligitation.module').then(m => m.CivilLigitationModule) },
{ path: 'will-and-probates', loadChildren: () => import('./environment/environment.module').then(m => m.EnvironmentModule) },
{ path: 'family-law', loadChildren: () => import('./family-law/family-law.module').then(m => m.FamilyLawModule) },
{ path: 'criminal-law', loadChildren: () => import('./traffic-accident/traffic-accident.module').then(m => m.TrafficAccidentModule) },
{ path: 'contract-law', loadChildren: () => import('./property-law/property-law.module').then(m => m.PropertyLawModule) },
{ path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
{ path: 'privarcy-policy', loadChildren: () => import('./case/case.module').then(m => m.CaseModule) },
{ path: 'legal', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
