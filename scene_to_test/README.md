# Scènes Sweetlight à tester

Les 39 fichiers `.scex` sont générés pour la configuration réellement présente dans `C:\Downloads\Full - Prod`. Chaque scène contient uniquement les fixtures qui ont au moins une valeur active dans un step ; les fixtures jamais utilisés sont exclus.

## Cartographie utilisée

- Spots `1` à `6` (`1000000001`–`1000000006`) : `1–3` devant la scène, `4–6` derrière ; canaux dimmer/RGB.
- Lyres `1` à `4` (`1000000007`–`1000000010`) : mouvements pan/tilt.
- Blinders `1` à `20` (`1000000011`–`1000000030`) : deux barres de 10, une par côté ; canal dimmer.
- Hybrid Beam `1` à `56` (`1000000031`–`1000000128`) : quatre barres de 14 verticales ; canal white.
- Hybrid RVB `1` à `56` (`1000000045`–`1000000142`) : quatre barres de 14 verticales ; canaux RGB.

Les scènes utilisent plusieurs steps interpolés pour chaque transition. Les scènes de barres parcourent les pixels dans l’ordre de chaque barre de 14, et les scènes de blinders distinguent les deux groupes de 10.

## Catalogue

01–05 : effets principaux (propagation RVB, éventail lyres, contraste avant/arrière, double impact blinder, drop complet).

06–11 : effets Hybrid RVB/Beam (wave verticale, miroir, chase couleur + beam, respiration, pixel rain, groupes alternés).

12–17 : mouvements de lyres (convergence, balayage public, opposition, huit, battement, miroir).

18–21 : effets des spots (crossfade avant/arrière, couleurs complémentaires, dégradé, silhouette).

22–25 : effets blinders (centre/extérieur, gauche/droite, montée, accent avec beams).

26–29 : ambiances complètes (intro, build-up, break calme, finale).

30–34 : nouveaux effets appariés, avec une version Hybrid RVB et la même chorégraphie en Hybrid Beam : balayage vertical, miroir extérieur vers centre, chase par barres alternées, météore avec traîne et scintillement diamant. Ces nouvelles scènes utilisent de nombreux steps interpolés pour obtenir des mouvements continus.

Importer les scènes dans une copie du projet Sweetlight avant le test en production.
