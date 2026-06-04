const crypto = require("crypto");

// Hache un token (refresh / reset) avant stockage en base.
//
// On utilise SHA-256 et non bcrypt : ces tokens sont des JWT à forte entropie
// (et non des mots de passe humains faibles), donc une attaque par force brute
// est infaisable et un hachage rapide suffit. SHA-256 évite aussi la troncature
// à 72 octets de bcrypt, qui poserait problème sur des JWT longs.
//
// Le hachage étant déterministe, on peut comparer un token reçu à sa version
// stockée sans avoir à conserver la valeur en clair : en cas de fuite de la
// base, les tokens ne sont pas directement réutilisables.
const hashToken = (token) =>
  crypto.createHash("sha256").update(token).digest("hex");

module.exports = hashToken;
