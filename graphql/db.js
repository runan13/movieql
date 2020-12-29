export const people = [
  {
    id: 1,
    name: "runan136",
    age: 22,
    gender: "male",
  },
  {
    id: 2,
    name: "runan135",
    age: 23,
    gender: "male",
  },
  {
    id: 3,
    name: "runan134",
    age: 24,
    gender: "female",
  },
  {
    id: 4,
    name: "runan132",
    age: 25,
    gender: "female",
  }
];

export const getByID = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
}