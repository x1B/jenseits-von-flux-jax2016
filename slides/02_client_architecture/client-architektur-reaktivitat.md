### Client-Architektur

## Reaktivität - Responsiveness

- ständige bidirektionale Kommunikation mit Server
- Synchronisation über Sessiongrenzen
- sofortiges Feedback

<p>&nbsp;</p>

*http://www.reactivemanifesto.org*



<div class="slide-comment">
- wie bereits gesagt, nicht mehr nur partial DOM Updates vom Server
- stattdessen Kommunikation quasi in Echtzeit
- Client sendet bspw. Nutzereingaben und Logs direkt an den Server
- Server informiert über neue Daten oder Ereignisse

- Dazu soll alles über Sessiongrenzen hinweg funktionieren
- Was bedeutet das?
- Beispiel Facebook: Wenn Nachricht in einem Browser verschickt wird soll sie auch direkt in anderem (bspw. mobilen) sichtbar sein

- Zu guter letzt sind die Erwartungen der Benutzer andere geworden
- Alles soll instantan passieren
- bspw. Suche soll direkt beim Tippen Vorschläge machen
  ertappe mich selber dabei, wie ich bei alten Seiten manchmal vergeblich warte
- Kommunikation mit Servern muss unsichtbar bleiben
- -> weg von Sicherheitsabfragen zu Rollback (bspw. Googlemail E-Mail löschen)

- ÜBERGANG: Was ist ein wichtiges Kriterium aus Entwicklersicht?
</div>

Note:
1. Echtzeitkommunikation: Client sendet, Server sendet
2. Seite auf PC und Mobiltelefon offen
3. Suchfelder, unsichtbare Kommunikation, Rollback
