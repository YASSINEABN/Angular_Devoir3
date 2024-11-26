export class User {
    nom: string;
    prenom: string;
    dateNaissance: Date;
    sexe: string;
    adresse: string;
    constructor(nom: string, prenom: string, ddn: Date, sexe: string, adresse: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = ddn;
    this.sexe = sexe;
    this.adresse = adresse;
    }
    }
   