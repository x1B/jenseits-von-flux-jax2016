## Redux


<span class="fragment redux-overview-flux-overview">
<span style="position: absolute;">Flux:</span>
![Flux Flow](slides/03_flux/images/flux-overview.svg)
</span>
![Redux Flow](slides/04_redux/images/redux-overview.svg)




<div class="slide-comment">
- Hier sehen wir die Kernkomponenten einer Redux-Anwendung: View, Actions, Store und Reducer
- Um es in dem Kontext von Flux zu betrachten, legen wir das Diagramm von eben nochmal daneben
- Wir betrachten das Diagramm unter den gleichen Vorraussetzungen wie zuvor
  und lassen auch hier das serverseitige Rendern aussen vor

- *View:*
  - Auch hier wird eine reaktive View-Technologie wie React eingesetzt
  - lokale Zustände würden genau wie bei Flux das Pattern brechen
  - wie bei Flux reagiert die View auf Modelländerungen im Store und rendert sich daraufhin neu

  - Aber: Aktionen müssen direkt aus der View heraus generiert und versendet werden
  - denn, wenn wir uns die Aktionen anschauen ...

- *Aktionen:*
  - ... gibt es im Allgemeinen nur reine Funktionen (*Action Creators*), die Aktionen generieren, diese aber nicht versenden
  - hier auch wieder strikter als Flux im Bezug auf Seiteneffekte
  - das Ergebnis eines Action Creators ist immer ein Objekt, das die gewünschte Aktion beschreibt
  - Ausnahmen sind per Middleware möglich
  - Dadurch lassen sich dann auch asynchrone Aktionen abbilden
  - Dazu gleich mehr im praktischen Beispiel
  - Für das Versenden der Aktion ist dann die View zuständig

  - Der Dispatcher entfällt in Redux
  - Stattdessen steht direkt auf dem Store die `dispatch`-Methode zur Verfügung
  - `waitFor` für die Synchronisierung von Stores gibt es hier nicht, daher wäre der Dispatcher trivial

- *Store:*
  - Im Gegensatz zu Flux nur ein Store pro Anwendung
  - Der Store ist generisch und verwaltet einen Objektbaum, der den kompletten Anwendungszustand repräsentiert
  - Initialisiert wird der Store mit einer Root-Reducer Funktion
  - Bei jeder eintreffenden Aktion wird diese mit dem aktuellen Anwendungszustand aufgerufen
  - Ergebnis ist der jetzt gültige, neue Anwendungszustand

  - Anschließend werden alle registrierten Views über die Zustandsänderung informiert

- *Reducer:*
  - Reducer bilden eine hierarchische Struktur die dem Objektbaum des Modells entspricht
  - in der Theorie ein Reducer pro Zweig, aber auch möglich dass ein Reducer für einen ganzen Teilbaum verwendet wird
  - Ergebnis entweder komplett neues Objekt (es darf ja keine Modifikationen geben)
  - ... oder der selbe Zustand wie vorher

- ÜBERGANG: Schauen wir uns das mal im Beispiel an

</div>

Note:
- Stores und Actions gibt es auch
- Dispatcher ist Teil des generischen Stores
- Stattdessen Reducer (Redux = Reduce + Flux)
- Bei Action: Store erzeugt neuen Zustand durch Root Reducer
