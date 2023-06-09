# SIMON SAYS




**TRACCIA**
Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
 Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Mostriamo il countdown dei 30 secondi in pagina
Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt

<br>
<br>
<br>


**SVOLGIMENTO DELLA TRACCIA**

- Creo il markup statico 
- Creo una tendina con la scelta della difficoltà (la quantità di numeri varia in base alla difficoltà selezionata)
- Recupero gli elementi dal DOM
- Creo un funzione che mi genera numeri casuali da un minimo ad un massimo prestabiliti 
**AL CLICK** di un bottone 
- Recuperola difficoltà selezionata
- Genero tramite la funzione i numeri 
- Creo un contatore che parte da 30 e diminuisce di 1 ogni secondo
 **SE** il contatore arriva a zero 
  - Faccio scomparire i numeri 
  - Stampo in pagina un messaggio 
  - Faccio apparire 5 input con un bottone
**AL CLICK** del bottone
- Recupero i value degli input
- Controllo che siano nell'array delle risposte giuste
    **SE** tutte le risposte sono giuste 
        - Stampo in pagina un messaggio di vittoria 
    **ALTRIMENTI** 
        - Stampo in pagina un messaggio con il numero della risposte giuste.   

 