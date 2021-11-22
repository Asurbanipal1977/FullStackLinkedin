var _URL = 'http://localhost:8001'


casper.test.begin('Examinar sección de redes sociales', 6, function (test) {

    casper.start(_URL, function () {
      test.assertExists( 'a#redes-btn' , "Botón de RRSS presente");
      test.assertExists('.redes-sociales', "Contenedor de RRSS presente");
    })

    
    casper.then(function(){
        //Se comprueba que el botón es visible y el elemento de redes sociales es no visible
        test.assertVisible('a#redes-btn', "Botón de RRSS visible");
        test.assertNotVisible('.redes-sociales', "Contenedor de RRSS oculto");
        //Se ejecuta el click del botón
        //this.click(  'a#redes-btn' );
    });

    casper.then(function(){
        //Después del click el botón no es visible y el contenedor de redes sociales es visble.
        test.assertNotVisible('a#redes-btn', "Botón de RRSS oculto después de click");
        test.assertVisible('.redes-sociales', "Contenedor de RRSS visible después de click");
    })

    casper.run(function () {
        test.done();
    })
})