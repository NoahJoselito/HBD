# 🎉 Site d'Anniversaire Romantique

Bienvenue ! Ce site d'anniversaire interactif a été créé avec amour pour célébrer ce jour spécial ! ❤️

## 📱 Comment ça fonctionne ?

Le site se compose de **4 pages interactives** :

### Page 1 - 🎬 Écran Surprise
- Fond romantique animé
- Texte qui apparaît lentement
- Clique sur "Suivant" pour continuer

### Page 2 - 🎂 Joyeux Anniversaire
- Texte animé avec effet de zoom
- Confettis qui explosent
- Ballons colorés qui montent
- Cœurs qui flottent
- Message personnalisé

### Page 3 - 📸 Galerie Photo
- Slider de photos avec effet 3D
- Animation de zoom en entrée
- Messages personnalisés
- Navigation par flèches ou points

### Page 4 - 💌 Lettre Personnelle
- Lettre qui s'ouvre avec animation 3D
- Messages de gratitude
- Cœurs animés
- Fin romantique

## 🖼️ Comment ajouter vos photos ?

1. Placez vos photos dans le dossier `images/`
2. Ouvrez le fichier `script.js`
3. Trouvez la section **Page 3 - Galerie** (ligne ~180)
4. Modifiez le tableau `photos` :

```javascript
const photos = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    // Ajoutez vos photos ici
];
```

## 🎵 Comment ajouter une musique romantique ?

1. Placez un fichier audio MP3 dans `images/music/` avec le nom `romantic.mp3`
2. Ou modifiez le chemin dans `index.html` ligne 420 :

```html
<audio id="music" autoplay loop>
    <source src="images/music/votre-musique.mp3" type="audio/mpeg">
</audio>
```

### Suggestions de musique :
- 🎹 Musique piano classique
- 💕 Chansons romantiques
- 🌙 Musique ambiante relaxante

**Conseil** : Utilisez une musique sans droits d'auteur (YouTube Audio Library, Pixabay Music, etc.)

## ✏️ Comment personnaliser le texte ?

Ouvrez `index.html` et modifiez :

### Page 1 - Surprise
```html
<p class="surprise-text">Votre texte ici</p>
```

### Page 2 - Joyeux Anniversaire
```html
<h1 class="birthday-text">🎉 Votre texte ici ❤️</h1>
<p class="birthday-message">Votre message ici</p>
```

### Page 3 - Galerie
```html
<p class="gallery-message">Votre message ici</p>
```

### Page 4 - Lettre
```html
<p>Vos lignes de gratitude ici</p>
```

## 🚀 Comment ouvrir le site ?

1. Double-cliquez sur `index.html`
2. Ou clic droit → "Ouvrir avec" → Navigateur
3. Le site s'ouvrira dans votre navigateur par défaut

## 📱 Générer un QR Code

Pour créer un QR Code vers ce site :

1. Uploadez le dossier sur un serveur web (Vercel, Netlify, GitHub Pages, etc.)
2. Allez sur https://qr-code-generator.com
3. Entrez l'URL de votre site
4. Générateur le QR Code
5. Partagez le QR Code !

### Option simple (localhost) :
```powershell
# Ouvrir un serveur local en PowerShell
cd c:\Users\noahjoselito\Downloads\HBD
python -m http.server 8000

# Puis ouvrez http://localhost:8000 dans votre navigateur
# Et générez un QR Code avec cette URL
```

## 🎨 Technologie Utilisée

✨ **HTML5** - Structure
🎨 **CSS3** - Design et animations
⚡ **JavaScript** - Interactivité
📚 **Libraires** :
- **Tailwind CSS** - Design moderne
- **GSAP** - Animations fluides
- **Swiper** - Galerie de photos
- **Canvas Confetti** - Confettis réalistes

## 🔧 Fichiers du projet

```
HBD/
├── index.html          # Structure HTML principale
├── script.js           # Logique JavaScript
├── style.xss           # (À supprimer ou remplacer)
├── images/
│   └── music/
│       └── romantic.mp3  # Votre musique
└── README.md           # Ce fichier
```

## 💡 Conseils pour plus de romantisme

1. **Ajoutez plus de photos** - Au moins 8-10 photos fonctionnent mieux
2. **Musique de qualité** - Choisissez une musique qui vous représente
3. **Éclairage** - Regardez-le dans un endroit calme et bien éclairé
4. **Mobile** - Le site fonctionne parfaitement sur mobile aussi !
5. **Surprise** - Lancez-le d'une manière inattendue (via QR Code!)

## ❌ Dépannage

### Les photos ne s'affichent pas
- Vérifiez le chemin des images
- Les fichiers d'images doivent être en JPG, PNG, ou WEBP
- Assurez-vous que le nom du fichier est correct

### La musique ne joue pas
- Vérifiez le fichier audio (format MP3)
- Vérifiez le chemin `images/music/romantic.mp3`
- Certains navigateurs bloquent la lecture automatique - l'utilisateur peut cliquer pour lancer

### Les animations ne fonctionnent pas
- Videz le cache du navigateur (Ctrl+Shift+Delete)
- Ouvrez en mode incognito
- Vérifiez que JavaScript est activé

## 🎁 Derniers conseils

- Testez le site complètement avant de le partager
- Assurez-vous que toutes les images sont de bonne qualité
- Vérifiez les orthographes et messages personnalisés
- Engagez-vous pleinement avec la musique et les animations

---

**Fait avec ❤️ pour rendre ce jour très spécial!**

Joyeux Anniversaire! 🎉🎈🎂❤️