export async function getAll() {
  const init = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 12120299',
    },
  };

  const responseHttp = await fetch(
    'https://api-livro-dot-api-samples-423102.uc.r.appspot.com/api/livros',
    init
  );

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else {
    throw new Error('Falha ao tentar consultar os livros');
  }
}
export async function deleteById(id) {
  const init = {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 12120299',
    },
  };

  const responseHttp = await fetch(
    `https://api-livro-dot-api-samples-423102.uc.r.appspot.com/api/livros/${id}`,
    init
  );

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else if (responseHttp.status === 404) {
    throw new Error('Livro não existe');
  } else {
    throw new Error('Falha ao tentar excluir o Livro');
  }
}