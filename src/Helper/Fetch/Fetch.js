const pull = async (url) => {
  let json;
  try {
    const response = await fetch(url);
    json = await response.json();
  } catch (erro) {
    return erro;
  } finally {
    return json;
  }
};

export default pull;
