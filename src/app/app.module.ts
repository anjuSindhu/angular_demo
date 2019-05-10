import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplePipe } from './pipes-tests/simple.pipe';
import { BasicTestsComponent } from './basic-tests/basic-tests.component';
import { PipesTestsComponent } from './pipes-tests/pipes-tests.component';
import { EventBindingTestsComponent } from './event-binding-tests/event-binding-tests.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AlertModule } from 'ngx-bootstrap';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageService } from './shared/image.service';
import { FilterPipe } from './shared/filter.pipe';
import { RouterModule } from '@angular/router';
import 'ag-grid-community';

@NgModule({
  declarations: [
    AppComponent,
    SimplePipe,
    BasicTestsComponent,
    PipesTestsComponent,
    EventBindingTestsComponent,
    AgGridComponent,
    GalleryComponent,
    ImageDetailComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents(null),
    AlertModule.forRoot(),
  ],
  providers: [ImageService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
