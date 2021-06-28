
class ResultsPage {
    /**
     * define selectors using getter methods
     */
    get titleFiltros () { return $('//h6[contains(text(),"Filtros")]') }
    get divPrimerResultadosBusqueda () { return $('//div[@class="container margin_60_35"]/div[1]/div[@class="col-lg-7"]')}
    get buttonFisica () { return $('//a[@type="button" and contains(text(),"Física")]') }
    get buttonLenguaje () { return $('//a[@type="button" and contains(text(),"Lenguaje")]') }
    get buttonOcupacional () { return $('//a[@type="button" and contains(text(),"Ocupacional")]') }

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
}

module.exports = new ResultsPage();