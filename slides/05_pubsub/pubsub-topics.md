### Architektur mit PubSub

## Topics

![pub-sub-topics](slides/05_pubsub/images/pub-sub-topics.svg)

- Events für Ressourcen (Zustände) und Aktionen (Änderungen)

- konfigurative Zusammenstellung der Komponenten


Note:
 - unterschiedliche *Topics schotten Komponenten ab*, anders als bei Flux-
   Singletons können so beliebig viele *Namensräume* definiert werden.
 - gemeinsame *Topics verbinden Komponenten*. Geschieht dies ausschließlich per
   *Konfiguration*, werden die Kommunikationswege statisch inspizierbar.
 - Im Gegensatz zu hart-kodierten Flux-Aktionstypen können Topics
   *zur Konfigurationszeit* vergeben werden.
 - De facto können so beliebig *viele fachliche Anwendungen* auf einer Seite
   *isoliert voneinander koexistieren,* aber bei Bedarf leicht die
   Kommunikation miteinander aufnehmen.
