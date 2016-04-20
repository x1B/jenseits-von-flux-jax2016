## Entkopplung

- vollständige *Entkopplung* einzelner Komponenten
  - Sender kennt Empfänger nicht
  - Empfänger kennt Sender nicht

- Broadcasts von Events über zentralen *Broker*

- Auswahl der Empfänger über *Topics*


Note:
- Sender kümmern sich nicht darum, ob jemand ihre Events empfängt
- Empfänger interessieren sich dafür, ob/wer ihnen Events schickt
- Zustellung von Events für optimale Entkopplung asynchron
