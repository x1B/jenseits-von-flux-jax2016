## Es war einmal ...

<img width="800"
     alt="Message Notification Icon Bug"
     src="slides/03_flux/images/facebook-message-notification.png">


<img width="800"
     class="fragment"
     alt="Really sad Zuckerberg"
     src="slides/03_flux/images/mark-zuckerberg-sad-fix-chat.jpg">

- inkonsistentes UI bei Facebook

<div class="slide-comment">
 - Wo kommt das Interesse an Flux und ähnlichen Technologien eigentlich her?
    - Den Erzählungen nach fing alles beim "Ungelesene Nachrichten"-Icon von Facebook an.
    - Hier hat das Frontend-Team wochenlang damit gekämpft, den Zustand des Icons oben
      mit dem des Chatfensters unten konsistent zu halten.
    - Als das Facebook-Team die Nutzer nach Verbesserungswünschen an der Plattform
      fragte, war die einhellige Antwort "Fix Chat"!
 - Hintergrund:
    - Zustände waren verteilt in den React-View-Komponenten.
    - Hier hat es also ein Architekturproblem ganz oben auf die Wunschliste
      der End-User geschafft.
 - Entsprechend groß war die Bereitschaft zu radikalen Änderungen.
</div>



Note:
- Message-Counter nicht synchron mit Messagebox
- Eventuell React Schuld an Inkonsistenzen.
  Datenmodell redundant in verschiedenen React-Komponenten verteilt.
