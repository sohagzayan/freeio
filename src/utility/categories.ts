interface NeedType {
  id: number;
  title: string;
  details: string;
  icon: string;
}

interface NeedSomethingDoneType {
  data: NeedType[];
}

export const categories = [
  "All_Categories",
  "Horror",
  "Biography",
  "Fiction",
  "Mystery",
  "Young",
  "BoardBook",
  "Triller",
  "NonFiction",
  "SelfHelp",
  "Biography",
  "AdventureStories",
];
export const browse_categories = [
  {
    id: 1,
    title: "Sell Products",
    details:
      "It’s free and easy to sell products. Simply fill in a title, description.",
    icon: "ri-product-hunt-line",
  },
  {
    id: 1,
    title: "Choose plan and category",
    details:
      "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "ri-product-hunt-line",
  },
  {
    id: 1,
    title: "Pay safely",
    details:
      "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "ri-product-hunt-line",
  },
  {
    id: 1,
    title: "We’re here to help",
    details:
      "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "ri-product-hunt-line",
  },
];

export const need_something_done: NeedType[] = [
  {
    id: 1,
    title: "Sell Products",
    details:
      "It’s free and easy to sell products. Simply fill in a title, description.",
    icon: "ri-product-hunt-line",
  },
  {
    id: 1,
    title: "Choose plan and category",
    details:
      "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "ri-building-3-line",
  },
  {
    id: 1,
    title: "Pay safely",
    details:
      "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "ri-money-pound-circle-line",
  },
  {
    id: 1,
    title: "We’re here to help",
    details:
      "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "ri-questionnaire-line",
  },
];
