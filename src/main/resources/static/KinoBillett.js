$(()=>{
    hentKunder();

    $("#kjop").click(event=>{
        event.preventDefault()

        const Kunder={

            velgFilm: $("#film").val,
            antall: $("#antall").val,
            fornavn: $("#fornavn").val,
            etternavn: $("#etternavn").val,
            telefonnr: $("#tlf").val,
            epost: $("#epost").val
        }

        $.post("/lagreKunder", Kunder, function(){
            hentKunder();
        })
    })
})

hentKunder=()=>{
    $.get("/hentKunder", function(kunder){
        formaterKunder(kunder);
    })

}

formaterKunder=(kunder)=>{
    let ut = "<table class='table table-striped'>" + "<tr>" +
        "<th>Velg Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (const kunde of kunder) {
        ut += "<tr><td>" + kunde.velgFilm + "</td><td>" + kunde.antall + "</td>" +
            "<td>" + kunde.fornavn + "</td><td>" + kunde.etternavn + "</td><td>" + kunde.telefonnr + "</td>" +
            "<td>" + kunde.epost + "</td>";
    }

    $("#visbillett").html(ut);

}

slett=()=>{
    $.get("/slettKunder", function(){
        hentKunder;
    })
}