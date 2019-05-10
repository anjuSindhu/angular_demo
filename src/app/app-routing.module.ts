import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTestsComponent } from './basic-tests/basic-tests.component';
import { PipesTestsComponent } from './pipes-tests/pipes-tests.component';
import { EventBindingTestsComponent } from './event-binding-tests/event-binding-tests.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent} from './image-detail/image-detail.component';

const routes: Routes = [
  { path: 'basicTest', component: BasicTestsComponent },
  { path: 'pipesTest', component: PipesTestsComponent },
  { path: 'eventBindingTest', component: EventBindingTestsComponent },
  { path: 'agGrid', component: AgGridComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
