function simplificarTexto(criterioBusqueda){
    var simplificado = criterioBusqueda.toLowerCase();
    simplificado = simplificado.replace(new RegExp(/\s/g),"");
    simplificado = simplificado.replace(new RegExp(/[àáâãäå]/g),"a");
    simplificado = simplificado.replace(new RegExp(/æ/g),"ae");
    simplificado = simplificado.replace(new RegExp(/ç/g),"c");
    simplificado = simplificado.replace(new RegExp(/[èéêë]/g),"e");
    simplificado = simplificado.replace(new RegExp(/[ìíîï]/g),"i");
    simplificado = simplificado.replace(new RegExp(/ñ/g),"n");                
    simplificado = simplificado.replace(new RegExp(/[òóôõö]/g),"o");
    simplificado = simplificado.replace(new RegExp(/œ/g),"oe");
    simplificado = simplificado.replace(new RegExp(/[ùúûü]/g),"u");
    simplificado = simplificado.replace(new RegExp(/[ýÿ]/g),"y");
    simplificado = simplificado.replace(new RegExp(/\W/g),"");
    return simplificado;
}

module.exports = {
    simplificarTexto
}