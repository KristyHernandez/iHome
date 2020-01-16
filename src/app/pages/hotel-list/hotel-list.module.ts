import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NewPostPage } from '../new-post/new-post.page';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';

import { HotelListPage } from './hotel-list.page';

const routes: Routes = [
    {
        path: '',
        component: HotelListPage
    }
];

@NgModule({
    entryComponents: [
        NewPostPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
        })
    ],
    declarations: [HotelListPage, NewPostPage, NewPostPage]
})
export class HotelListPageModule { }
