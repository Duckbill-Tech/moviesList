// FETCH PARA PEGAR TODOS OS FILMES
export async function getAllFilmes() {
  try {
    const response = await fetch(`http://localhost:8081/api/filmes`, {
      method: "GET",
      credentials: "include", // Adicionando credenciais (cookies)
    });

    if (!response.ok) {
      throw new Error("Erro em pegar todos os filmes: " + response.statusText);
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Erro em pegar todos os filmes:", error);
    throw error;
  }
}

// FETCH PARA CRIAR UM FILME
export async function createFilme(filmeDTO) {
  try {
    const response = await fetch(`http://localhost:8081/api/filmes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filmeDTO),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Erro criando o filme: " + response.statusText);
    }

    const data = await response.json();
    console.debug("Resposta Servidor:", data);
    return data;
  } catch (error) {
    console.error("Erro criando o filme:", error);
    throw error;
  }
}

// FETCH PARA PEGAR UM FILME POR ID
export async function getFilmeById(id) {
  try {
    const response = await fetch(`http://localhost:8081/api/filmes/${id}`, {
      method: "GET",
      credentials: "include", 
    });

    if (!response.ok) {
      throw new Error("Error fetching filme: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching filme:", error);
    throw error;
  }
}

// FETCH PARA UPDATE FILME
export async function updateFilme(id, filmeDTO) {
  try {
    const response = await fetch(`http://localhost:8081/api/filmes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filmeDTO),
      credentials: "include", // Adicionando credenciais (cookies)
    });

    if (!response.ok) {
      throw new Error("Erro em pegar fiilme por id: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro em pegar fiilme por id:", error);
    throw error;
  }
}


// FETCH PARA DELETE FILME
export async function deleteFilme(id) {
  try {
    const response = await fetch(`http://localhost:8081/api/filmes/${id}`, {
      method: "DELETE",
      credentials: "include", 
    });

    if (!response.ok) {
      throw new Error("Erro delentando filme: " + response.statusText);
    }
  } catch (error) {
    console.error("Erro delentando filme:", error);
    throw error;
  }
}