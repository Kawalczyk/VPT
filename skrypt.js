//Aromat

// Funkcja Obsługująca Pokazywanie i Chowanie (Aromat)

function showMeAromat() {
    var show = document.getElementById('AROMATPHOTO');

    if(show.style.display == ''){
     show.style.display = 'block';
    }  
 }
 
 function showMeAromatSide() {
    var show = document.getElementById('aromat');
     var mg = document.getElementById('bazamg');
     var s = document.getElementById('shot');
     var m = document.getElementById('mieszanie');
     
    if(show.style.display == ''){
     show.style.display = 'block';
     mg.style.display = '';
     s.style.display = '';
     m.style.display = '';
    }  
 }
 
 
 function hideAromat() {
     var hide = document.getElementById('AROMATPHOTO');
     
     if(hide.style.display == 'block'){
     hide.style.display = '';
     
     }
     }
     
         //Funckcja licząca aromat

             function aromat()
                 {
                 var krople=document.getElementById("pole1").value;
                 var baza=document.getElementById("pole2").value;
                 var tekst_okienko_1= document.getElementById("tekst_okienko_1");
                 var tekst_okienko_1 = "Podaj poprawną ilość aroamtu większą od 0.";
                 var tekst_okienko_2= document.getElementById("tekst_okienko_2");
                 var tekst_okienko_2 = "Podaj poprawną ilość bazy większą od 0.";
                 
                 if (Number(krople)<=0){
                     
                     document.getElementById("tekst_okienko_1").innerHTML=tekst_okienko_1;
                     document.getElementById('przyciemnienie_1').style.display='block';
                     document.getElementById('okienko_1').style.display='block';
                     koniec.style.display = 'none';
                     koniec2.style.display = 'none';
                     koniec3.style.display = 'none';
                 }
                 
                 else{
                     przyciemnienie_1.style.display = 'none';
                     okienko_1.style.display = 'none';
                     koniec.style.display = 'block';
                     koniec2.style.display = 'block';
                     koniec3.style.display = 'block';
                 }
                 
                 
                 if (Number(baza)<=0){
                     
                     document.getElementById("tekst_okienko_2").innerHTML=tekst_okienko_2;
                     document.getElementById('przyciemnienie_2').style.display='block';
                     document.getElementById('okienko_2').style.display='block';
                     koniec.style.display = 'none';
                     koniec2.style.display = 'none';
                     koniec3.style.display = 'none';
                 }
                 
                 else{
                     przyciemnienie_2.style.display = 'none';
                     okienko_2.style.display = 'none';
                     koniec.style.display = 'block';
                     koniec2.style.display = 'block';
                     koniec3.style.display = 'block';
                 }
                 
                 var dzialanie1=0;
                 var dzialanie1=krople*baza;
                 var kropla=0.0325;
                 var wynik1=kropla*dzialanie1;
                 var okolo=Math.round(wynik1);
                 var wynik=Math.round(wynik1 * 100) / 100;
                 
                  
                 document.getElementById("koniec").innerHTML=wynik;
                 document.getElementById("koniec2").innerHTML=okolo;
                 document.getElementById("koniec3").innerHTML=dzialanie1;
                                     
                 }



     
