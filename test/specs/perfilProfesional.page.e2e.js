//const homePage = require('../pageobjects/home.page.js');
//const resultsPage = require('../pageobjects/results.page.js');
const perfilProfesionalPage = require('../pageobjects/perfilProfesional.page.js');

describe('3- Pruebas en el Perfil Profesional Page', () => {
    beforeEach(async ()=> {
        await perfilProfesionalPage.open();
    })

    it('3.a - Verificar que el webservice correcto es llamado al ingresar a la pagina del perfil profesional', async () => {
        browser.setupInterceptor();
        browser.expectRequest('GET', 'https://javito-prod.herokuapp.com/v1/specialist/bfea3295-af20-4824-8bed-170a227bc1e6', 200);
        browser.assertRequests();
    });
});