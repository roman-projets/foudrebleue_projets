function reload(reload) {
    if (reload === "dragon") {
        window.location.reload()
    }
}

let etat = 0

function texte() {
    const descipt = document.querySelector("#texte");
    if (etat === 0) {
        descipt.innerHTML = "<h1>Liste de mes mangas</h1><br> Bienvenue dans ma collection de mangas 😉📚 <br><br>  Ce projet développé en HTML regroupe tous les mangas que je possède actuellement. <br> Fan de Shônen, Shôjo, Seinen et bien d’autres univers ✨, <br>je lis un peu de tout selon mon humeur,<br> avec une petite préférence pour certains BL 👀.<br><br> Pour faciliter la navigation dans la collection, le site propose un moteur de recherche permettant de retrouver rapidement une série grâce à son titre. Tu peux également utiliser de nombreux systèmes de tri et de filtres afin d'afficher uniquement les mangas qui t'intéressent : <ul> <li>📖 Mangas lus, en cours de lecture ou à lire;</li> <li>🏷️ Tri par type(Shônen, Seinen, Shôjo, BL, Manhwa, etc.);</li> <li>🔠 Recherche et filtres complémentaires pour parcourir facilement toute la collection.</li> </ul> <br> Le site affiche également un compteur dynamique qui s'adapte automatiquement aux mangas visibles après chaque recherche ou filtre appliqué. Tu peux ainsi connaître en un coup d'œil le nombre de séries affichées ainsi que l'état de ta sélection. <br> <br>Tous les mangas que je possède sont répertoriés ici. Les séries affichées en gris correspondent aux mangas actuellement prêtés à des camarades. 🩶 <br> <br> Enfin, parce qu'une collection évolue constamment, une section est également dédiée aux mangas proposés à la vente, afin de suivre les séries dont je souhaite me séparer. 💸📚";
        etat = 0
    }
}

