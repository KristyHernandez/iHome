import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';
import { NewPostPage } from './new-post.page';

const routes: Routes = [
    {
        path: '',
        component: NewPostPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [NewPostPage]
})
export class NewPostPageModule { }
