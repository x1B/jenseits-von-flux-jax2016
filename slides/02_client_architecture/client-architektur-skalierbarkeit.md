### Client-Architektur

## Skalierbarkeit

<img width="1000"
     alt="Skalierbare Produktion"
     src="slides/02_client_architecture/images/scalable-production.jpg">




<div class="slide-comment">
- Im Frontend:
  - Nicht primär Skalierbarkeit angesichts Last, sondern angesichts Komplexität.
  - Isolierte Entwicklung von Komponenten, so wie hier Karosserie und Fahrgestell getrennt entwickelt werden
  - Parallele Entwicklung wird dadurch ermöglicht
  - Parallelität unter mehreren Aspekten
    - mit mehreren Teams
    - mit unterschiedlichen Rahmenbedingungen bzgl. Know-how, Technologien ("polyglott"-Ansätze), heterogenität
    - mit unterschiedlichen angebundenen Systemen und Geschäftsprozessen
    - Legacy-Altlasten isoliert adaptieren

- ÜBERGANG: Was könnte also die Basis einer solchen skalierbaren Client-Architektur sein?
</div>

Note:

- nicht Last, sondern Komplexität
- Isolation von Komponenten
- Parallele Entwicklung (mehrere Teams, Technologien, APIs)
