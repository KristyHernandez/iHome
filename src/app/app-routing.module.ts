import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule) },
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
    { path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule) },
    { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule) },
    { path: 'hotel-list', loadChildren: () => import('./pages/hotel-list/hotel-list.module').then(m => m.HotelListPageModule) },
    { path: 'hotel-detail/:id', loadChildren: () => import('./pages/hotel-detail/hotel-detail.module').then(m => m.HotelDetailPageModule) },
    { path: 'hotel-checkout/:hotelID/:roomID', loadChildren: () => import('./pages/hotel-checkout/hotel-checkout.module').then(m => m.HotelCheckoutPageModule) },
    { path: 'booking-list', loadChildren: () => import('./pages/booking-list/booking-list.module').then(m => m.BookingListPageModule) },
    { path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesPageModule) },
    { path: 'local-weather', loadChildren: () => import('./pages/local-weather/local-weather.module').then(m => m.LocalWeatherPageModule) },
    { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
    { path: 'support', loadChildren: () => import('./pages/support/support.module').then(m => m.SupportPageModule) },

    { path: 'messages', loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesPageModule) },
    { path: 'upload', loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadPageModule) },


    { path: 'message/:id', loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule) },
    { path: 'rentcar', loadChildren: () => import('./pages/rentcar/rentcar.module').then(m => m.RentcarPageModule) },
    { path: 'cars-list', loadChildren: () => import('./pages/cars-list/cars-list.module').then(m => m.CarsListPageModule) },
    { path: 'car-detail/:id', loadChildren: () => import('./pages/car-detail/car-detail.module').then(m => m.CarDetailPageModule) },
    { path: 'car-checkout/:carshopID/:carID', loadChildren: () => import('./pages/car-checkout/car-checkout.module').then(m => m.CarCheckoutPageModule) },
    { path: 'location', loadChildren: () => import('./pages/modal/location/location.module').then(m => m.LocationPageModule) },
    { path: 'activities', loadChildren: () => import('./pages/activities/activities.module').then(m => m.ActivitiesPageModule) },
    { path: 'activity-list', loadChildren: () => import('./pages/activity-list/activity-list.module').then(m => m.ActivityListPageModule) },
    { path: 'activity-detail/:id', loadChildren: () => import('./pages/activity-detail/activity-detail.module').then(m => m.ActivityDetailPageModule) },
    { path: 'activity-checkout/:tripID', loadChildren: () => import('./pages/activity-checkout/activity-checkout.module').then(m => m.ActivityCheckoutPageModule) },
    {
        path: 'new-post', loadChildren: () => import('./pages/new-post/new-post.module').then(m => m.NewPostPageModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
