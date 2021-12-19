Comme ta vu quand tu m'aidait la connection entre l'api 
et le site marchait si j'ai pas remis la bonne chose dit moi le svp
(devrait pas mais ca me tente pas de pocher pour ca)

Pour installer l'api:
	npm install 
	(et ceux de base si j'en ai oublier)

Base de donners mongo et pour la creer simplement faire la meme commande
que d'habitude mais avec le wikis.json du dossier DEV du site angular

URL inexistant en ligne mais http://localhost:3000/wikis

Get /
	params:aucun
	corps a soumettre:aucun
	reponse:Toute la collection wikis
GetWikisId /:id
	params:id d'un wiki
	corps a soumettre:aucun
	reponse:un wiki
GetWikisJeu /jeu/:jeu
	params:nom d'un jeu
	corps a soumettre:aucun
	reponse:tout les wikis d'un jeu
GetWikisBattu /battu/:battu
	params:boolean si le jeu est battu ou pas
	corps a soumettre:aucun
	reponse:tout les wikis battus ou pas
GetWikiStatNbNote /noteJeu
	params:aucun
	corps a soumettre:aucun
	reponse:[{"_id":"DarkSouls","nbNote":2},{"_id":"adibou","nbNote":2},{"_id":"DarkSoulsIII","nbNote":3}]
GetWikisStatsVie /vie
	params:aucun
	corps a soumettre:aucun
	reponse:[{"_id":null,"moyenneVie":5489.571428571428}]
addWiki /
	params:aucun
	corps a soumettre:un wiki a inserer
	reponse: le wiki inserer
deleteWiki /:id
	params:id du wiki a deleter
	corps a soumettre:aucun
	reponse:{deletedCount:1}
updateWiki /:id
	params:id du wiki a updater
	corps a soumettre:wiki updater
	reponse:wiki updater

Installation de l'app:
	creation du cli si pas fait et ng install @angular/materials
Description:
	Application qui devait etre un wiki personnel pour les boss de differents jeux pour savoir lesquels sont battus
	et etre un endroit facile d'acces pour l'info que tu veux stocker sur les boss qui t'interesse le plus