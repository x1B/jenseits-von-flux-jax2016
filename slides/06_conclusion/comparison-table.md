### Fazit?

|            | Flux | Redux | PubSub |
|:-----------|:----:|:-----:|:------:|
| Gerichteter Fluss | + | + | + |
| Boilerplate | - | + | + |
| Zugänglichkeit | + | o | + |
| Snapshot-Fähigkeit *(Undo)* | o | ++ | o |
| Beständigkeit/Flexibilität | - | ? | + |
| Nachrichtenorientiert *(Reaktivität)* | o | + | + |
| Isolation von Fachlichen Bausteinen *(Skalierbarkeit)* | - | o | + |

<p>&nbsp;</p>

<div class="fragment" style="display: flex; justify-content:center; align-items:center">
    <div style="font-size: 1.3em; font-weight: bold;">Redux</div>
    <div><img src="slides/06_conclusion/images/wedding-rings.jpg"
         title="Wedding Rings"
         width="200"></div>
    <div style="font-size: 1.3em; font-weight: bold;">PubSub</div>
</div>




<div class="slide-comment">
- Boilerplate: Flux: Je nach Library viel Magie oder viel Code zusätzlich nötig
- Zugänglichkeit: Redux: funktionale Programmierung und das Reducer-Konzept müssen erlernt werden
- Snapshotfähigkeit (Undo): Flux/PubSub: Theoretisch ist das auch hier möglich, aber es ist Disziplin gefordert
  Was Redux per-se einfordert, muss hier selber beachtet werden
- Beständigkeit/Flexibilit:
  - Flux: Hype um Flux scheint vorbei zu sein
  - Redux: Aktuell ist es sehr populär, aber die Zukunft ist unklar. Viel Unruhe in der JavaScript-Community
  - PubSub: Bewährt und jederzeit mit anderen Ansätzen kombinierbar
- Nachrichtenorientiert (Reaktivität):
  - Flux: je nach Library unterschiedlich. Häufig gibt es nur Callbacks und keine Nachrichten.
    Hier ist eher eine imperative Programmierung zu finden und häufig sind Daten nicht immutable
  - Redux: Nachrichtenzustellung ist in der Regel nicht asynchron
- Isolation:
  - Flux: beispielsweise durch `waitFor` gibt es starke Abhängigkeiten
  - Redux: Abhängigkeiten zwischen Reducern und von Container-Komponenten zur Modellstruktur

- Vorstellbar ist eine Kombination aus verschiedenen Ansätzen
- Inbesondere Redux und PubSub ergänzen sich in vielen Punkten
  - Einzelne, komplexe Komponenten (Widgets) in Redux implementierbar
  - Probleme mit großen Stores in Redux treten dadurch weniger auf
  - Komponenten in PubSub haben ein vorhersehbares Verhalten
  - Dadurch gut wartbare Einzelkomponenten und Skalierbarkeit im Großen
</div>