// Funkcja Obsługująca Pokazywanie i Chowanie (MG)

         function showMeMg() {
            var show = document.getElementById('MGPHOTO');

            if(show.style.display == ''){
             show.style.display = 'block';
            }  
         }
         
             function showMeMgSide() {
            var show = document.getElementById('bazamg');
            var a = document.getElementById('aromat');
             var s = document.getElementById('shot');
             var m = document.getElementById('mieszanie');

            if(show.style.display == ''){
             show.style.display = 'block';
             a.style.display = '';
             s.style.display = '';
             m.style.display = '';
             
            }  
         }

         function hideMg() {
             var hide = document.getElementById('MGPHOTO');
             
             if(hide.style.display == 'block'){
             hide.style.display = '';
             }
             }
             
     //Funkcja licząca 0mg.

                 function mg()
                 {
                 var il_shota=document.getElementById("pole1_bazamg").value;
                 var moc_shota=document.getElementById("pole2_bazamg").value;
                 var po_moc=document.getElementById("pole3_bazamg").value;
                 var tekst_okienko_1= document.getElementById("tekst_okienko_1");
                 var tekst_okienko_1 = "Podaj poprawną ilość shota większą od 0.";
                 var tekst_okienko_2= document.getElementById("tekst_okienko_2");
                 var tekst_okienko_2 = "Podaj poprawną moc shota większą od 0.";
                 var tekst_okienko_3= document.getElementById("tekst_okienko_3");
                 var tekst_okienko_3 = "Podaj poprawną wartość pożądanej mocy większą od 0.";
                 var tekst_okienko_4= document.getElementById("tekst_okienko_4");
                 var tekst_okienko_4 = "Pożądana moc jest większa niż moc shota";

                 if (il_shota<=0){
                     document.getElementById("tekst_okienko_1").innerHTML=tekst_okienko_1;
                     document.getElementById('przyciemnienie_1').style.display='block';
                     document.getElementById('okienko_1').style.display='block';
                 }
                 
                 
                 if (moc_shota<=0){
                     document.getElementById("tekst_okienko_2").innerHTML=tekst_okienko_2;
                     document.getElementById('przyciemnienie_2').style.display='block';
                     document.getElementById('okienko_2').style.display='block';
                 }
                                     
                 if (po_moc<=0){
                     document.getElementById("tekst_okienko_3").innerHTML=tekst_okienko_3;
                     document.getElementById('przyciemnienie_3').style.display='block';
                     document.getElementById('okienko_3').style.display='block';
                 }

                 if (po_moc>moc_shota){
                     document.getElementById("tekst_okienko_4").innerHTML=tekst_okienko_4;
                     document.getElementById('przyciemnienie_4').style.display='block';
                     document.getElementById('okienko_4').style.display='block';
                 }
                 
                 
                 
                 var dzialanie1=0;
                 var dzialanie1=il_shota*moc_shota;
                 var dzialanie2_1=dzialanie1/po_moc;
                 var dzialanie2=Math.round(dzialanie2_1 * 100) / 100;
                 var wynik1=dzialanie2-il_shota;
                 var wynik=Math.round(wynik1 * 100) / 100;
                 var wynik_okolo=Math.round(wynik);
                 var il_okolo=Math.round(dzialanie2);
                 
                  
                 document.getElementById("wynik_bazamg").innerHTML=wynik;
                 document.getElementById("wynik_okolo_bazamg").innerHTML=wynik_okolo;
                 document.getElementById("il_okolo_bazamg").innerHTML=il_okolo;
                 document.getElementById("dzialanie2_bazamg").innerHTML=dzialanie2;
                 document.getElementById("po_moc_bazamg").innerHTML=po_moc;
                 }
             
// Funkcja Obsługująca Pokazywanie i Chowanie (SHOT)
             
             function showMeShot() {
                 var show = document.getElementById('SHOTPHOTO');

                if(show.style.display == ''){
                 show.style.display = 'block';
                }  
             }
             
             function showMeShotSide() {
                 var a = document.getElementById('aromat');
                 var mg = document.getElementById('bazamg');
                 var show = document.getElementById('shot');
                 var m = document.getElementById('mieszanie');
                 
                 if(show.style.display == ''){
                 show.style.display = 'block';
                 mg.style.display = '';
                 a.style.display = '';
                 m.style.display = '';
                }  
             }

             function hideShot() {
                  var hide = document.getElementById('SHOTPHOTO');
                 
                 
                 if(hide.style.display == 'block'){
                 hide.style.display = '';
                 }
                 }
                 
     //Funkcja licząca SHOT
             
                 function baza(){
                     var baza=document.getElementById("pole1_shot").value;
                     var moc_shota=document.getElementById("pole2_shot").value;
                     var po_moc=document.getElementById("pole3_shot").value;
                     var tekst_okienko_1= document.getElementById("tekst_okienko_1");
                     var tekst_okienko_1 = "Podaj poprawną ilość bazy większą od 0.";
                     var tekst_okienko_2= document.getElementById("tekst_okienko_2");
                     var tekst_okienko_2 = "Podaj poprawną wartość mocy shota większą od 0.";
                     var tekst_okienko_3= document.getElementById("tekst_okienko_3");
                     var tekst_okienko_3 = "Podaj poprawną wartość pożądanej mocy większą od 0.";
                     var tekst_okienko_4= document.getElementById("tekst_okienko_4");
                     var tekst_okienko_4 = "Pożądana moc jest większa niż moc shota";

                     if (baza<=0){
                         document.getElementById("tekst_okienko_1").innerHTML=tekst_okienko_1;
                         document.getElementById('przyciemnienie_1').style.display='block';
                         document.getElementById('okienko_1').style.display='block';
                     }
                     
                     
                     if (moc_shota<=0){
                         document.getElementById("tekst_okienko_2").innerHTML=tekst_okienko_2;
                         document.getElementById('przyciemnienie_2').style.display='block';
                         document.getElementById('okienko_2').style.display='block';
                     }
                 
                     if (po_moc<=0){
                         document.getElementById("tekst_okienko_3").innerHTML=tekst_okienko_3;
                         document.getElementById('przyciemnienie_3').style.display='block';
                         document.getElementById('okienko_3').style.display='block';
                 }

                     if (po_moc>moc_shota){
                         document.getElementById("tekst_okienko_4").innerHTML=tekst_okienko_4;
                         document.getElementById('przyciemnienie_4').style.display='block';
                         document.getElementById('okienko_4').style.display='block';
                     }

                     var obliczenie1=baza*po_moc*(-1);
                     var obliczenie2=Number(po_moc)-Number(moc_shota);
                     var obl3_1=obliczenie1/obliczenie2;
                     var obl3= Math.round(obl3_1 * 100) / 100;
                     var wynik1=Number(obl3)+Number(baza);
                     var okobl3=Math.round(obl3);
                     var okwynik=Math.round(wynik1);
                     var moc_shota1=moc_shota;
                     var wynik=Math.round(wynik1 * 100) / 100;
                         
                     document.getElementById("obl3_shot").innerHTML= obl3;
                     document.getElementById("okobl3_shot").innerHTML= okobl3;
                     document.getElementById("moc_shota_shot").innerHTML= moc_shota;
                     document.getElementById("wynik_shot").innerHTML= wynik;
                     document.getElementById("okwynik_shot").innerHTML= okwynik;
                     document.getElementById("po_moc_shot").innerHTML= po_moc;
                     document.getElementById("moc_shota1_shot").innerHTML= moc_shota1;
                 }

