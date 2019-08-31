import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		DashboardRoutingModule,
		FormsModule,
		CommonModule,
		FlexLayoutModule,
	],
	providers: [],
	bootstrap: [DashboardComponent]
})
export class DashboardModule {
}
