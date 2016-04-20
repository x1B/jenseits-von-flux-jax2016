## Flux-Nachteile

*vs. "klassischem" MVC (AngularJS, Backbone)*

- jeder Store sieht potentiell alle Aktionen
- harte Abhängigkeiten zwischen Stores
- Stores sind (konzeptionell) Singletons
- *Antipattern:* Veränderliche Zustände in Aktionen


<div class="slide-comment">
  - nicht offensichtlich, welche Stores durch eine Aktion betroffen sind.
  - Stores kennen gegenseitig ihre APIs (getStore) und ihre interne Fachlogik
    (waitFor).
    Mit waitFor sind Deadlocks möglich, ohne waitFor kann es implizite
    Abhängigkeiten geben (ähnlich zu Race Conditions).
  - Singletons: Re-Use innerhalb eines Screens schwierig. Einkaufswagen No 2?
  - *Mutable State in Actions:* Durch Disziplin / Bibliotheken wie Immutable.JS
    vermieden werden.
  - *Lokale, transiente Zustände:* Wie wird z.B. ein unvollständig ausgefülltes
    Formular gehandhabt? Oder Drag/Drop?
</div>

Note:
- Minus:
   - (1) Verfolgung von Seiteneffekten nur per Implementierung
   - (2) eingeschränkte Wiederverwendbarkeit durch mangelnde Kapselung
   - (3) Singletons: Nicht wirklich Singletons, wg. Serverside rendering
   - (4) Mutable-State in Aktionen: Disziplin!
