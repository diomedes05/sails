/**
 * WordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const global_words = [
    {id:1, text: "hola",length: 3},
    {id:2, text: "si",length: 4},
    {id:3, text: "no",length: 5}
]
module.exports = {
  
list: function(req, res){
    let words = global_words

    return res.status(200).json(words)
},
// show: function(req, res){
//     let id = req.params.id;

//     let word = global_words.filter(word => parseInt(word.id) === parseInt(id))

//     if (word){
//       return res.json(word)
//     } else {
//       return res.status(404).json({id,error: 'Elemento no encontrado'})
//     }
// },
// store: function(req, res){

//     let word = {
//         id: parseInt(Math.random() * 10000),
//         text: req.body.text,
//         length: req.body.length
//     }

//     global_words.push(word)
    
//     return res.status(201).json(word)
// }
};

