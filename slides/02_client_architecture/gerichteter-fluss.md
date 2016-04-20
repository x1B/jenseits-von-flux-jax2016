### Client-Architektur

## Gerichteter Datenfluss

<img width="800"
     alt="Gerichteter Datenfluss"
     src="slides/02_client_architecture/images/gerichteter-fluss.svg">





<div class="slide-comment">
- Auf dem Client hat sich ein einfaches Modell als Grundlage etabliert
- Facebook hat dieses mit Flux in den Fokus gebracht
- Prinzipiell nichts anderes als "alte" formularbasierte Webanwendungen (kennen wir seit 20 Jahren)
  - Server rendert HTML von aktuellem Zustand (aus Datenbank)
  - Benutzer füllt Formular aus und schickt es an den Server
  - Server führt Aktionen aus und aktualisiert Datenmodell
  - Server rendert neues HTML

- Client: Nur möglich durch virtuelles DOM (z.B. React), da eine vollständige Aktualisierung der View jetzt möglich ist.
- Wie bei dem Formular-Modell wird einfach immer alles gerendert
- DOM-Update kann als Funktion mit Zustand als Eingabe und DOM als Ausgabe betrachtet werden
- Wichtig: Die Gegenrichtung ist jeweils ausgeschlossen

- ÜBERGANG: Schauen wir uns nach der theoretischen Betrachtung jetzt praktische Umsetzungen dieses Modells an
</div>


Note:
- Grundlage für reaktive Frontendansätze
- schon lange bekannt in "normalen" Formularen
- ermöglicht durch virtuelles DOM (React)
- Gegenrichtung ausgeschlossen
