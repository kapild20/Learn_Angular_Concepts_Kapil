import "./polyfills";

import { enableProdMode, NgZone } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { asyncTrace } from "async-tracker";

const asyncTraceZone: NgZone = asyncTrace
  .setUp({
    apiKey: "4178c22f-83cf-47e7-8ab5-a6ac22b8158d",
    userInfo: {
      email: "demo@puila.com"
    }
  })
  .getAsyncTraceZone();

platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: asyncTraceZone })
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window["ngRef"]) {
      window["ngRef"].destroy();
    }
    window["ngRef"] = ref;

    // Otherwise, log the boot error
  })
  .catch(err => console.error(err));
