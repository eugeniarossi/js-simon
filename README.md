# Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

***

1. Creo un elemento nel dom in cui mostrare i numeri e lo salvo in una variabile

2. Genero un array di 5 numeri casuali e li mostro in pagina

3. Definisco un timer di 30 secondi (setTimeOut), con una funzione che faccia scomparire i numeri dalla pagina e che faccia apparire un prompt in cui inserire i numeri

4. Salvo i numeri inseriti dall'utente in un array, finchè non contiene 5 numeri (while)

5. Definisco un array vuoto in cui inserisco i numeri indovinati

6. Definisco un ciclo for in cui confronto i due array, aggiungo ogni numero indovinato dall'utente nell'array vuoto