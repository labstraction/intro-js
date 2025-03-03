//1) aggiungere al toString di tutte le classi gender e nationality
//2) aggiungere a teacher le funzioni: bestStudent e StudentsMean
//3) aggiungere la classe Principal che erediterà da human e come caratteristiche avrà:
// - un array di teachers
// - il nome della scuola
//4) aggiungere al principal due funzioni: bestTeacher e bestStudent


//---------------------------------------------------------


//1)Crea una classe base ContoBancario:
    //-La classe ContoBancario deve avere le seguenti proprietà: titolare (Human) saldo (numero)
    //-La classe ContoBancario deve avere i seguenti metodi:
        //-toString()
        //-deposita(importo): Aggiunge l'importo al saldo.
        //-preleva(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti, altrimenti stampa un messaggio di errore.

//2)Crea una classe derivata ContoCorrente che eredita da ContoBancario:
    //-La classe ContoCorrente deve avere le seguenti proprietà aggiuntive:
        //-limiteSpesa (numero)
    //-La classe ContoCorrente deve avere i seguenti metodi aggiuntivi:
        //-paga(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti o se l'importo è entro il limite di spesa, altrimenti stampa un messaggio di errore.
        // se il pagamento va a buon fine il metodo aggiunge al saldo il 2% dell'importo

//3)Crea una classe derivata ContoRisparmio che eredita da ContoBancario:
    //-La classe ContoRisparmio deve avere le seguenti proprietà aggiuntive:
        //-sogliaBonus(numero)
    //-La classe ContoRisparmio deve avere i seguenti metodi aggiuntivi:
        //-applicaBonus(): Aggiunge un bonus del 2% (del saldo) al saldo se il saldo supera la soglia.




