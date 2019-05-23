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
import { jqxBarGaugeModule } from 'jqwidgets-ng/jqxbargauge';
import { jqxPivotGridModule  } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxPivotDesignerModule } from 'jqwidgets-ng/jqxpivotdesigner';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban';
import { JqxPivotgridComponent } from './jqx-pivotgrid/jqx-pivotgrid.component';
import { JqxBarguageComponent } from './jqx-barguage/jqx-barguage.component';
import { KanbanComponent } from './kanban/kanban.component';

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
    JqxPivotgridComponent,
    JqxBarguageComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    jqxBarGaugeModule,
    jqxPivotGridModule,
    jqxPivotDesignerModule,
    jqxKanbanModule,
    AgGridModule.withComponents(null),
    AlertModule.forRoot(),
  ],
  providers: [ImageService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
