# Changelog

## Version 1.1.0
### Ajouts
- Changement au niveau de la gestion de la base de donnée vers Sequelize
- Ajout d'un panel d'administration
  - Configuration des options du site
  - Liste des vidéos en attentes et en traitement
  - Statistiques
- Page d'explication en cas de mauvais CSRF
- Sécurité anti spam (CSRF et vérification de certains paramètres de duplication)
- Footer définit grâce à un partial
- Ajout de l'upload directement sur Youtube
  - Activable/désactivable depuis l'admin
  - Configuration des clés d'accès dans le .env
  - Génération automatique du titre et de la description
  - Connection via le compte Google
  - Ajout d'une politique de confidentialité

### Correction
- Définition du transporteur NodeMailer juste avant l'envoit du mail
- Clé d'API de Google Font Personalisable