// Funkcja Obsługująca Pokazywanie i Chowanie (Mieszanie)

                     function showMeMieszanie() {
                         var show = document.getElementById('MIESZANIEPHOTO');

                        if(show.style.display == ''){
                         show.style.display = 'block';
                        }  
                        
                     }
                     
                     function showMeMieszanieSide() {
                         var a = document.getElementById('aromat');
                         var mg = document.getElementById('bazamg');
                         var s = document.getElementById('shot');
                         var show = document.getElementById('mieszanie');
                         
                         if(show.style.display == ''){
                         show.style.display = 'block';
                         mg.style.display = '';
                         a.style.display = '';
                         s.style.display = '';
                        }  
                     }

                     function hideMieszanie() {
                          var hide = document.getElementById('MIESZANIEPHOTO');
                         
                         
                         if(hide.style.display == 'block'){
                         hide.style.display = '';
                         }
                         
}
     /*Funckcja licząca Mieszanie*/	
                         function gotowe()
                     {
                     var il_bazy=document.getElementById("pole1_mieszanie").value;
                     var il_shota=document.getElementById("pole2_mieszanie").value;
                     var moc_shota=document.getElementById("pole3_mieszanie").value;
                     var tekst_okienko_1= document.getElementById("tekst_okienko_1");
                     var tekst_okienko_1 = "Podaj poprawną ilość bazy większą od 0.";
                     var tekst_okienko_2= document.getElementById("tekst_okienko_2");
                     var tekst_okienko_2 = "Podaj poprawną wartość mocy shota większą od 0.";
                     var tekst_okienko_3= document.getElementById("tekst_okienko_3");
                     var tekst_okienko_3 = "Podaj poprawną wartość pożądanej mocy większą od 0.";

                     if (il_bazy<=0){
                         document.getElementById("tekst_okienko_1").innerHTML=tekst_okienko_1;
                         document.getElementById('przyciemnienie_1').style.display='block';
                         document.getElementById('okienko_1').style.display='block';
                     }
                     
                     if (il_shota<=0){
                         document.getElementById("tekst_okienko_2").innerHTML=tekst_okienko_2;
                         document.getElementById('przyciemnienie_2').style.display='block';
                         document.getElementById('okienko_2').style.display='block';
                     }
                     
                     if (moc_shota<=0){
                         document.getElementById("tekst_okienko_3").innerHTML=tekst_okienko_3;
                         document.getElementById('przyciemnienie_3').style.display='block';
                         document.getElementById('okienko_3').style.display='block';
                     }
                     
                     var il_lq_po_zmiesz_1=Number(il_bazy)+Number(il_shota);
                     var il_lq_po_zmiesz=Math.round(il_lq_po_zmiesz_1 * 100) / 100;
                     var dzialanie1=moc_shota/il_lq_po_zmiesz;
                     var wynik1=dzialanie1*il_shota;
                     var wynik_okolo=Math.round(wynik1);
                     var il_okolo=Math.round(il_lq_po_zmiesz);
                     var wynik=Math.round(wynik1 * 100) / 100;

                     
                     
                      
                     document.getElementById("wynik_mieszanie").innerHTML=wynik;
                     document.getElementById("wynik_okolo_mieszanie").innerHTML=wynik_okolo;
                     document.getElementById("il_lq_po_zmiesz_mieszanie").innerHTML=il_lq_po_zmiesz;
                     document.getElementById("il_okolo_mieszanie").innerHTML=il_okolo;
                     }
                     
 /*Funkcja ukrywająca okienko */
 
 function hideOkienko_1() {
     var hide = document.getElementById('okienko_1');

     hide.style.display = '';
     przyciemnienie_1.style.display = 'none';

     }

     function hideOkienko_2() {
     var hide = document.getElementById('okienko_2');

     hide.style.display = '';
     przyciemnienie_2.style.display = 'none';

     }

         function hideOkienko_3() {
         var hide = document.getElementById('okienko_3');

         hide.style.display = '';
         przyciemnienie_3.style.display = 'none';

         }

             function hideOkienko_4() {
             var hide = document.getElementById('okienko_4');

             hide.style.display = '';
             przyciemnienie_4.style.display = 'none';

             }
