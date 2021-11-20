class Juego{
    constructor(fila, columna){
        this.fila = fila;
        this.columna = columna;
        this.tablero;
    }
        
    crearArr(rate) {
        let aux;
        let arr = [];
         for (let i = 0; i < this.fila; i++) {
             let arrHijo = [];
             for (let j = 0; j < this.columna; j++) {
                aux = Math.random();
                let valor = (aux < rate) ? 0 : 1;
                arrHijo.push(valor)
            }
            arr.push(arrHijo);
        } 
        this.tablero = arr; 
    }

    buscarSobrevivientes(){
        this.tablero.forEach((fila, i) => {
            this.tablero[i].forEach((columna, j) => {
                this.buscarVecinos(i, j)
            });
        });
    }
    buscarVecinos(x, y){
        let vecinos = [];
        let auxY = 0;
        x++
        for (let i = 0; i < 3; i++) {
            auxY = y + 1;
           for (let j = 0; j < 3; j++) {
               if(x >= 0 && auxY >= 0 && x < this.fila && auxY < this.columna) {
                    vecinos.unshift([x, auxY]);
               } else 
                vecinos.unshift([0]);
               auxY--;
           }
           x--;
        }
        return vecinos;
    }



}
export default Juego;

