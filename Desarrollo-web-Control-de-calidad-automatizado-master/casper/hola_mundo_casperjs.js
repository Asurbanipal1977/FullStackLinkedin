var casper = require('casper').create();

var URL = 'http://localhost:8001';

//Se crea una instancia de casper y se indica la dirección
casper.start( URL , function(){

    this.echo( this.getPageContent()  )

} )

casper.run()