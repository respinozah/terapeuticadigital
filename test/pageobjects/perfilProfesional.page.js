class PerfilProfesionalPage {


    async open () {
        return await browser.url('/#/specialist/bfea3295-af20-4824-8bed-170a227bc1e6');
    }

    
}

module.exports = new PerfilProfesionalPage();