import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'camera',
        loadChildren: () => import('../pages/camera/camera.module').then(m => m.CameraPageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('../pages/chats-list/chats.module').then(m => m.ChatsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/chats',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/chats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
