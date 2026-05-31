const userResource = require("../../../resources/user-resource.js");

// La resource est une fonction pure : aucun mock nécessaire.
describe("user-resource", () => {
  it("n'expose que les champs publics (pas de mot de passe ni de tokens)", () => {
    const result = userResource({
      id: 1,
      email: "test@artico.fr",
      name: "Test",
      entreprises: [{ id: 10 }],
      role: "USER",
      active: true,
      password: "hashed",
      refresh_token: "secret",
      reset_token: "secret",
    });

    expect(result).toEqual({
      id: 1,
      email: "test@artico.fr",
      name: "Test",
      entreprises: [{ id: 10 }],
      role: "USER",
      active: true,
    });
    expect(result).not.toHaveProperty("password");
    expect(result).not.toHaveProperty("refresh_token");
    expect(result).not.toHaveProperty("reset_token");
  });

  it("lève une 404 quand aucun utilisateur n'est fourni", () => {
    expect(() => userResource(null)).toThrow("Aucun utilisateur trouvé");
    try {
      userResource(undefined);
    } catch (err) {
      expect(err.status).toBe(404);
    }
  });
});
