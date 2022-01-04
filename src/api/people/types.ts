interface People {
  name: string;
  url: string;
}

interface Person {
  url: string;
}

export interface PeopleResponse {
  results: People[];
}

export interface PersonResponse {
  results: Person;
}
