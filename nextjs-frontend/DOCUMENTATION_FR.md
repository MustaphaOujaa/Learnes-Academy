# Documentation Technique - Little Learners Academy

Ce document regroupe les informations essentielles pour la maintenance et l'évolution de la plateforme.

## 1. Vue d'ensemble
Le projet est une application web moderne développée pour une académie éducative. Il repose sur le framework **Next.js** pour assurer des performances optimales et un référencement naturel efficace.

## 2. Architecture Logicielle

### Stack Principale
*   **Framework** : Next.js 16 (App Router)
*   **Langage** : TypeScript
*   **Style** : Tailwind CSS
*   **Gestion de contenu** : Composants modulaires réutilisables

### Organisation du Code
Le répertoire `src/app` gère la structure des pages et le routage. Les composants UI sont centralisés dans `src/components`, classés par fonctionnalité pour faciliter la maintenance.

## 3. Identité Visuelle (Design System)

L'interface adopte un style "Neo-brutaliste" caractérisé par :
*   Des bordures marquées en noir profond (`#1A1A1A`).
*   Des jeux d'ombres franches pour donner du relief aux éléments.
*   Une palette de couleurs contrastée alliant des tons beiges (`#FFF5F0`) et des accents orangés (`#FFB085`).

## 4. Maintenance
Les formulaires de contact sont intégrés via Web3Forms, permettant une gestion des messages sans infrastructure serveur additionnelle. Pour toute mise à jour des contenus, il suffit de modifier les composants correspondants dans le dossier `components`.
