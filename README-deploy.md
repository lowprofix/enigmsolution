# Guide de déploiement sur Vercel

Ce document explique comment déployer l'application Enigm Solution sur la plateforme Vercel.

## Prérequis

- Un compte sur [Vercel](https://vercel.com)
- Un compte GitHub lié à votre compte Vercel
- Le dépôt GitHub du projet accessible

## Étapes de déploiement

### 1. Importer le projet sur Vercel

1. Connectez-vous à votre compte Vercel
2. Cliquez sur "Add New..." puis "Project"
3. Sélectionnez le dépôt GitHub "enigmsolution"
4. Cliquez sur "Import"

### 2. Configuration du projet

Dans l'interface de configuration du projet, vérifiez les paramètres suivants :

- **Framework Preset**: Next.js
- **Build Command**: `pnpm build` (déjà défini dans vercel.json)
- **Output Directory**: `.next` (défini automatiquement)
- **Install Command**: `pnpm install` (déjà défini dans vercel.json)

### 3. Variables d'environnement

Ajoutez les variables d'environnement nécessaires :

- `NEXT_PUBLIC_APP_URL` : URL de votre application
- Toutes les autres variables répertoriées dans le fichier `.env.example`

### 4. Déploiement

Cliquez sur "Deploy" pour lancer le déploiement.

## Déploiements ultérieurs

Après le déploiement initial, tout commit sur la branche principale (`master`) déclenchera automatiquement un nouveau déploiement.

## Personnalisation du domaine

Pour configurer un domaine personnalisé :

1. Dans le tableau de bord Vercel, accédez au projet
2. Cliquez sur "Settings" puis "Domains"
3. Ajoutez votre domaine et suivez les instructions pour configurer les DNS

## Environnements de prévisualisation

Vercel crée automatiquement des environnements de prévisualisation pour chaque Pull Request. Utilisez-les pour tester les modifications avant de les fusionner dans la branche principale.

## Support

Pour toute question sur le déploiement, consultez :

- La [documentation Vercel](https://vercel.com/docs)
- La [documentation Next.js](https://nextjs.org/docs/deployment)
