###  Client-Architektur

## Überfällig!

<img width="800"
     alt="JS Transfer Size Chart"
     src="slides/02_client_architecture/images/js-transfer-chart.svg">

*(Quelle: httparchive.org)*

<p>&nbsp;</p>

- HTTP-Archive: 300% Wachstum in 5 Jahren
- Architektur: Strukturierungswerkzeug **und** Kommunikationsgrundlage




<div class="slide-comment">
- von 100kB auf 400kB JavaScript in 5 Jahren trotz besserer Minifizierung
- Annahme: sprechen hier von weit mehr als 100k Lines of Code
- ohne geeignete Architektur kaum möglich zu Warten oder Erweitern
- Entwicklung durch viele Entwickler oder Entwickler-Teams
- Zeiten sind vorbei, in denen der Webdesigner "was jQuery dazu gepackt hat"
- Grundlage für die Kommunikation notwendig

- Also: Eine Architektur für den Client ist längst überfällig

- ÜBERGANG: Was ist letztendlich das wichtigste Kriterium für Web-Frontends?
</div>


Note:
- JS-Transfer wächst linear trotz besserer Minifizierung
- Typisch >>100k LOC
- Steigende Komplexität
- Vom Bastler zu Frontend-Teams
