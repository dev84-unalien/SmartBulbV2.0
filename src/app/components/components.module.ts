import { NgModule } from '@angular/core';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@NgModule ({
    declarations: [MonComposantComponent],
    exports: [MonComposantComponent],
imports: [
        CommonModule,
        IonicModule,
        IonicModule.forRoot()
    ]
})
export class ComponentsModule {}
