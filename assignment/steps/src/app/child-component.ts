import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-child',
    template:`
        <button (click)=handleSubmitProp()>Send Property</button>
    `
})

export class ChildComp{
    @Output() propertiesEvent=new EventEmitter<{prop1:string,prop2:number}>();

    handleSubmitProp(){
        const prop1='Ashish';
        const prop2=24;
        this.propertiesEvent.emit({prop1,prop2})
    }
}