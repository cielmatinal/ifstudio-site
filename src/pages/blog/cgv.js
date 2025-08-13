import React from 'react';

export default function CGV() {
  return (
    <main style={{maxWidth: 900, margin: '60px auto', padding: '0 20px', lineHeight: 1.6}}>
      <h1>Conditions Générales de Vente</h1>
      <p><strong>Vendeur :</strong> IF Studio — cielmatinal@gmail.com</p>
      <h2>1. Prestations</h2>
      <p>Création de contenus visuels et audio, produits digitaux, selon devis accepté.</p>
      <h2>2. Commande & acompte</h2>
      <p>Acompte obligatoire pour réserver. Démarrage après réception de l’acompte.</p>
      <h2>3. Prix & paiement</h2>
      <p>Tarifs indiqués au devis. Paiement sécurisé. Aucun droit de rétractation après livraison d’un produit digital.</p>
      <h2>4. Livraison</h2>
      <p>Livraison digitale (lien de téléchargement). Délais indicatifs, communiqués au moment du devis.</p>
      <h2>5. Droits d’usage</h2>
      <p>Licence d’usage définie au devis (privé, réseaux, commercial, durée, territoire). Toute extension est facturée.</p>
      <h2>6. Confidentialité</h2>
      <p>Processus discret. Les échanges et contenus non publics restent confidentiels.</p>
      <h2>7. Litiges</h2>
      <p>Droit français. Tentative amiable préalable à toute action.</p>
      <p style={{marginTop: 24, opacity: .7}}>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
    </main>
  );
}
