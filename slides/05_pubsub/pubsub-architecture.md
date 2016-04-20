## Architektur mit PubSub

![pub-sub-overview](slides/05_pubsub/images/pub-sub-overview.svg)

- Event-Bus: asynchroner Vermittler (gerichteter Fluß *möglich*)

- *View-Komponenten* wie Flux/Redux (+ Erzeugung von Aktionen)

- *Activity-Komponenten* wie Stores/Reducer (+ asynchrone Folge-Aktionen)


Note:
  - Pub/Sub *als Verallgemeinerung* von Flux:
    - Der Event-Bus *ist* ein Dispatcher, der aber zusätzlich Topic-basiert
      Nachrichten routet.
    - Events haben --wie Aktionen bei Flux-- eine Payload.
    - Der Typ (die Intention) wird über die richtige *Verdrahtung* per
      Topic vorgegeben.

  - Was ist mit den Action Creators?
    - *Intent* wird durch die View-Komponenten definiert.
    - *Verarbeitung* wird in den Activity-Komponenten vorgenommen.

  - Unterscheidung: Messages vs. Events

  - Event-Subscriptions verhalten sich ähnlich zu Observables

  - Für gerichteten Fluss muss man Kollaborationsmuster auf Pub/Sub aufsetzen.
    - *Ressourcen:*
      - werden einfach bei Verfügbarkeit und jeder Änderung publiziert.
    - *Request/Response:*
      - *Request-Event* (View), *Beginn der Verarbeitung* (Activity), *Ende-Event*
    - *Aktionen:*
      - *Request:* Intent+Payload, *Response:* Erfolg/Misserfolg, plus ggf. Ressourcen-Update
