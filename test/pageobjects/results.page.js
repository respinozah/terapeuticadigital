class ResultsPage {

    get titleFiltros () { return $('//h6[contains(text(),"Filtros")]') }
    get divPrimerResultadosBusqueda () { return $('//div[@class="container margin_60_35"]/div[1]/div[@class="col-lg-7"]')}
    get buttonFisica () { return $('//a[@type="button" and contains(text(),"Física")]') }
    get buttonLenguaje () { return $('//a[@type="button" and contains(text(),"Lenguaje")]') }
    get buttonOcupacional () { return $('//a[@type="button" and contains(text(),"Ocupacional")]') }
    get inputBuscar () { return $('//input[@type="search"]')}
    get submitBuscar () { return $('//input[@type="submit" and @value="Buscar"]')}
    get buttonLayoutView() { return $('//div[@class="layout_view"]/a[@class="active"]')}
    get mapaDesplegado() { return $('//aside[@class="col-lg-5"]/div[@id="map_listing"]')}
    get mapaNoDesplegado() { return $('//aside[@class="d-none"]/div[@id="map_listing"]')}

    async selecccionarEspecialidadFisica(){
        await (await this.buttonFisica).click();
    }

    async selecccionarEspecialidadLenguaje(){
        await (await this.buttonLenguaje).click();
    }

    async selecccionarEspecialidadOcupacional(){
        await (await this.buttonOcupacional).click();
    }

    async getNombrePrimerResultadosBusqueda(criterio){
        return $('//div[@class="container margin_60_35"]/div[1]/div[@class="col-lg-7"]/div/h3[contains(text(),"' + criterio + '")]')
    }

    async cambiarResultadosLayout(){
        await (await this.buttonLayoutView).waitForClickable({timeout:3000});
        await (await this.buttonLayoutView).click();
    }

    async buscar(criterio){
        await (await this.inputBuscar).setValue(criterio);
        await (await this.submitBuscar).click();
    }
}

module.exports = new ResultsPage();