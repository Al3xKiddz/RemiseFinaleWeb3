var express = require('express');
var router = express.Router();
const mongoose = require ('mongoose');
require("dotenv").config();

const wiki = require("../models/wikis")

// get all
router.get('/', async (req, res, next) => {
    try {    
      await mongoose.connection.close();
      await mongoose.connect("mongodb://127.0.0.1:27017/wikis");
      const wikis = await wiki.find();
      res.json(wikis);
    } catch(err) {
      console.log(err);
      res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
    } finally {
        await mongoose.connection.close();
    }
});
 //filtre #1
 router.get('/jeu/:jeu', async (req, res) => {
   try {    
    await mongoose.connection.close();
     await mongoose.connect(process.env.URL+process.env.dbname);    
     let jeu = req.params.jeu;
     console.log(jeu);
     res.json(await wiki.find({'jeuOrigine':jeu}));
   } catch(err) {
     console.log(err.message);
     res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
   } finally {
     await mongoose.connection.close();
   }
 });
 //filtre #2
 router.get('/battu/:battu', async (req, res) => {
   try {    
    await mongoose.connection.close();
     await mongoose.connect(process.env.URL+process.env.dbname);    
     let battu = req.params.battu;
     console.log(battu);
     res.json(await wiki.find({'battu':battu}));
   } catch(err) {
     console.log(err.message);
     res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
   } finally {
     await mongoose.connection.close();
   }
 });
 //aggregate stat #1
 //nb de note par jeu
 router.get('/noteJeu', async (req, res) => {
   try {    
    await mongoose.connection.close();
     await mongoose.connect(process.env.URL+process.env.dbname);    
     console.log("rendu dans notJeu pour faire le cossin")
     res.json(await wiki.aggregate([{"$group":{"_id":"$jeuOrigine","nbNote":{"$sum":1}}},{"$sort":{"nbNote":1}}]));
   } catch(err) {
     console.log(err.message);
     res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
   } finally {
     await mongoose.connection.close();
   }
 });
 //aggregate stat #2
 //moyenne de la vie de tout ce qui est rentrer
 router.get('/vie', async (req, res) => {
   try {    
    await mongoose.connection.close();
     await mongoose.connect(process.env.URL+process.env.dbname);
     res.json(await wiki.aggregate([{"$group":{"_id": null,"moyenneVie":{"$avg":"$vie"}}}]));
   } catch(err) {
     console.log(err.message);
     res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
   } finally {
     await mongoose.connection.close();
   }
 });
 //update
 router.put('/:id', async (req, res) => {
  
     try {
    await mongoose.connection.close();
      await mongoose.connect(process.env.URL+process.env.dbname);
      console.log(req.body)
       const auteur = await wiki.findByIdAndUpdate(req.params.id,req.body,{new:true});
       if(!auteur) {
         res.status(404).json({message:'Entree introuvable'});
       } else {
         res.json(auteur);
       }
     } catch(err) {
       console.log(err);
       res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
     } finally {
         await mongoose.connection.close();
     }
   });

 //delete
 router.delete('/:id', async (req, res) => {  
   try {
    await mongoose.connection.close();
     await mongoose.connect(process.env.URL+process.env.dbname);
     res.json(await wiki.deleteOne({_id:req.params.id}));
   } catch(err) {
     console.log(err.message);
     res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
   } finally {
     await mongoose.connection.close();
   }
 });
 // insert
 router.post('/', async (req, res) => {  
   console.log("test")
   console.log(process.env.URL+process.env.dbname)
   console.log(req.body)
     try {
      await mongoose.connection.close();
      await mongoose.connect(process.env.URL+process.env.dbname);
        const entrer = new wiki(req.body);
        const nouvelentrer = await entrer.save();
        res.json(nouvelentrer);
    } catch(err) {
        console.log(err);
        res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
      } finally {
       await mongoose.connection.close();
      }
 });
 //get by id
 router.get('/:id', async (req, res) => {
  try {    
   await mongoose.connection.close();
    await mongoose.connect(process.env.URL+process.env.dbname);    
    let id = req.params.id;
    console.log(id);
    res.json(await wiki.findOne({'_id':id}));
  } catch(err) {
    console.log(err.message);
    res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
  } finally {
    await mongoose.connection.close();
  }
});
module.exports = router;
