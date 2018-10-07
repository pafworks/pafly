import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent} from './core/layout/comics/comics.component';

const routes: Routes = [
    { path: 'comics', component: ComicsComponent }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]

})

export class AppRoutingModule {}

