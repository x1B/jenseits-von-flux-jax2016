## Flux - Beispiel

<a href="demos/flux-comparison/yahoo-fluxible/index.html" target="demo">
    <img class="main" width="700" src="slides/03_flux/images/flux-example-introduction.png">
</a>

- https://github.com/voronianski/flux-comparison

<div class="slide-comment">
 - Sammlung von Beispielen von *Dmitri Voronianski:*
   Einfacher Web-Shop, mit Implementierungen in ~15 Flux-Varianten
 - Kurze *Live-Vorstellung* der Funktionalität:
   - *View*: Produktliste links, Warenkorb (Shopping-cart) rechts.
   - *Aktionen*:
     - Bei Klick auf "add to cart" wandern Artikel in den Warenkorb,
       Lagerbestand wird reduziert, Shopping-Cart wird gefüllt,
     - Bei Klick auf "checkout" wird bestellt.
   - *Stores:*
     - Im Hintergrund verwaltet ein Store das Warenlager
     - ein zweiter verwaltet den Inhalt des Einkaufswagen.
 - Wir schauen uns jetzt Details der Implementierung in *Yahoo-Fluxible* an.
     - Fluxible: Mehr Komfort-Funktionen als die Referenz-Implementierung von
       Facebook, ist aber nicht so stark verkürzt wie z.B. Alt.js.
</div>

Note:
- Beispiele von *Dmitri Vorianski*
- *View:* Artikelliste, Warenkorb
- *Aktionen:* Artikel in den Warenkorb legen, Bestellen
- *Stores:* Produktlager, Warenkorb-Inhalt
