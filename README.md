# svelte-dsfr

**svelte-dsfr** vise un portage en [Sveltekit](https://kit.svelte.dev/) du
[Système de Design Français](https://www.systeme-de-design.gouv.fr/) (ou DSFR) sous forme de bibliothèque de composants.

La démarche est très inspirée de [vue-dsfr](https://github.com/dnum-mi/vue-dsfr) par @laruiss (merci!), dont la qualité de la construction nous permet une reproduction à 90% par simple portage des composants de Vue en Svelte.

## Intention d'architecture logicielle

### Objectifs

- articulation maximale au dsfr
- modularité (possiblité de ne pas tout importer)
- tests unitaires
- test ui
- tests visuels de composants (pour ux/ui)

### Choix

- build: sveltekit + vite
- langage: typescript
- icônes: remix-icon via @iconify/svelte
- css & fontes: inclusion via postcss (éviter le css hardcodé)
- tests unitaires : jest
- component explorer: Storybook
- tests ui: playwright
- tests accessibilité: axe-playwright ou pa11y ?

## Etapes

1. Porter les composants coeurs: Buttons, Inputs, Header, Forms
   C'est le package minimal pour faire un site !

- Les icônes sont un prérequis.
- Cette première étape est une "recopie" des composants `vue-dsfr`. Elle vise à valider la démarche de portage, notamment les problèmes de routeurs qui seront peut être repoussés
- L'objectif est de faire une mini demo.

2. Offrir en composant à une application tierce

- Le scaffolding css doit être ajouté en plus à cette étape.
- MVP: portage [judilibre-stats](https://github.com/Cour-de-cassation/judilibre-stats)
- POC: portage [deces-ui](https://github.com/matchID/deces-ui) (beaucoup plus d'impact)

3. Généraliser la réutilisation

- étendre à l'ensemble des composants de la lib dsfr
- ajouter les tests unitaires
- ajouter l'exploration des composants
- ajouter les tests ui
- doc pour contributeurs et ré-utilisateurs
- versionning
- github ci

## Contribs

A ce stade c'est limité (car pas assez documenté), mais toute contrib est la bienvenue. Je ne suis pas un guru des libs Svelte.
Nous sommes à l'étape 1, j'imagine que la possiblité de contrib sera documentée à l'étape 3, avant il vous vaudra de l'huile de coude.
