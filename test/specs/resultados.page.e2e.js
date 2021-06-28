const homePage = require('../pageobjects/home.page.js');
const resultsPage = require('../pageobjects/results.page.js');


describe('2- Pruebas en el Result Page', () => {
    beforeEach(async ()=> {
        await homePage.open();
    })

    it('2.a - Cambio en especialidad en resultado de busqueda cambia la URL', async () => {
        const criterioBusqueda = "María";

        await homePage.buscar(simplificarTexto(criterioBusqueda));
        await expect(resultsPage.titleFiltros).toBeDisplayed();

        await resultsPage.selecccionarEspecialidadFisica();
        await expect(await browser).toHaveUrlContaining("search?sp=phisical");

        await resultsPage.selecccionarEspecialidadLenguaje();
        await expect(await browser).toHaveUrlContaining("search?sp=language");

        await resultsPage.selecccionarEspecialidadOcupacional();
        await expect(await browser).toHaveUrlContaining("search?sp=ocupational");
    });

    it('2.b - Realizar una busqueda desde la pagina de resultados y validar resultado acorde al criterio de busqueda', async () => {
        const criterioBusqueda = "María";

        await homePage.buscar(simplificarTexto(criterioBusqueda));
    });
});

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