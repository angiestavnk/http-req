import fetch from 'node-fetch';

const RICK_AND_MORTY_URL = "https://rickandmortyapi.com/api";

const getData = async (url) => {
  const fetchResult = await fetch(url);
  if (fetchResult.status !== 200) {
    throw new Error("Error");
  }
  return fetchResult;
};

const getCharacters = async () => {
  try {
    const fetchResult = await getData(`${RICK_AND_MORTY_URL}/character`);
    const data = await fetchResult.json();
    return data;
  } catch (e) {
    return e;
  }
};

const getCharacter = async (id) => {
  try {
    const fetchResult = await getData(`${RICK_AND_MORTY_URL}/character/${id}`);
    const data = await fetchResult.json();
    return data;
  } catch (e) {
    return e;
  }
}

const getLocations = async () => {
  try {
    const fetchResult = await getData(`${RICK_AND_MORTY_URL}/location`);
    const data = await fetchResult.json();
    return data;
  } catch (e) {
    return e;
  }
};

const getLocation = async (id) => {
  try {
    const fetchResult = await getData(`${RICK_AND_MORTY_URL}/location/${id}`);
    const data = await fetchResult.json();
    return data;
  } catch (e) {
    return e;
  }
}

const getEpisodes = async () => {
  try {
    const fetchResult = await getData(`${RICK_AND_MORTY_URL}/episode`);
    const data = await fetchResult.json();
    return data;
  } catch (e) {
    return e;
  }
}

const getEpisode = async (id) => {
  try {
    const fetchResult = await getData(`${RICK_AND_MORTY_URL}/episode/${id}`);
    const data = await fetchResult.json();
    return data;
  } catch (e) {
    return e;
  }
}

getCharacters()
  .then(data => {
    console.log('caracters', data);
  })
  .catch(err => {
    console.log(err)
  });

getCharacter(1)
  .then(data => {
    console.log('caracter', data);
  })
  .catch(err => {
    console.log(err)
  });

getLocations()
  .then(data => {
    console.log('locations', data)
  })
  .catch(err => {
    console.log(err);
  });

getLocation(4)
  .then(data => {
    console.log('location', data);
  })
  .catch(err => {
    console.log(err)
  });

getEpisodes()
  .then(data => {
    console.log('episodes', data)
  })
  .catch(err => {
    console.log(err);
  })

getEpisode(3)
  .then(data => {
    console.log('episode', data)
  })
  .catch(err => {
    console.log(err)
  })
