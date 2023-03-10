validerFilm=(film)=>{

console.log(feil)
    if(film===feil){
        $("#feilFilm").html("Må velge film")
        return false;
    }else{
        $("#feilFilm").html("")
        return true;
    }
}

validerAntall=(antall)=>{
    const feil ="";
    if(feil===antall){
        $("#feilAntall").html("Må fylles inn");
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
    if(feil===telefon){
        $("#feilTlf").html("Må fylles inn");
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
