const homePage = require('../pageobjects/home.page.js');
const resultsPage = require('../pageobjects/results.page.js');
const stringUtil = require('../util/stringUtil.js');

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
        let simplificado = stringUtil.simplificarTexto("María");
        await homePage.buscar(simplificado);
        await expect(await resultsPage.getNombrePrimerResultadosBusqueda(criterioBusqueda)).toBeDisplayed();
    });
});