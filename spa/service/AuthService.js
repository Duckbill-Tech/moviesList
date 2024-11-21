// FETCH FOR LOGIN
export async function login(email, senha) {
  try {
    const response = await fetch("http://localhost:8081/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });

    if (!response.ok) {
      throw new Error("Error during login: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

// FETCH FOR REGISTER
export async function register(nome, email, cpf, senha) {
  try {
    const response = await fetch("http://localhost:8081/auth/register", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, cpf, senha }),
    });

    if (!response.ok) {
      throw new Error("Error during register: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during register:", error);
    throw error;
  }
}

// FETCH FOR RESET PASSWORD
export async function resetPassword(token, newPassword) {
  try {
    const response = await fetch(`/auth/reset-password?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPassword }),
    });

    if (!response.ok) {
      throw new Error("Erro ao redefinir senha: " + response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao redefinir senha:", error);
    throw error;
  }
}