export class ResumeService{
  constructor(){
    'ngInject';
  }


  getSchools(){
    return[
      {
        "year":"2012",
        "description": "Formation Développement Web",
        "place": "F2I Vincennes"
      },
      {
        "year":"2011",
        "description": "Etude programmation de jeu vidéo",
        "place": "Créajeux Nimes"
      },
      {
        "year":"2009",
        "description": "BTS IRIS (Informatique et Reseaux pour les Industries et les Services)",
        "place": "Proméo Formation Compiègnes"
      }
    ];
  }

  getSkills(){
    return[
      {
        "name": "languages",
        "words": [
          "javascript",
          "Java(Android)",
          "C#",
          "C/C++"
        ]
      },
      {
        "name": "Frameworks",
        "words":[
          "AngularJS",
          "Angular2"
        ]
      },
      {
        "name": "Dev tools",
        "words":[
          "GIT",
          "SVN",
          "gradle"
        ]
      },
      {
        "name": "IDE",
        "words":[
          "Android Studio",
          "Visual Studio"
        ]
<<<<<<< HEAD
      }
=======
      },
>>>>>>> e848fb80b5c0a681f68c10484b06fd7c5e852825
    ];
  }

  getExp(){
    return[
      {
        "company":"AdaptiveBee",
        "position": "Développeur Javascript",
        "time": "Janvier 2016 - Octobre 2016",
        "description": "AdaptiveBee est une société d’édition logiciel qui développe un " +
        "navigateur web à partir du code source du navigateur google : "+
        "Chrome.Ma mission pour ce poste consistait à créer ou mettre à jour les extensions"+
        "Chrome installées directement dans ce navigateur afin de gérer l’expérience utilisateur."+
        "Lorsqu’une extension affiche un résultat pour l’utilisateur, l’extension est créer à l’aide d’angularJS."
      },
      {
        "company":"SIEN",
        "position": "Développeur Web et Android",
        "time": "Janvier 2013 - Decembre 2015",
        "description": "SIEN est une société d’édition logiciel. Dans un premier temps, pendant près d’un an, j’ai travaillé sur un projet d’app Chrome : Yappyz. Yappyz était une app développée en Javascript et AngularJS 1.3. Ma mission consistait à afficher une liste de jeux à l’utilisateur avec AngularJS en fonction de ce que renvoyait une API en JSON. SIEN a ensuite lancé un projet de Launcher Android sur lequel j’ai travaillé deux ans : UR Launcher. Pour ce projet, je devais créer un Launcher à partir du code source du Launcher de Google et y implémenter les features de URLauncher : searchbar avec suggestions de contacts, store permettant l’installation d’app et de nouveaux wallpapers, gerstion de triggers permettant le lancement d’app en fonction d’inputs utilisateurs (par exemple si l’utilisateur est connecté au wifi de son travail, lancer une app comme gmail)."
},
      {
        "company":"Yamago",
        "position": "Développeur Flash",
        "time": "Janvier 2012 - Juin 2012",
        "description": "Yamago est une entreprise d’édition de jeux flash pour des entreprises telles que Disney ou Cartoon Network. Ma mission fut la création du jeu « Tron : Escape from Argon city » en utilisant le moteur de jeu de Yamago. Mes principales missions étaient : Implémentation du comportement des ennemis (AI), implémentation d’algorithme physique (rebond d’objets avec angle réaliste), implémentation du gameplay (mouvement, saut, tir …). "
<<<<<<< HEAD
      }
=======
      },
>>>>>>> e848fb80b5c0a681f68c10484b06fd7c5e852825
    ];
  }
}
