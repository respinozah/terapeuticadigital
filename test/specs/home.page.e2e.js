const HomePage = require('../pageobjects/home.page.js');


describe('1-Home Page', () => {
    it('1.a - Busqueda sin criterio no redirecciona a otra pagina', async () => {
        await HomePage.open();
        await HomePage.buscar('');
        await expect(HomePage.homeText).toBeDisplayed();
    });

    it('1.b - Campo de texto de busqueda obtiene el focus cuando se hace click en una especialidad', async () => {
        await HomePage.open();
        
        await HomePage.selecccionarEspecialidadFisica();
        await expect(HomePage.inputBuscar).toHaveAttribute('placeholder', '¿Buscas a alguien o algo en específico?');
        await HomePage.removeSearchingOverlay();

        await HomePage.selecccionarEspecialidadLenguaje();
        await expect(HomePage.inputBuscar).toHaveAttribute('placeholder', '¿Buscas a alguien o algo en específico?');
        await HomePage.removeSearchingOverlay();
        
        await HomePage.selecccionarEspecialidadOcupacional();
        await expect(HomePage.inputBuscar).toHaveAttribute('placeholder', '¿Buscas a alguien o algo en específico?');
        await HomePage.removeSearchingOverlay();
    });
});
