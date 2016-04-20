## Reaktives Manifest

### Grundwerte einer Architektur

![Reaktives Manifest](slides/02_client_architecture/images/reactive-traits.svg)

*http://www.reactivemanifesto.org*




<div class="slide-comment">
- Ergebnis: Reaktives Manifest
- Geschrieben auf Grund der sich verändernden Anforderungen an Software (Juli 2013)
- u.a. von Roland Kuhn (Akka Technical Lead, ehemals Typesafe, jetzt Lightbend)
- Bietet Vokabular um über reaktive Systeme zu sprechen
- Im Frontend muss man die Begriffe aber oft anders interpretieren

- *Responsive* ist die Zielgröße, da diese letztenendes über Nutzen und Benutzbarkeit entscheidet
- Auch Fehlverhalten soll hier schnell erkannt und behandelt werden
- Wie kommen wir da hin?

- *Elastisch*: System muss mit verschiedenen Lastszenarien umgehen können
- eigentlich Skalierbarkeit unter Last, Arbeit auf Subsysteme verteilen
- Im Frontend:
  - Hier Skalierbarkeit der Entwicklung angesichts der Software-Komplexität
  - Frage stellen: Wie kann man die Software in einzelne, unabhängige Komponenten zerlegen?
  - Ziele: parallele, unabhängige Entwicklung, Wartbarkeit und Vorhersagbarkeit

- *Widerstandsfähig*: System muss im Fehlerfall responsive bleiben
- Ermöglicht bspw. durch Replikation und Isolation
- Wenn eine Komponente ausfällt, wirkt sich das nicht negativ auf andere aus.
- Außerdem kann andere Instanz durch Delegation übernehmen
- Im Frontend:
  - Fehler bei Backendkommunikation sinnvoll behandeln
  - Robuste UI-Komponenten

- *Asynchrone Nachrichtengetriebene Kommunikation* ist das Fundament
- Dadurch wird eine Trennung zwischen den Kompoenten geschaffen für Isolation, Loses Kopplung und Ortsunabhängigkeit
- Delegation von Fehlern möglich
- Außerdem eine Lastkontrolle möglich
- Überlastete Komponenten können darum bitten die Last zu veringern, um Fehler und Nachrichtenverlust zu vermeiden (Back-Pressure)
- Im Frontend / Entwicklung:
  - Testbarkeit
  - Abläufe nachvollziehbar (event sourcing)

ÜBERGANG: Betrachten wir einmal genauer den Aspekt der Skalierbarkeit auf dem Client
</div>

Note:
- Responsiveness ist Zielgröße
- Fundament Nachrichtengetr.
- Im Frontend:
  - skalierbar Entwicklung bzgl Komplexität
  - Robustheit, UI-Konsistenz
  - Asynchrone Kommunikation, Entkopplung, Testbarkeit
