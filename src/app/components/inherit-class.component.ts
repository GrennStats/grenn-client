import {Input, HostBinding} from "@angular/core";

export class InheritClassComponent {
    @Input("class")
    public classList: string;

    /**
     * We override the class of the component here, because we use the passed down classes
     * On the component itself and we dont want to have the classes on the parent and the child
     */
    @HostBinding("class")
    public removeClassFromComponent = "";
}
