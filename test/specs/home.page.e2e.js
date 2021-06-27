const homePage = require('../pageobjects/home.page.js');
const resultsPage = require('../pageobjects/results.page.js');


describe('1- Pruebas en el Home Page', () => {
    beforeEach(async ()=> {
        await homePage.open();
    })

    it('1.a - Busqueda sin criterio no redirecciona a otra pagina', async () => {
        await homePage.buscar('');
        await expect(homePage.homeText).toBeDisplayed();
    });

    it('1.b - Campo de texto de busqueda obtiene el focus cuando se hace click en una especialidad', async () => {
        await homePage.selecccionarEspecialidadFisica();
        await expect(homePage.inputBuscar).toHaveAttribute('placeholder', '¿Buscas a alguien o algo en específico?');
        await homePage.removerSearchingOverlay();

        await homePage.selecccionarEspecialidadLenguaje();
        await expect(homePage.inputBuscar).toHaveAttribute('placeholder', '¿Buscas a alguien o algo en específico?');
        await homePage.removerSearchingOverlay();
        
        await homePage.selecccionarEspecialidadOcupacional();
        await expect(homePage.inputBuscar).toHaveAttribute('placeholder', '¿Buscas a alguien o algo en específico?');
        await homePage.removerSearchingOverlay();
    });

    it('1.c - Realizar busqueda y validar resultado acorde al criterio de busqueda', async () =>{
        await homePage.buscar("Maria");
        await expect(await resultsPage.divPrimerResultadosBusqueda).toBeDisplayed();
    });
});
