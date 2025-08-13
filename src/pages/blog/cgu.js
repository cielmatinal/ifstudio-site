import React from 'react';

export default function CGU() {
  return (
    <main style={{maxWidth: 900, margin: '60px auto', padding: '0 20px', lineHeight: 1.6}}>
      <h1>Conditions Générales d’Utilisation</h1>
      <p><strong>Éditeur :</strong> IF Studio — contact : cielmatinal@gmail.com</p>
      <h2>1. Objet</h2>
      <p>Les présentes CGU encadrent l’accès et l’utilisation du site et des contenus proposés par IF Studio.</p>
      <h2>2. Propriété intellectuelle</h2>
      <p>Tous les contenus (textes, images, sons, vidéos) restent la propriété d’IF Studio, sauf mention contraire.</p>
      <h2>3. Usage</h2>
      <p>Toute reproduction, diffusion ou usage commercial non autorisé est interdit.</p>
      <h2>4. Responsabilité</h2>
      <p>IF Studio ne saurait être tenue responsable en cas d’indisponibilité du site ou de pertes indirectes.</p>
      <h2>5. Données</h2>
      <p>Les données transmises sont traitées de façon confidentielle. Voir la Politique de confidentialité le cas échéant.</p>
      <h2>6. Contact</h2>
      <p>cielmatinal@gmail.com</p>
      <p style={{marginTop: 24, opacity: .7}}>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
    </main>
  );
}
