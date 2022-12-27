import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { HeadUserComponent } from './components/head-user/head-user.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';




@NgModule({
  declarations: [
    // OrderListPipe,
    // ImgBrokenDirective
    MediaPlayerComponent,
    CardPlayerComponent,
    HeadUserComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
     MediaPlayerComponent,
     HeadUserComponent,
     CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
     PlayListBodyComponent,
    // OrderListPipe,
    // ImgBrokenDirective
  ]
})
export class SharedModule { }
