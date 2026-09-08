V.2026.08.07
# MidiXXX

MidiXXX est une interface web de contrôle MIDI destinée à piloter un environnement audio et lumière depuis un navigateur. Elle transforme des boutons, pages, expressions et macros en messages MIDI, avec notamment des configurations pour Quad Cortex, Reaper, APC et Sweetlight.

## Fonctionnalités

- pages de contrôle personnalisables et navigation entre pages ;
- actions MIDI `CC`, `PC`, `NoteOn` et `NoteOff` ;
- apprentissage de messages MIDI entrants ;
- déclencheurs clavier et MIDI ;
- expressions, LFO, macros, boutons liés et conditions ;
- profils de configuration et export manuel en `MidiXXX_Save.json` ;
- mode lumière pour piloter Sweetlight ;
- synchronisation d’une instance cliente avec une instance principale via PeerJS ;
- bouton « Panic » pour envoyer un arrêt des notes MIDI.

## Prérequis

- un navigateur compatible Web MIDI, de préférence Chromium/Google Chrome ou Microsoft Edge ;
- les périphériques MIDI branchés et accessibles par le navigateur ;
- un serveur HTTP local ou distant.

L’application ne doit pas être ouverte directement en `file://` : elle charge plusieurs scripts locaux et demande l’accès aux périphériques MIDI via `WebMidi`.

## Démarrage local

Le dépôt ne contient ni `package.json`, ni étape de compilation. Il peut donc être servi tel quel par n’importe quel serveur de fichiers statiques.

Par exemple, avec Python :

```powershell
python -m http.server 8000
```

