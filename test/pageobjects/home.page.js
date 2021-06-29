class HomePage {

    get submitBuscar () { return $('//*[@type="submit" and @value="Buscar"]') }
    get inputBuscar () { return $('//*[@id="search-input"]') }
    get homeText () { return $('//p[contains(text()," Encuentra los mejores profesionales en terapia de ")]') }
    get labelFisica () { return $('//label[.="Física"]') }
    get labelLenguaje () { return $('//label[.="Lenguaje"]') }
    get labelOcupacional () { return $('//label[.="Ocupacional"]') }
    get searchingOverlay () { return $('//div[@class="overlay overlay-show"]')}

    async buscar(criterio){
        await (await this.inputBuscar).setValue(criterio);
        await (await this.submitBuscar).click();
    }

    async getSearchFieldPlaceholder(){
        return await((await this.inputBuscar).getAttribute("placeholder"));
    }

    async removerSearchingOverlay(){
        return await(await this.searchingOverlay).click();
    }

    async selecccionarEspecialidadFisica(){
        await (await this.labelFisica).click();
    }

    async selecccionarEspecialidadLenguaje(){
        await (await this.labelLenguaje).click();
    }

    async selecccionarEspecialidadOcupacional(){
        await (await this.labelOcupacional).click();
    }

    async open () {
        return await browser.url('/');
    }
}

module.exports = new HomePage();