const { type } = require('express/lib/response');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect(process.env.url);
const Schema = mongoose.Schema;

const WikiSchema = new Schema(//plusieur collections une par jeu?
      {//virtuel concatenne nom + jeu
        _id:{type:ObjectId, auto: true},//virtual concatene
        nom: {type: String, required: [true,'Le champ est obligatoire'], maxLength: [50,'Longueur max est de 50 caracteres. A ete entrer:{VALUE}']},
        lienPhoto: {type:String,validate:{validator:function(v){
          var regUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
          return regUrl.test(v) 
        },message:"Lien de la photo invalide"}},//custom url pour checker si yer valide
        jeuOrigine: {type: String, required: [true,'Le champ est obligatoire'], maxLength:[100,'Longueur max est de 100 caracteres. # entrer:{VALUE}']},
        vie:{type:Number},//virtuel de vie moyenne pour le monde
        lore: {type: String},
        battu: {type: Boolean, required: [true,'Le champ est obligatoire']},
        faiblesses: {type:[String],validate:{validator:function(v){return v.length <= 5},message:"Liste de faiblesses trop longue (5max)"} },//custom dela longeur du tableau
        forces:{type:[String],validate:{validator:function(v){return v.length <= 5},message:"Liste de forces trop longue (5max)"}},//custom longueur du tableau
        butinChances: [{nom:{type:String},chances:{type:Number,min:[0,'Valeur doit etre entre 0 et 1'],max:[1,'Valeur doit etre entre 0 et 1']}}],
        //virtuel de combien de chances de recevoir qqchose at all
        //chances du loot en decimales sur 1 pour 100%
        dateAjouter:{type:Date, default:Date.now}
      }
    );
    WikiSchema.set('toJSON',{getters:true})
    //Exportation du modèle Wiki
   

WikiSchema.virtual('nomEtJeu').get(function() { 
  return this.nom + ' ' + this.jeuOrigine; 
});

WikiSchema.virtual('chancesToutButin').get(function() { 
  var total = 0;
  this.butinChances.forEach(loot => {
    total+=loot.chances;
  }); 
  if(total > 1){
    return 1;
  }else{
    return total;
  }
});
module.exports = mongoose.model('Wikis', WikiSchema);