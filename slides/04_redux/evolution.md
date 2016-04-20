### Redux

## Die Evolution

### `(Zustand, Aktion) → Zustand`




<div class="slide-comment">
- Mit Flux hat Facebook eine Art Bewegung des unidirectional Flow gestartet
- Das hat viele andere inspiriert, wie eben gehört
- Dazu gehört auch Redux, was inspiriert ist von Flux und Elm
- Elm ist eine durch Haskell inspirierte funktionale Sprache für Web-Frontends
- Auf diese wollen wir hier aber nicht weiter eingehen

- Grundlage von Redux ist die reduce Funktion, deren Signatur wir hier sehen (Name: Flux + Reduce)
- Ausgehend von einem Startzustand werden die Reducer auf Basis von Aktionen immer wieder angewendet
- Dadurch entsteht eine Kette von Zustandsübergängen
- Wichtig ist: jeder Zustand ist immutable
- Durch Startzustand und Aktionsprotokoll ist jeder beliebige, alte Zustand wiederherstellbar

- ÜBERGANG: Schauen wir uns wie eben bei Flux den Lebenszyklus einer Anwendung grafisch an
</div>

Note:
- inspiriert durch Flux und Elm
- Grundlage: reduce Funktion
- jede Änderung ist Zustandsübergang
- Zustand selbst Immutable
- Aktionsprotokoll: jeder Zustand wiederherstellbar
