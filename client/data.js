import faker from "faker";

const fakeData = [
  {
    id: 1,
    author: "Emily",
    month: "February",
    year: "2018",
    review: "Great property and plenty of things to do near this location.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/dickinson.png",
  },
  {
    id: 2,
    author: "Emmerson",
    month: "May",
    year: "2018",
    review: "The scenery was great here!",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/emmerson.png",
  },
  {
    id: 3,
    author: "Descartes",
    month: "April",
    year: "2019",
    review: "So much fun, great place to disconnect, relax and think.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/descartes.png",
  },
  {
    id: 4,
    author: "Friedrich",
    month: "March",
    year: "2020",
    review:
      "The property had plenty of space, really enjoyed my time during my stay here. There was a nearby trail leading up the mountain next door.  Had a lot of fun exploring.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/nietzsche.png",
  },
  {
    id: 5,
    author: "Jack",
    month: "January",
    year: "2021",
    review:
      "It was alright. I recommend it for those that enjoy loud neighbors.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/Jack.png",
  },
  {
    id: 6,
    author: "Emily",
    month: "February",
    year: "2018",
    review: "Great property and plenty of things to do near this location.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/dickinson.png",
  },
  {
    id: 7,
    author: "Emmerson",
    month: "May",
    year: "2018",
    review: "The scenery was great here!",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/emmerson.png",
  },
  {
    id: 8,
    author: "Descartes",
    month: "April",
    year: "2019",
    review: "So much fun, great place to disconnect, relax and think.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/descartes.png",
  },
  {
    id: 9,
    author: "Friedrich",
    month: "March",
    year: "2020",
    review:
      "The property had plenty of space, really enjoyed my time during my stay here. There was a nearby trail leading up the mountain next door.  Had a lot of fun exploring.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/nietzsche.png",
  },
  {
    id: 10,
    author: "Jack",
    month: "January",
    year: "2021",
    review:
      "It was alright. I recommend it for those that enjoy loud neighbors.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/Jack.png",
  },
  {
    id: 11,
    author: "Emily",
    month: "February",
    year: "2018",
    review: "Great property and plenty of things to do near this location.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/dickinson.png",
  },
  {
    id: 12,
    author: "Emmerson",
    month: "May",
    year: "2018",
    review: "The scenery was great here!",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/emmerson.png",
  },
  {
    id: 13,
    author: "Descartes",
    month: "April",
    year: "2019",
    review: "So much fun, great place to disconnect, relax and think.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/descartes.png",
  },
  {
    id: 14,
    author: "Friedrich",
    month: "March",
    year: "2020",
    review:
      "The property had plenty of space, really enjoyed my time during my stay here. There was a nearby trail leading up the mountain next door.  Had a lot of fun exploring.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/nietzsche.png",
  },
  {
    id: 15,
    author: "Jack",
    month: "January",
    year: "2021",
    review:
      "It was alright. I recommend it for those that enjoy loud neighbors.",
    profilePic:
      "https://reviews-photos-abnb.s3.us-east-2.amazonaws.com/Jack.png",
  },
];

const fakeRatings = [
  {
    id: 1,
    ratingType: "Cleanliness",
    rating: 5,
  },
  {
    id: 2,
    ratingType: "Communication",
    rating: 4.5,
  },
  {
    id: 3,
    ratingType: "Check-in",
    rating: 5,
  },
  {
    id: 4,
    ratingType: "Accuracy",
    rating: 4.9,
  },
  {
    id: 5,
    ratingType: "Location",
    rating: 5,
  },
  {
    id: 6,
    ratingType: "Value",
    rating: 5,
  },
];

export { fakeData, fakeRatings };
