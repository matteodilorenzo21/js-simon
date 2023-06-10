# GIOCO MEMORY

**Descrizione**:<br>
Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.<br>
 Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().<br>
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.<br>
**Bonus**:<br>
Mostriamo il countdown dei 30 secondi in pagina.<br>
Facciamo inserire i numeri all'utente tramite 5 campi di input invece che via prompt.<br>

1. Prendiamo gli elementi desiderati dal DOM;
2. Creiamo una funzione che genera 5 numeri casuali e non ripetuti e li salva dentro un Array;
3. Facciamo partire una timing Function all'avvio della pagina dalla durata di 30 secondi e al cui termine genera 5 imput in cui inserire i numeri;
4. Mettiamo in ascolto un bottone che raccoglie i numeri inseriti dall'utente e verifica se sono uguali ai numeri generati casualmente raccolti nell'Array;
5. Verifichiamo che i numeri inseriti dall'utente siano uguali ai numeri casuali nell'Array.
6. Stampiamo il messaggio in pagina.
