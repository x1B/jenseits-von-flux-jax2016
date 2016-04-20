## Nachteile von Redux

*vs. "Vanilla"-Flux*

- Schutz vor Zustandsmanipulation benötigt
- erhöhte Lernkurve durch funktionales Paradigma
- Container-Komponenten kennen komplettes Datenmodell





<div class="slide-comment">
- Direkte Zustandsmanipulation macht viele Vorteile wieder zu nichte
- Daher ist ein Schutz vor versehentlicher Manipulation oder Disziplin nötig
- Für den Schutz existiert bspw. Immutable.js, das unveränderliche Datenstrukturen erzeugt
- Will man darauf verzichten, kann man auch gut in Tests mit rekursivem `Object.freeze` Eingabedaten vor Manipulation schützen
- Verstößt eine Funktion dagegen, gibt es direkt eine Fehlermeldung

- Das funktionale Paradigma ist nicht kompliziert, aber es ist für viele ungewohnt
- Sie wissen alle noch wie mathematische Funktionen funktionieren,
  aber es ist ungewohnt dies auf die Programmierung zu übertragen
- Die mentale Hürde und das Neue sind hier das größte Problem

- Container-Komponenten erhalten immer das komplette Datenmodell per `connect`
- Für ihre Darstellungskomponenten müssen sie also die Modellstruktur kennen, um die jeweiligen Daten weiterzureichen
- Änderungen oben an Modellstruktur haben potenziell Auswirkung auf verschachtelte Container-Komponenten
</div>

Note:
1. Verwendung von Immutable.js o.ä., Disziplin
2. Nicht schwer, aber Umdenken nötig
3. Änderungen haben bei allen Konsequenzen
