import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { EditPostPage } from './edit-post.page';


import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: EditPostPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [EditPostPage]
})
export class EditPostPageModule { }
