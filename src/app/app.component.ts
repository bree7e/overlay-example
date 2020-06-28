import { Component } from "@angular/core";
import { Overlay, OverlayConfig } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  selector: "app-toast",
  template: ` <div>This is a toast message</div> `,
  styles: [
    `
      :host {
        background-color: #fff;
        padding: 8px;
      }
    `,
  ],
})
export class ToastComponent {}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "overlay-example";

  constructor(private overlay: Overlay) {}

  show(): void {
    const config = new OverlayConfig({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
    const overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    overlayRef.attach(new ComponentPortal(ToastComponent));
  }
}
