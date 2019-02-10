var MarginTopIzquierda = 0;
var MarginTopDerecha = 0;

function MovingPaletas() {
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 87 && MarginTopIzquierda >= -48) {
            MarginTopIzquierda = MarginTopIzquierda - 3;
            document.getElementById("PaletaIzquierda").style.marginTop = (MarginTopIzquierda + "px").toString();
        } else if(event.keyCode == 83 && MarginTopIzquierda <= 228) {
            MarginTopIzquierda = MarginTopIzquierda + 3;
            document.getElementById("PaletaIzquierda").style.marginTop = (MarginTopIzquierda + "px").toString();
        }else if(event.keyCode == 38  && MarginTopDerecha >= -48) {
            MarginTopDerecha = MarginTopDerecha - 3;
            document.getElementById("PaletaDerecha").style.marginTop = (MarginTopDerecha + "px").toString();
        } else if(event.keyCode == 40 && MarginTopDerecha <= 228) {
            MarginTopDerecha = MarginTopDerecha + 3;
            document.getElementById("PaletaDerecha").style.marginTop = (MarginTopDerecha + "px").toString();
        }
    });
}