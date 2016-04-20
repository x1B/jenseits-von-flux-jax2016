## Flux-Vorteile

*vs. "klassischem" MVC (AngularJS, Backbone)*

- strenge Trennung: Zustand / UI / Verhalten
- jeder Wert wird genau 1x gespeichert
- klarer Datenfluss, gute Testbarkeit
- serverseitiges Rendering leicht umsetzbar

<div class="slide-comment">
   - der *Hauptgewinn* durch Flux ist, das Web-Frontends weniger anfällig für
     *vergessene Aktualisierung* von (abgeleiteten) Zuständen werden, da jeder
     Wert nur einmal (nämlich im zugehörigen Store) gespeichert wird.
   - Stores können *leicht getestet* werden, zumindest solange sie nicht zu stark
     interagieren. Aktionen und Views ebenfalls leicht testbar.
   - Große Stärke: *Serverseitiges Rendering* (unter node.JS, nashorn) ist relativ
     einfach (zustandslose UI-Komponenten rendern, Store-Zustand als JSON auf
     den Client schieben).
</div>

Note:
- vermeidet Stale UI
- server side rendering
