import express from 'express';

const servidor = express();


servidor.get('/calculadora/somar/:n1/:n2', ( req, resp ) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let total = n1 + n2;

    resp.send('O total é ' + total);

})



servidor.get('/calculadora/subtrair/:n1/:n2', (req, resp) => {


let n1 = Number (req.params.n1)
let n2 = Number (req.params.n2)

let ret = n1 - n2

resp.send("o rsultado é " + ret)


} )


servidor.listen(5002,
     () => console.log('API haahahahah'));