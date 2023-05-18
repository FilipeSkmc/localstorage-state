/**
 * Procura a chave favorite-characters no localstorage e retorna seu valor,
 * ou retorna um array vazio caso não tenha nada
 */
export const getFavoriteCharacters = () => (
  JSON.parse(localStorage.getItem('favorite-characters')) || []
);

/**
 * Recebe um personagem, caso tenha um personagem,
 * cria uma cópia do array armazenado do localstorage,
 * cria uma nova versão com a cópia mais o personagem recebido e salva no localstorage
 */
export const addCharacter =  (character) => {
  if (character) {
    const previuousData = getFavoriteCharacters();
    const newStorage = [...previuousData, character];
    localStorage.setItem('favorite-characters', JSON.stringify(newStorage))
  }
}

/**
 * Recebe um personagem, caso tenha um personagem,
 * cria uma cópia do array armazenado do localstorage,
 * cria uma nova versao filtrada sem o personagem passado e salva no localstorage
 */
export const removeCharacter = (character) => {
  if(character) {
    const previuousData = getFavoriteCharacters();
    const newStorage = previuousData.filter((char) => char.id !== character.id);
    localStorage.setItem('favorite-characters', JSON.stringify(newStorage));
  }
}