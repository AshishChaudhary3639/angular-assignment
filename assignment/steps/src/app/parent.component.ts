import { Component } from "@angular/core";

@Component({
    selector:'app-parent',
    template:`
        <app-child (propertiesEvent)="handleClick($event)"></app-child>
        
    `
})

export class ParentComp{
    
    handleClick(properties:{prop1:string,prop2:number}){
        console.log(properties)
    }
}