validerFilm=(film)=>{
    const feil = "feil"
    if(film===feil){
        $("#feilFilm").html("Må velge film")
        return false;
    }else{
        $("#feilFilm").html("")
        return true;
    }
}

validerAntall=(antall)=>{
   const regexp=/^[1-9]+[0-9]*$/;
    const ok =regexp.test(antall);

    if(!ok){
        $("#feilAntall").html("Må fylles med tall");
        return false
    }
    else{
        $("#feilAntall").html("");
        return true;
    }
}

validerFornavn=(fornavn)=>{
    const feil ="";
    if(feil===fornavn){
        $("#feilFornavn").html("Må fylles inn");
        return false
    }
    else{
        $("#feilFornavn").html("");
        return true;
    }
}
validerEtternavn=(etternavn)=>{
    const feil ="";
    if(feil===etternavn){
        $("#feilEtternavn").html("Må fylles inn");
        return false
    }
    else{
        $("#feilEtternavn").html("");
        return true;
    }
}
validerTlf=(telefon)=>{
    const feil ="";
    if(feil===telefon || isNaN(telefon)){
        $("#feilTlf").html("Må fylles med tall");
        return false
    }
    else{
        $("#feilTlf").html("");
        return true;
    }
}
validerEpost=(epost)=>{
    const feil ="";
    if(feil===epost){
        $("#feilEpost").html("Må fylles inn");
        return false
    }
    else{
        $("#feilEpost").html("");
        return true;
    }
}