function defiler_droite() {
    const icône = document.querySelector("#icone")
    const lien = document.querySelector("#lien")
    const descipt = document.querySelector("#texte");
    if (etat === 0) {
        icône.src = "Symbole Alestia.jpg"
        lien.href = "https://foudrebleue-royaume-alestia.netlify.app"
        descipt.innerHTML = "<h1>Royaume d'Alestia</h1> <br>Ce projet est le fruit d’un long travail 😮‍💨, que je continue encore aujourd’hui à affiner pleinement. <br> <br> Tout est parti d’une idée simple: générer un personnage dans un style Cyberpunk. Le résultat m’a immédiatement marqué (un design stylé, une ambiance forte, un fond et des vêtements qui semblaient déjà raconter quelque chose 😊). <br> <br> Sans grande conviction au départ, j’ai commencé à lui donner une identité. Une version civile. Un passé. Puis, petit à petit, tout a dérapé dans le bon sens: l’imagination a pris le dessus. <br> <br> Une organisation criminelle est apparue. Des conflits ont commencé à se dessiner. Des enjeux plus grands, plus sombres, plus complexes aussi. Et sans m’en rendre compte, une branche entière d’un projet bien plus vaste (celui dont je suis le plus fier 😉) a commencé à prendre vie sous le nom d’un royaume: ''Alestia''. <br> <br> À partir de là, tout s’est construit presque naturellement: une histoire globale, un monde détaillé, des cartes, des lieux, des protagonistes, ainsi que des mystères qui pèsent sur Alestia et son équilibre fragile. <br> <br> Aujourd’hui encore, je continue à façonner cet univers, qui ne cesse d’évoluer.Un monde plein de potentiel, mêlant Cyber Punk et Monde Médiéval.  <br> <br> Identifiant : Valantin.Latin <br> Mot de Passe : 18/04/1999";
        etat = 1;
    }
    else if (etat === 1) {
        icône.src = "scene_harcelement.png"
        lien.href = "./Montage-Milésime K-Harcèlement.mp4"
        descipt.innerHTML = "<h1>Lutte contre le Harcèlement</h1> <h2>Harcèlement - Milésime-K</h2> <br>Il s’agit d’un montage vidéo que j’ai entièrement réalisé 📼. <br> <br> Comment m’est venue l’idée ? 💡 <br> J’écoute énormément de musique et 🎧, lorsque l’inspiration vient, je me lance dans le montage en me laissant guider uniquement par le son et les émotions qu’elle transmet.J’y ajoute ensuite les images, les vidéos, les textes et les effets afin de donner vie à ce que je ressens. <br> <br> La chanson utilisée est ''Harcèlement'' de Milésime K, sortie en 2023. Ce morceau engagé aborde le thème du harcèlement sous plusieurs formes, notamment scolaire et en ligne, à travers un ton introspectif et percutant.Il s’inscrit dans la démarche de l’artiste d’utiliser le rap comme vecteur de sensibilisation sociale. <br> <br> La production se distingue par une instrumentation sobre, dominée par des nappes de piano et des percussions feutrées, afin de mettre en avant le texte et le message.La chanson décrit les mécanismes du harcèlement et ses conséquences psychologiques, tout en appelant à une prise de conscience collective.Milésime K.alterne des passages narratifs et des phases plus percutantes, donnant une voix à ceux qui se sentent réduits au silence. <br> <br>Ce qui m’a particulièrement marqué avec cette musique, c’est justement le choix du rap pour traiter un sujet aussi lourd et triste.Je trouve cette approche assez originale et peu commune, car ce style musical est souvent associé à des thèmes très différents.Ici, le contraste entre l’énergie du rap et la gravité du sujet rend le message encore plus fort et marquant. <br> <br> À travers ce montage, j’ai voulu retranscrire ces émotions de la manière la plus sincère et immersive possible, en laissant la musique guider le rythme, les images et l’atmosphère générale de la vidéo.";
        etat = 2;
    }
    else if (etat === 2) {
        icône.src = "Tokyo Ghoul.jpg"
        lien.href = "https://foudrebleue-tokyo-ghoul.netlify.app"
        descipt.innerHTML = "<h1>Tokyo Ghoul - Ken Kaneki</h1> <br> J’ai découvert Tokyo Ghoul peu de temps après avoir commencé à regarder des animes 📺. J’ai immédiatement beaucoup apprécié cet univers, malgré les nombreuses critiques que l’anime reçoit souvent en comparaison du manga. N’ayant jamais lu ce dernier, je ne peux cependant pas réellement juger ces différences. 🤷🏼‍♂️ <br> <br> Même sans être particulièrement attaché au personnage de Ken Kaneki ou à son histoire, que l’on peut parfois considérer comme complexe voire floue, j’ai surtout été captivé par l’univers de l’œuvre, ses concepts et son ambiance. <br> <br> C’est dans cette optique que je me suis lancé dans la création d’un diaporama sous Microsoft PowerPoint regroupant différentes informations sur l’univers de Tokyo Ghoul 🖥️ 🖱️ ⌨️ 🎧. Celui-ci présente notamment plusieurs personnages importants, des concepts clés comme le CCG, les kagunes ou encore les rangs des goules, tout en intégrant également des vidéos et contenus multimédias autour des caractéristiques du héros et d’autres personnages. <br> <br> Le projet contient aussi des musiques, des présentations de formes de Ken Kaneki, ainsi que divers éléments permettant de mieux comprendre et explorer l’univers sombre et complexe de Tokyo Ghoul 🎼. Je tiens également à préciser que ce diaporama n’a en rien la prétention d’être exhaustif tant l’univers de Tokyo Ghoul est vaste et complexe. Il s’agit avant tout d’un projet personnel visant à présenter certains personnages, concepts et éléments marquants de l’œuvre. 📚 📖 <br> <br> Par ailleurs, le diaporama a été conçu de manière entièrement automatisée. Une fois le mode présentation lancé, il suffit simplement d’appuyer une première fois  sur une touche d’action depuis la diapositive noire d’introduction pour que l’ensemble du diaporama se déroule automatiquement, sans intervention supplémentaire de l’utilisateur.";
        etat = 3;
    }
    else if (etat === 3) {
        icône.src = "Couverture.webp"
        lien.href = "./Montage Mon Idole BlamS.mp4"
        descipt.innerHTML = "<h1>Mon Idole - BlamS </h1> <br> Il s’agit d’un montage vidéo que j’ai entièrement réalisé autour de Blam'S, un artiste dont j’apprécie particulièrement la musique. 🎬 <br><br> Comment m’est venue l’idée ? 💡 <br><br> Écoutant régulièrement ses morceaux, j’ai eu envie de réaliser un montage autour de son univers musical, en associant des extraits vidéo, des paroles et différents effets visuels. <br><br> Mon approche créative 🎨 <br><br> Pour ce projet, j’ai travaillé sur les transitions, les animations du texte et la synchronisation des éléments visuels avec la musique, afin de créer un montage dynamique et agréable à regarder. <br><br> Ce projet m’a permis de laisser libre cours à ma créativité tout en associant mon intérêt pour la musique à ma passion pour le montage vidéo.";
        etat = 4
    }
    else if (etat === 4) {
        icône.src = "kaien-haru.png"
        lien.href = "https://roman-projets.github.io/foudrebleue_kaienxharu/"
        descipt.innerHTML = "<h1>Kaien × Haru — Entre l'ombre et l'aube</h1> <br> <br>Entre l'ombre et l'aube est un projet de création d'un univers romantique inspiré de l'esthétique anime et du genre BL (Boys' Love). Il raconte l'histoire de Kaien, un jeune homme charismatique et protecteur, et de Haru, un garçon plus réservé et sensible. À travers leurs rencontres, leurs sentiments et les obstacles qui se dressent sur leur chemin, leur relation évolue entre tendresse, tensions et promesses. <br> <br> Ce projet associe narration originale, illustrations générées par IA et scènes animées afin de donner vie aux personnages et de proposer une expérience immersive. Le site web présente leur univers, leurs personnalités, leurs moments marquants et plusieurs scènes vidéo qui illustrent les étapes de leur histoire. <br> <br> Objectif : créer une expérience narrative interactive mêlant création artistique, storytelling et développement web, tout en explorant les possibilités de l'intelligence artificielle dans la conception d'un univers fictif.";
        etat = 5
    }
    else {
        icône.src = "Listes de mes mangas.avif"
        lien.href = "https://roman-projets.github.io/foudrebleue_manga/"
        descipt.innerHTML = `<h1>Liste de mes mangas</h1><br> Bienvenue dans ma collection de mangas 😉📚 <br><br>  Ce projet développé en HTML regroupe tous les mangas que je possède actuellement. <br> Fan de Shônen, Shôjo, Seinen et bien d’autres univers ✨, <br>je lis un peu de tout selon mon humeur,<br> avec une petite préférence pour certains BL 👀.<br><br> Pour faciliter la navigation dans la collection, le site propose un moteur de recherche permettant de retrouver rapidement une série grâce à son titre. Tu peux également utiliser de nombreux systèmes de tri et de filtres afin d'afficher uniquement les mangas qui t'intéressent : <ul> <li>📖 Mangas lus, en cours de lecture ou à lire;</li> <li>🏷️ Tri par type(Shônen, Seinen, Shôjo, BL, Manhwa, etc.);</li> <li>🔠 Recherche et filtres complémentaires pour parcourir facilement toute la collection.</li> </ul> <br> Le site affiche également un compteur dynamique qui s'adapte automatiquement aux mangas visibles après chaque recherche ou filtre appliqué. Tu peux ainsi connaître en un coup d'œil le nombre de séries affichées ainsi que l'état de ta sélection. <br> <br>Tous les mangas que je possède sont répertoriés ici. Les séries affichées en gris correspondent aux mangas actuellement prêtés à des camarades. 🩶 <br> <br> Enfin, parce qu'une collection évolue constamment, une section est également dédiée aux mangas proposés à la vente, afin de suivre les séries dont je souhaite me séparer. 💸📚";`
        etat = 0
    }

}

