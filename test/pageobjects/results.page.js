
class ResultsPage {
    /**
     * define selectors using getter methods
     */
    get titleFiltros () { return $('//h6[contains(text(),"Filtros")]') }

}

module.exports = new ResultsPage();