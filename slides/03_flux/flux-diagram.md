## Flux

<img class="main" src="slides/03_flux/images/flux-overview.svg" title="Flux Überblick" />

<div class="slide-comment">
 - Flux ist ein Architekturmuster, keine Software

 - Das Ergebnis der vorgenommenen Architektur-Überholung heißt *Flux*.
 - Das Kernprinzip: *unidirektionaler Datenfluss* -- nicht direkt eine
   Flux-Erfindung, aber hier wurde das Prinzip populär gemacht.
 - *Vorbemerkung*:
   - Nehmen wir erstmal an, all dies laufe im *Web-Browser* ab!
   - Der Server liefert den *JavaScript-Code*, CSS und Bilder, und dient ab
     jetzt "nur" als Anbieter von *APIs, zum Beispiel über REST*.
   - Das *Thema 'universal javascript'* (bzw. 'serverseitiges rendering') spielt
     hier erstmal keine Rolle.

 - *Wie funktioniert Flux:*

 - *View*
   - Die *View* ist ein *Kompositum von JavaScript-Komponenten*, die im Kontext
     von Flux *meist mit React* erstellt werden, und HTML-DOM erzeugen.
     Auch andere Technologien (z.B. virtualdom, AngularJS 1/2) sind denkbar.
   - View: Essentiell ist, dass die Komponenten *keine lokalen Zustände* haben,
     sondern sich immer vollständig aus einem von außen empfangenen
     Anwendungszustand ergeben.
   - *Virtual-Dom-Technologien* wie React eignen sich daher besonders für Flux,
     weil ihr Konzept auf vollständiger Aktualisierung bei jeder Änderung
     basiert.
   - View: Am Beispiel von Facebook und den Chat-Nachrichten heißt das, dass
     der "gelesen"-Zustand jeder Nachricht genau einmal gespeichert wird.

 - Aktionen und *Action Builder*:
   - Eine Änderung des Anwendungszustands geschieht nie direkt aus der View,
     sondern immer über eine Aktion, die erst noch interpretiert werden muss.
   - Action-Builder haben die Aufgabe, auf eine Benutzer-Interaktion die
     richtigen Aktionen mit den zugehörigen Parametern zu erzeugen. Dazu führen
     sie ggf. zunächst *externe API-Requests* durch, um dann asynchron weitere
     Aktionen anzustoßen.
   - Damit haben Action-Builder auch die Verantwortung für *Validierung*,
     entweder auf Geheiß der angesprochenen APIs, oder lokal.
   - Die Service-Entsprechung zu diesem Ansatz:
     *Command/Query-Responsibility-Segregation.*
   - Die Action-Builder übergeben die erzeugten *Action-Objekte* (Aktionsname,
     plus Nutzdaten) dann an den *Dispatcher*.

  - Der *Dispatcher*:
    - Der Dispatcher ist einfach nur ein *Verteiler* für Aktionen.
    - Stores können sich hier anmelden, und bei jeder Aktion werden alle Stores
      reihum informiert.

  - Die *Stores*:
    - Stores führen tatsächlich Änderungen am lokalen Datenmodell durch.
    - Jeder Store ist verantwortlich für seinen eigenen Bereich der Daten.
    - Jeder Store sieht *alle Aktionen.*
    - Normalerweise gibt es auf einer Seite jeden Store genau einmal:
      Ursprünglich waren die *Stores* Singletons, das wurde nur wegen
      Server-Side rendering geändert.
    - Stores kennen sich gegenseitig.
    - Danach werden die angeschlossenen View-Komponenten *benachrichtigt.*
    - Die Stores erlauben es den View-Komponenten (aber auch den
      Action-Buildern) außerdem, *Anfragen* an ihre Daten zu stellen.
</div>
<div class="slide-comment">
 - *Eine* Variante von *unidirektionalem Datenfluss.*, *Umgebung: Web-Browser*
 - *View:* Klassische View, aber ohne lokale Zustände. Meist *React/v-dom*
 - *Actions Builders:* validieren, erzeugen *actions* (Command-Beschreibungen)
 - *Dispatcher:* übergibt alle Aktionen an alle Stores
 - *Stores:* wenden Aktionen auf Daten an, benachrichtigen,
   bedienen Anfragen/Sichten
</div>
