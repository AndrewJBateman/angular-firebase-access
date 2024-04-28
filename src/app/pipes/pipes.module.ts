// module required so date pipe can be used by more than one page
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DateConvertPipe } from "./date-convert.pipe";
import { ReadTimePipe } from "./read-time.pipe";

@NgModule({
    imports: [CommonModule, DateConvertPipe, ReadTimePipe],
    exports: [DateConvertPipe, ReadTimePipe],
})
export class PipesModule {}
