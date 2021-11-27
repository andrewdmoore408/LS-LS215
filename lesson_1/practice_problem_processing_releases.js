// Write a Function named processReleaseData that processes the following movie release data

// The Function should generate an Array of Objects that contain only the id and title key / value pairs.You may assume that id and title, when existing, is an integer greater than 0 and non - empty string respectively.Here are the rules:

//     Keep only releases that have both id and title property present.
//     Keep only the id and title data for each release.

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }],
  },
];

function processReleaseData(data) {
  const idAndTitlePresent = data.filter(film => film.id && film.title);

  const idAndTitleOnly = idAndTitlePresent.map(film => {
    return {
      id: film.id,
      title: film.title
    };
  });

  return idAndTitleOnly;
}

console.log(processReleaseData(newReleases));

// should return:
[{ id: 70111470, title: 'Die Hard' }, { id: 675465, title: 'Fracture' }];

// FURTHER EXPLORATION: The current solution assumes that the value of id will be an integer value greater than 0. If it was possible to have a value of 0 for id, what would the implications be to the current solution ? What changes, if any, would need to be made in order to handle the 0 value ?s

// 0 is a falsy value, so the logic in the callback function passed to filter() would have to be changed. One way to check this would be to invoke Object.keys() and check whether 'id' is present in the return array. The following implementation would work with an id of 0. I also added a check for an empty string to ensure that the title has at least one character in it.

function processReleaseData(data) {
  const idAndTitlePresent = data.filter(film => {
    const keys = Object.keys(film);

    const hasId = keys.includes('id');
    const hasTitle = keys.includes('title');
    const titleNotEmpty = hasTitle && film.title.length > 0;

    return hasId && hasTitle && titleNotEmpty;
  });

  const idAndTitleOnly = idAndTitlePresent.map(film => {
    return {
      id: film.id,
      title: film.title
    };
  });

  return idAndTitleOnly;
}

console.log(processReleaseData(newReleases));