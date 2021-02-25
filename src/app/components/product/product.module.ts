import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    declarations: [ProductComponent]
})
export class ProductModule { }
