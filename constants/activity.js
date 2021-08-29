export const ACTIVITY_TYPE = {
  inPerson: "inPerson",
  online: "online",
};

export const ACTIVITY_CATEGORY = {
  event: "Event",
  workshop: "Workshop",
  community: "Community",
};

export const getActivityTypeCollection = () => [
  { id: ACTIVITY_TYPE.inPerson, title: "In person" },
  { id: ACTIVITY_TYPE.online, title: "Online" },
];

export const getCategoryCollection = () => [
  { id: 1, title: "Event" },
  { id: 2, title: "Workshop" },
  { id: 3, title: "Community" },
];

export const getCityCollection = () => [
  { id: "KL", title: "Kuala Lumpur" },
  { id: "SGR", title: "Selangor" },
  { id: "PNG", title: "Penang" },
  { id: "JHR", title: "Johor" },
];

export const getCountryCollection = () => [
  { id: "MY", title: "Malaysia" },
  { id: "SG", title: "Singapore" },
  { id: "IN", title: "Indonesia" },
];

export const getTagCollection = () => [
  { id: 1, title: "Arts & Craft" },
  { id: 2, title: "Volunteer" },
  { id: 3, title: "Nature" },
  { id: 4, title: "Entrepreneurship" },
  { id: 5, title: "Networking" },
  { id: 6, title: "Language" },
  { id: 7, title: "Business" },
  { id: 8, title: "Badminton" },
  { id: 9, title: "DIY" },
  { id: 10, title: "e-Sports" },
];

export const getCategory = (category) => {
  var categories = getCategoryCollection();
  var selectedCategory = categories.filter((obj) => {
    return obj.id == category;
  });

  return selectedCategory[0].title;
};

export const getActivityType = (type) => {
  var typeList = getActivityTypeCollection();
  var selectedType = typeList.filter((obj) => {
    return obj.id == type;
  });

  return selectedType[0].title;
};

export const getTags = (tag) => {
  var tagList = getTagCollection();
  var selected = tagList.filter((obj) => {
    return obj.id == tag;
  });

  return selected[0].title;
};
