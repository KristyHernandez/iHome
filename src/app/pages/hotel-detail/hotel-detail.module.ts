import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';
// import { NewPostPage } from '../new-post/new-post.page';
import { EditPostPage } from '../edit-post/edit-post.page';

import { HotelDetailPage } from './hotel-detail.page';

const routes: Routes = [
    {
        path: '',
        component: HotelDetailPage
    }
];

@NgModule({
    entryComponents: [
        EditPostPage
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
    declarations: [HotelDetailPage, EditPostPage]
})
export class HotelDetailPageModule { }
export class FormsPage {
    todo = {
        title: '',
        description: ''
    };
    logForm(form) {
        console.log(form.value)
    }
}
