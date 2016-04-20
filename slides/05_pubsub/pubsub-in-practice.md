## PubSub in der Praxis

![Logo LaxarJS](slides/05_pubsub/images/bulli.svg)

#### Vom Event-Bus zum Framework
http://www.laxarjs.org
  - Komponenten-Konfiguration
  - Lifecycle: *Wann hört jemand meine Events?*
  - Services: *Wohin mit meinem DOM?*
  - Entwicklungswerkzeuge (Event-Log, Kompositionsstruktur)



Note:
 - Will man einfach *nur den Event-Bus* bereitstellen, analog zu stand-alone
   Flux-Dispatchern?
 - Dann muss man aber noch die ganze Topic-Verdrahtung organisieren.
 - Alternative:
   - Bootstrapping der Komponenten orchestrieren
   - Diese direkt mit ihrer Konfiguration ausstatten
   - Event-basierte navigation managen
   - Wiederverwendbare View-Komponenten über Themes
