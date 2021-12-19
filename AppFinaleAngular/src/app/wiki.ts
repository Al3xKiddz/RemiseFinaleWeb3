export interface Wiki {
    _id?:String,
    nom:String,
    lienPhoto?:String,
    jeuOrigine:String,
    vie:Number,
    lore?:String,
    battu:Boolean,
    faiblesses:String[],
    forces:String[],
    butinChances:[{nom:String,chances:Number}],
    dateAjouter?:Date,
    nomEtJeu?:String,
    chancesToutButin?:Number,
}