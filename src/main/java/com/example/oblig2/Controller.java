package com.example.oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    private List<Kunder>alleKunder=new ArrayList<>();

    List<Film>alleFilmer=new ArrayList<>();

    public Controller(){
        alleFilmer.add(new Film("Harry Potter 1"));
        alleFilmer.add(new Film("Harry Potter 2"));
        alleFilmer.add(new Film("Harry Potter 3"));
        alleFilmer.add(new Film("Harry Potter 4"));
    }

    @GetMapping("hentKunder")
    public List<Kunder> hentKunder(){
        return alleKunder;
    }

    @PostMapping("lagreKunder")
    public void lagreKunder(Kunder innKunde){
        alleKunder.add(innKunde);
    }

    @GetMapping("hentFilmer")
    public List<String> hentFilmer(){
        List<String> filmer=alleFilmer.stream()
                .map(film -> film.getFilm()).toList();
        return filmer;
    }

    @GetMapping("slettKunder")
    public void slettKunder(){
        alleKunder.clear();
    }
}
