const homePage = require('../pageobjects/home.page.js');
const resultsPage = require('../pageobjects/results.page.js');

describe('1- Pruebas en el Home Page', () => {
    before(async ()=> {
        await homePage.open();
    })

    it('1.a - Busqueda sin criterio no redirecciona a otra pagina', async () => {
        await homePage.buscar('');
        await expect(homePage.homeText).toBeDisplayed();
    });

    it('1.b - Campo de texto de busqueda obtiene el focus cuando se hace click en una especialidad', async () => {
        const expectedPlaceholder = '¿Buscas a alguien o algo en específico?';

        await homePage.selecccionarEspecialidadFisica();
        await expect(homePage.inputBuscar).toHaveAttribute('placeholder', expectedPlaceholder);
        await expect(homePage.inputBuscar).toBeFocused();
        await homePage.removerSearchingOverlay();

        await homePage.selecccionarEspecialidadLenguaje();
        await expect(homePage.inputBuscar).toHaveAttribute('placeholder', expectedPlaceholder);
        await expect(homePage.inputBuscar).toBeFocused();
        await homePage.removerSearchingOverlay();
        
        await homePage.selecccionarEspecialidadOcupacional();
        await expect(homePage.inputBuscar).toHaveAttribute('placeholder', expectedPlaceholder);
        await expect(homePage.inputBuscar).toBeFocused();
        await homePage.removerSearchingOverlay();
    });

    it('1.c - Realizar busqueda y validar resultado acorde al criterio de busqueda', async () =>{
        const criterioBusqueda = "María";
        await homePage.buscar(simplificarTexto(criterioBusqueda));
        await expect(await resultsPage.getNombrePrimerResultadosBusqueda(criterioBusqueda)).toBeDisplayed();
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