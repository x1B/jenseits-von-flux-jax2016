## Vorteile von Redux

*vs. "Vanilla"-Flux*

- Snapshot-/Replay-Fähigkeit
- funktionale Komposition
- Performancegewinn





<div class="slide-comment">
- Im Prinzip haben wir eine Sequenz von Aktionen, die durch Reducer fließen
- Merken wir uns den Startzustand und die Aktionen, so können wir jeden beliebigen Zustand wiederherstellen
- Konsequenzen:
  - jede Aktion kann rückgängig gemacht werden
  - im Fehlerfall können wir genau die Aktion heraussuchen, die den Fehler verursacht hat
  - Die Veränderung des Anwendungszustands ist genau nachvollziehbar

- Die Logik ist aus einzelnen reinen Funktionen zusammengesetzt
- Es ist offensichtlich, dass die Fachlogik dadurch sehr gut testbar ist    
  - wir haben keine Seiteneffekte und keine Abhängigkeiten zu APIs die wir mocken müssten
  - Tests beschränken sich auf Definition von Eingabe und zu erwartender Ausgabe
- Dazu erlauben sie ein Hot Code Reloading direkt im Browser
  - Tauschen Implementierung aus und spielen wieder alle bisherigen Aktionen ab
  - Neuer Zustand wurde dann mit Hilfe der neuen Implementierung hergestellt

- zu guter letzt gibt es einen Performancegewinn, da kein manuelles Dirty-Checking in tiefen Strukturen erfolgen muss
- Vergleich der Objektidentität reicht aus
- Wenn sich ein Knoten nicht ändert, muss auch darunter nicht geprüft werden
</div>

Note:
1. Nur initialer Zustand und Aktionsfolge benötigt
2. Reine Funktionen:
    - Reducer sehr leicht testbar
    - Hot code reloading
3. kostenloser Dirty-Check über Objektidentität
