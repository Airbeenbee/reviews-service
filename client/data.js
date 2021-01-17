import faker from "faker";

const fakeData = {
  author: faker.name.firstName(),
  month: faker.date.month(),
  year: faker.random.number({
    min: 2018,
    max: 2021,
  }),
  review: faker.lorem.paragraph(),
  profilePic: faker.image.image(),
};

export { fakeData };