Puis ouvrir [http://localhost:8000/index.html](http://localhost:8000/index.html) dans un navigateur compatible Web MIDI et autoriser l’accès MIDI lorsqu’il est demandé.

### Synchronisation maître/miroir hors ligne

Pour utiliser plusieurs navigateurs sur le même réseau sans Internet, le dépôt contient un serveur local qui sert les fichiers et relaie les messages entre les navigateurs.

Installer la dépendance une fois, lorsque Python peut accéder au paquet :

```powershell
py -m pip install -r requirements.txt
```

Puis, sur l’ordinateur maître :

```powershell
py server.py
```

Ouvrir ensuite le maître avec `http://<IP-DU-PC>:8000/index.html?role=master` et les miroirs avec `http://<IP-DU-PC>:8000/index.html?role=mirror`. Le maître est le seul navigateur qui demande l’accès aux périphériques MIDI. Le serveur local utilise le port HTTP `8000` et le port WebSocket `8765` ; ces ports doivent être autorisés dans le pare-feu Windows.

Le dépôt contient également `install/Simple-Web-Server-Installer-1.2.11-x64.exe`, un installateur Windows fourni pour servir des fichiers localement. Il n’est pas nécessaire si un autre serveur HTTP est déjà disponible.

## Modes d’accès

Le mode est sélectionné à partir de l’URL :

| URL | Usage |
| --- | --- |
| `/index.html` | Interface principale avec le profil audio/MIDI par défaut |
| `/index.html?light` | Interface de contrôle lumière basée sur Sweetlight |
| `/index.html?page=1` | Ouvre directement la page dont l’identifiant est fourni |
| `/index.html?client=true` | Instance cliente PeerJS synchronisée avec l’instance principale |

Les paramètres peuvent être combinés selon le besoin, par exemple `/index.html?light&page=0`. Le mode lumière et le mode page sont interprétés par la présence de leur nom dans l’URL.

## Utilisation

1. Brancher les contrôleurs et équipements MIDI.
2. Ouvrir l’application et sélectionner les entrées/sorties MIDI dans les paramètres.
3. Vérifier les noms des périphériques configurés dans le profil. Les correspondances sont basées sur les noms des ports MIDI.
4. Utiliser les pages et boutons pour envoyer les messages MIDI.
5. Pour créer une commande, ouvrir l’édition d’un bouton ou d’une page, ajouter une action ou un déclencheur, puis enregistrer.
6. Utiliser `Learn` pour capturer un message MIDI entrant et `Send` pour tester un message.
7. Exporter régulièrement la configuration avec `Save`, qui télécharge `MidiXXX_Save.json`.

## Architecture du dépôt

```text
index.html                  Interface et templates HTML
css/                        Styles de l’application
scripts/
  main.js                   Initialisation et profils audio/MIDI
  class.js                  Modèle des profils, pages, boutons et messages
  midi.js                   Envoi, réception et apprentissage MIDI
  ui.js                     Construction et comportement de l’interface
  validator.js              Validation des formulaires de configuration
  db.js                     Lecture/écriture du profil dans localStorage
  peer.js                   Synchronisation PeerJS entre instances
  tools.js                  Utilitaires, journalisation et export
  dist/                     Bibliothèques JavaScript embarquées
  light/                    Profil et configuration du mode Sweetlight
midi.txt                    Table de correspondance MIDI documentée
todo.txt                    Bugs et tâches connus
install/                    Outil Windows de serveur web local
```

Les bibliothèques tierces actuellement embarquées dans `scripts/dist/` comprennent WebMidi, PeerJS et LFO. L’application les charge directement depuis `index.html` ; aucune installation npm n’est requise.

## Configuration MIDI intégrée

Le profil audio par défaut contient notamment les alias suivants :

- `Quad Cortex` ;
- `Reaper` et `FromReaper` ;
- `Chocolate` ;
- `APC Buttons`.

Le profil lumière utilise `Sweetlight`, avec une configuration de boutons et de canaux définie dans `scripts/light/mainLight.js` et `scripts/light/lightconfig.js`. Les noms réels des ports peuvent différer selon le système : ils doivent être sélectionnés ou adaptés dans l’interface.

La table détaillée des contrôleurs et canaux est conservée dans [`midi.txt`](midi.txt).

## Données et profils

Les profils sont représentés en JavaScript par `Profile`, `MidiXPage`, `MidiXItem`, `MidiXAction` et `MidiXMessage`. La fonction `SaveDb("profiles", ...)` écrit les données sous la clé `profiles` de `localStorage`, tandis que l’export utilisateur produit un fichier JSON téléchargeable.

À noter : dans l’état actuel du code, `RetrieveProfile()` n’appelle plus `GetDb("profiles")` ; au démarrage, l’application reconstruit donc le profil par défaut au lieu de restaurer automatiquement le profil sauvegardé dans `localStorage`. Pour changer durablement la configuration, conserver un export JSON et traiter cette restauration avant de s’appuyer dessus en production.

## Développement

Les fichiers JavaScript et CSS sont exécutés directement par le navigateur. Après une modification, recharger la page en vidant éventuellement le cache, car `index.html` ajoute des suffixes de requête aux scripts et feuilles de style pour forcer leur renouvellement.

Il n’y a pas de tests automatisés ni de pipeline de build présents dans le dépôt. La validation pratique consiste à ouvrir l’application dans le navigateur, vérifier la détection des ports MIDI, tester l’envoi et la réception de messages, puis vérifier les modes utilisés.

## Points d’attention

- Les droits d’accès MIDI sont accordés par le navigateur et peuvent être révoqués.
- Les noms de ports MIDI sont importants pour la résolution des périphériques.
- Une instance PeerJS principale utilise l’identifiant `MidiXXXPeer`; une instance cliente se connecte avec `?client=true`.
- Les données d’exploitation et les profils peuvent contenir une configuration spécifique au matériel local : ne pas partager d’export sans le vérifier.
- Les bugs et travaux connus sont listés dans [`todo.txt`](todo.txt).

## Licence

Aucun fichier de licence n’est présent dans ce dépôt. Les conditions de réutilisation restent donc à préciser par le propriétaire du projet.
