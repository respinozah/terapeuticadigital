const homePage = require('../pageobjects/home.page.js');
const resultsPage = require('../pageobjects/results.page.js');
const stringUtil = require('../util/stringUtil.js');
let criterioBusqueda = "";

describe('2- Pruebas en el Result Page', () => {
    before(async ()=> {
        criterioBusqueda = "María";
        await homePage.open();
        await homePage.buscar(stringUtil.simplificarTexto(criterioBusqueda));
    })

    it('2.a - Cambio en especialidad en resultado de busqueda cambia la URL', async () => {
        await expect(resultsPage.titleFiltros).toBeDisplayed();

        await resultsPage.selecccionarEspecialidadFisica();
        await expect(await browser).toHaveUrlContaining("search?sp=phisical");

        await resultsPage.selecccionarEspecialidadLenguaje();
        await expect(await browser).toHaveUrlContaining("search?sp=language");

        await resultsPage.selecccionarEspecialidadOcupacional();
        await expect(await browser).toHaveUrlContaining("search?sp=ocupational");
    });

    it('2.b - Realizar una busqueda desde la pagina de resultados y validar resultado acorde al criterio de busqueda', async () => {
        await resultsPage.buscar(stringUtil.simplificarTexto(criterioBusqueda));
        await expect(await resultsPage.getNombrePrimerResultadosBusqueda(criterioBusqueda)).toBeDisplayed();
    });

    it('2.c - Validar que al cambiar entre mapa y lista, el mapa desaparece', async () => {
        await expect(await resultsPage.mapaDesplegado).toBeDisplayed();
        await resultsPage.cambiarResultadosLayout();
        await expect(await resultsPage.mapaNoDesplegado).toExist();
    });
});