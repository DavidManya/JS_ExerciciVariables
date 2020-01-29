//Fase 1
var nom = "David";
var cognom1 = "Mañá";
var cognom2 = "Álvarez";
var data = new Date();
var any = data.getFullYear();
var mes = data.getMonth() + 1;
var dia = data.getDate();

document.write('El meu nom és ' + cognom1 + ' ' + cognom2 + ', ' + nom + "<br>");
document.write("La data d'avui és " + dia + '/' + mes + '/' + any + "<br>");

//Fase 2
var anyinici = 1948;
var naixement = 0;
var dif = 0;
var quants = 0;
var traspas = 4;
//Demanar que introdueixi any de naixement
naixement = prompt('Introdueix el teu any de naixement:', '');
//document.write(naixement);
//Calculem diferència d'anys i treiem l'introduït si és de traspàs
dif = naixement - anyinici;
if (naixement % traspas == 0)
{
    dif = dif - 1;
}
//Calculem quants anys de traspàs hi ha entre 1948 i l'any de naixement introduït
quants = Math.floor(dif / traspas);
document.write("Entre 1948 i el teu any de naixement hi ha " + quants + " anys de traspàs" + "<br>");

//Fase 3
var estraspas = false;
var anytraspas = 0;

if (dif > 4)
{
    for (var i = 1; i <= quants; i++)
    {
        anytraspas = anyinici + (traspas * i);
        if (anytraspas!= naixement)
        {
            document.write(anytraspas + "<br>");
        }
    }
}

var sitraspas = "El teu any de naixement és de traspàs";
var notraspas = "El teu any de naixement NO és de traspàs";

if (naixement % traspas == 0)
{
    estraspas = true;
}

if (estraspas)
{
    document.write(sitraspas + "<br>");
}
else
{
    document.write(notraspas + "<br>");
}

//Fase 4
document.write("------------------------------------------" + "<br>");

var dianaixement = '';
var mesnaixement = '';
var anynaixement = '';
var nomsencer = (nom + ' ' + cognom1 + ' ' + cognom2);

//Recuperem dia naixement i el tractem per si no té dues xifres
dianaixement = prompt('Introdueix el teu dia de naixement:', '');
if ((dianaixement < 10) && (dianaixement.substr(0,1) != "0"))
{
    dianaixement = ("0" + dianaixement);
}
//Recuperem mes naixement i el tractem per si no té dues xifres
mesnaixement = prompt('Introdueix el teu mes de naixement:', '');
if ((mesnaixement < 10) && (mesnaixement.substr(0, 1) != "0"))
{
    mesnaixement = ("0" + mesnaixement);
}
anynaixement = prompt('Introdueix el teu any de naixement:', '');

document.write("El meu nom és " + nomsencer + "<br>");
document.write("Vaig neixer el " + dianaixement + "/" + mesnaixement + "/"  + anynaixement + "<br>");
if (estraspas)
{
    document.write("El meu any de naixement és de traspàs");
}
else
{
    document.write("El meu any de naixement NO és de traspàs");
}