function defiler_gauche() {
    const icône = document.querySelector("#icone")
    const lien = document.querySelector("#lien")
    const descipt = document.querySelector("#texte");
    if (etat === 0) {
        icône.src = "kaien-haru.png"
        lien.href = "https://roman-projets.github.io/foudrebleue_kaienxharu/"
        descipt.innerHTML = "<h1>Kaien × Haru — Entre l'ombre et l'aube</h1> <br> <br>Entre l'ombre et l'aube est un projet de création d'un univers romantique inspiré de l'esthétique anime et du genre BL (Boys' Love). Il raconte l'histoire de Kaien, un jeune homme charismatique et protecteur, et de Haru, un garçon plus réservé et sensible. À travers leurs rencontres, leurs sentiments et les obstacles qui se dressent sur leur chemin, leur relation évolue entre tendresse, tensions et promesses. <br> <br> Ce projet associe narration originale, illustrations générées par IA et scènes animées afin de donner vie aux personnages et de proposer une expérience immersive. Le site web présente leur univers, leurs personnalités, leurs moments marquants et plusieurs scènes vidéo qui illustrent les étapes de leur histoire. <br> <br> Objectif : créer une expérience narrative interactive mêlant création artistique, storytelling et développement web, tout en explorant les possibilités de l'intelligence artificielle dans la conception d'un univers fictif.";
        etat = 5
    }
    else if (etat === 5) {
        icône.src = "Couverture.webp"
        lien.href = "./Montage Mon Idole BlamS.mp4"
        descipt.innerHTML = "<h1>Mon Idole - BlamS </h1> <br> Il s’agit d’un montage vidéo que j’ai entièrement réalisé autour de Blam'S, un artiste dont j’apprécie particulièrement la musique. 🎬 <br><br> Comment m’est venue l’idée ? 💡 <br><br> Écoutant régulièrement ses morceaux, j’ai eu envie de réaliser un montage autour de son univers musical, en associant des extraits vidéo, des paroles et différents effets visuels. <br><br> Mon approche créative 🎨 <br><br> Pour ce projet, j’ai travaillé sur les transitions, les animations du texte et la synchronisation des éléments visuels avec la musique, afin de créer un montage dynamique et agréable à regarder. <br><br> Ce projet m’a permis de laisser libre cours à ma créativité tout en associant mon intérêt pour la musique à ma passion pour le montage vidéo.";
        etat = 4;
    }
    else if (etat === 4) {
        icône.src = "Tokyo Ghoul.jpg"
        lien.href = "https://foudrebleue-tokyo-ghoul.netlify.app"
        descipt.innerHTML = "<h1>Tokyo Ghoul - Ken Kaneki</h1> <br> J’ai découvert Tokyo Ghoul peu de temps après avoir commencé à regarder des animes 📺. J’ai immédiatement beaucoup apprécié cet univers, malgré les nombreuses critiques que l’anime reçoit souvent en comparaison du manga. N’ayant jamais lu ce dernier, je ne peux cependant pas réellement juger ces différences. 🤷🏼‍♂️ <br> <br> Même sans être particulièrement attaché au personnage de Ken Kaneki ou à son histoire, que l’on peut parfois considérer comme complexe voire floue, j’ai surtout été captivé par l’univers de l’œuvre, ses concepts et son ambiance. <br> <br> C’est dans cette optique que je me suis lancé dans la création d’un diaporama sous Microsoft PowerPoint regroupant différentes informations sur l’univers de Tokyo Ghoul 🖥️ 🖱️ ⌨️ 🎧. Celui-ci présente notamment plusieurs personnages importants, des concepts clés comme le CCG, les kagunes ou encore les rangs des goules, tout en intégrant également des vidéos et contenus multimédias autour des caractéristiques du héros et d’autres personnages. <br> <br> Le projet contient aussi des musiques, des présentations de formes de Ken Kaneki, ainsi que divers éléments permettant de mieux comprendre et explorer l’univers sombre et complexe de Tokyo Ghoul 🎼. Je tiens également à préciser que ce diaporama n’a en rien la prétention d’être exhaustif tant l’univers de Tokyo Ghoul est vaste et complexe. Il s’agit avant tout d’un projet personnel visant à présenter certains personnages, concepts et éléments marquants de l’œuvre. 📚 📖 <br> <br> Par ailleurs, le diaporama a été conçu de manière entièrement automatisée. Une fois le mode présentation lancé, il suffit simplement d’appuyer une première fois  sur une touche d’action depuis la diapositive noire d’introduction pour que l’ensemble du diaporama se déroule automatiquement, sans intervention supplémentaire de l’utilisateur.";
        etat = 3;
    }
    else if (etat === 3) {
        icône.src = "scene_harcelement.png"
        lien.href = "./Montage-Milésime K-Harcèlement.mp4"
        descipt.innerHTML = "<h1>Lutte contre le Harcèlement</h1> <h2>Harcèlement - Milésime-K</h2> <br>Il s’agit d’un montage vidéo que j’ai entièrement réalisé 📼. <br> <br> Comment m’est venue l’idée ? 💡 <br> J’écoute énormément de musique et 🎧, lorsque l’inspiration vient, je me lance dans le montage en me laissant guider uniquement par le son et les émotions qu’elle transmet.J’y ajoute ensuite les images, les vidéos, les textes et les effets afin de donner vie à ce que je ressens. <br> <br> La chanson utilisée est ''Harcèlement'' de Milésime K, sortie en 2023. Ce morceau engagé aborde le thème du harcèlement sous plusieurs formes, notamment scolaire et en ligne, à travers un ton introspectif et percutant.Il s’inscrit dans la démarche de l’artiste d’utiliser le rap comme vecteur de sensibilisation sociale. <br> <br> La production se distingue par une instrumentation sobre, dominée par des nappes de piano et des percussions feutrées, afin de mettre en avant le texte et le message.La chanson décrit les mécanismes du harcèlement et ses conséquences psychologiques, tout en appelant à une prise de conscience collective.Milésime K.alterne des passages narratifs et des phases plus percutantes, donnant une voix à ceux qui se sentent réduits au silence. <br> <br>Ce qui m’a particulièrement marqué avec cette musique, c’est justement le choix du rap pour traiter un sujet aussi lourd et triste.Je trouve cette approche assez originale et peu commune, car ce style musical est souvent associé à des thèmes très différents.Ici, le contraste entre l’énergie du rap et la gravité du sujet rend le message encore plus fort et marquant. <br> <br> À travers ce montage, j’ai voulu retranscrire ces émotions de la manière la plus sincère et immersive possible, en laissant la musique guider le rythme, les images et l’atmosphère générale de la vidéo.";
        etat = 2;
    }
    else if (etat === 2) {
        icône.src = "Symbole Alestia.jpg"
        lien.href = "https://foudrebleue-royaume-alestia.netlify.app"
        descipt.innerHTML = "<h1>Royaume d'Alestia</h1> <br>Ce projet est le fruit d’un long travail 😮‍💨, que je continue encore aujourd’hui à affiner pleinement. <br> <br> Tout est parti d’une idée simple: générer un personnage dans un style Cyberpunk. Le résultat m’a immédiatement marqué (un design stylé, une ambiance forte, un fond et des vêtements qui semblaient déjà raconter quelque chose 😊). <br> <br> Sans grande conviction au départ, j’ai commencé à lui donner une identité. Une version civile. Un passé. Puis, petit à petit, tout a dérapé dans le bon sens: l’imagination a pris le dessus. <br> <br> Une organisation criminelle est apparue. Des conflits ont commencé à se dessiner. Des enjeux plus grands, plus sombres, plus complexes aussi. Et sans m’en rendre compte, une branche entière d’un projet bien plus vaste (celui dont je suis le plus fier 😉) a commencé à prendre vie sous le nom d’un royaume: ''Alestia''. <br> <br> À partir de là, tout s’est construit presque naturellement: une histoire globale, un monde détaillé, des cartes, des lieux, des protagonistes, ainsi que des mystères qui pèsent sur Alestia et son équilibre fragile. <br> <br> Aujourd’hui encore, je continue à façonner cet univers, qui ne cesse d’évoluer.Un monde plein de potentiel, mêlant Cyber Punk et Monde Médiéval.  <br> <br> Identifiant : Valantin.Latin <br> Mot de Passe : 18/04/1999";
        etat = 1;
    }
    else if (etat === 1) {
        icône.src = "Listes de mes mangas.avif"
        lien.href = "https://roman-projets.github.io/foudrebleue_manga/"
        descipt.innerHTML = `<h1>Liste de mes mangas</h1><br> Bienvenue dans ma collection de mangas 😉📚 <br><br>  Ce projet développé en HTML regroupe tous les mangas que je possède actuellement. <br> Fan de Shônen, Shôjo, Seinen et bien d’autres univers ✨, <br>je lis un peu de tout selon mon humeur,<br> avec une petite préférence pour certains BL 👀.<br><br> Pour faciliter la navigation dans la collection, le site propose un moteur de recherche permettant de retrouver rapidement une série grâce à son titre. Tu peux également utiliser de nombreux systèmes de tri et de filtres afin d'afficher uniquement les mangas qui t'intéressent : <ul> <li>📖 Mangas lus, en cours de lecture ou à lire;</li> <li>🏷️ Tri par type(Shônen, Seinen, Shôjo, BL, Manhwa, etc.);</li> <li>🔠 Recherche et filtres complémentaires pour parcourir facilement toute la collection.</li> </ul> <br> Le site affiche également un compteur dynamique qui s'adapte automatiquement aux mangas visibles après chaque recherche ou filtre appliqué. Tu peux ainsi connaître en un coup d'œil le nombre de séries affichées ainsi que l'état de ta sélection. <br> <br>Tous les mangas que je possède sont répertoriés ici. Les séries affichées en gris correspondent aux mangas actuellement prêtés à des camarades. 🩶 <br> <br> Enfin, parce qu'une collection évolue constamment, une section est également dédiée aux mangas proposés à la vente, afin de suivre les séries dont je souhaite me séparer. 💸📚";`
        etat = 0
    }
}

const modal = document.getElementById("moi");
const dialog = document.getElementById("dialog");
const croix = document.getElementById("croix");

modal.addEventListener("click", () => {
    dialog.showModal();
});

croix.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});
