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
    const regexp=/^[a-zA-ZæøåÆØÅ \-]{2,20}$/
    const ok=regexp.test(fornavn)
    if(!ok){
        $("#feilFornavn").html("Må fylles inn med bokstav");
        return false
    }
    else{
        $("#feilFornavn").html("");
        return true;
    }
}
validerEtternavn=(etternavn)=>{
    const regexp=/^[a-zA-ZæøåÆØÅ \-]{2,20}$/
    const ok=regexp.test(etternavn)
    if(!ok){
        $("#feilEtternavn").html("Må fylles inn med bokstav");
        return false
    }
    else{
        $("#feilEtternavn").html("");
        return true;
    }
}
validerTlf=(telefon)=>{
    const regexp=/^[0-9]{8}$/
    const ok=regexp.test(telefon)
    if(!ok){
        $("#feilTlf").html("Må være 8 siffer");
        return false;
    }
    else{
        $("#feilTlf").html("");
        return true;
    }
}
validerEpost=(epost)=>{
    const regexp=/^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/
    const ok=regexp.test(epost)
    if(!ok){
        $("#feilEpost").html("Må være gyldig epost");
        return false
    }
    else{
        $("#feilEpost").html("");
        return true;
    }
}
