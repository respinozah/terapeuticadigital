const perfilProfesionalPage = require('../pageobjects/perfilProfesional.page.js');

describe('3- Pruebas en el Perfil Profesional Page', () => {
    beforeEach(async ()=> {
        await perfilProfesionalPage.open();
    })

    it('3.a - Verificar que el webservice correcto es llamado al ingresar a la pagina del perfil profesional', async () => {
        browser.setupInterceptor();
        browser.expectRequest(perfilProfesionalPage.serviceMethod, perfilProfesionalPage.serviceURL, 200);
        browser.assertRequests();
    });
});