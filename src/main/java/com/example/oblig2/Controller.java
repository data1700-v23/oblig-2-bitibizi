package com.example.oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    private List<Kunder>alleKunder=new ArrayList<>();

    @GetMapping("hentKunder")
    public List<Kunder> hentKunder(){
        return alleKunder;
    }

    @PostMapping("lagreKunder")
    public void lagreKunder(Kunder innKunde){
        alleKunder.add(innKunde);
    }

    @GetMapping("slettKunder")
    public void slettKunder(){
        alleKunder.clear();
    }
}
