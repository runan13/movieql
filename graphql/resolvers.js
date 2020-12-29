const runan13 = {
  name: "runan13",
  age: 25,
  gender: "male",
}

const resolvers = {
  Query: {
    person: () => runan13
  }
};

export default resolvers;