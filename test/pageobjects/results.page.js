
class ResultsPage {
    /**
     * define selectors using getter methods
     */
    get titleFiltros () { return $('//h6[contains(text(),"Filtros")]') }
    get divPrimerResultadosBusqueda () { return $('//div[@class="container margin_60_35"]/div[1]/div[@class="col-lg-7"]')}

     

}

module.exports = new ResultsPage();