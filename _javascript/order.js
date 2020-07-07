function order(num) {
    var i = 0
    var j = 0
    for(i = 0; i < num.length; i++) {
        var lower = num[i] // menor valor
        var lowerPosition = i // localização do menor valor
        var aux // variável auxiliar
        for(j = (i+1); j < num.length; j++) {
            if(lower > num[j]) {
                lower = num[j] 
                lowerPosition = j
            }
        }
            aux = num[i]
            num[i] = num[lowerPosition]
            num[lowerPosition] = aux
    }
    return num
}