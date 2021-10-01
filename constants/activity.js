export const ACTIVITY_TYPE = {
  inPerson: "inPerson",
  online: "online",
};

export const ACTIVITY_CATEGORY = {
  event: "1",
  workshop: "2",
  community: "3",
};

export const getActivityTypeCollection = () => [
  { value: ACTIVITY_TYPE.inPerson, label: "In person" },
  { value: ACTIVITY_TYPE.online, label: "Online" },
];

export const getCategoryCollection = () => [
  { value: 1, label: "Event" },
  { value: 2, label: "Workshop" },
  { value: 3, label: "Community" },
];

export const getAreaCollection = () => [
  { value: "SGR", label: "Selangor" },
  { value: "KL", label: "Kuala Lumpur" },
  { value: "PJ", label: "Putrajaya" },
  { value: "PNG", label: "Penang" },
  { value: "JHR", label: "Johor" },
  { value: "Others", label: "Others" },
];

export const getCountryCollection = () => [
  { value: "MY", label: "Malaysia" },
  { value: "SG", label: "Singapore" },
  { value: "IN", label: "Indonesia" },
];

export const getTagCollection = () => [
  { value: 1, label: "Arts & Craft" },
  { value: 2, label: "Volunteer" },
  { value: 3, label: "Nature" },
  { value: 4, label: "Entrepreneurship" },
  { value: 5, label: "Networking" },
  { value: 6, label: "Language" },
  { value: 7, label: "Business" },
  { value: 8, label: "Badminton" },
  { value: 9, label: "DIY" },
  { value: 10, label: "e-Sports" },
];

export const getCategory = (category) => {
  var categories = getCategoryCollection();
  var selectedCategory = categories.filter((obj) => {
    return obj.value == category;
  });

  return selectedCategory[0].label;
};

export const getActivityType = (type) => {
  var typeList = getActivityTypeCollection();
  var selectedType = typeList.filter((obj) => {
    return obj.value == type;
  });

  return selectedType[0].label;
};

export const getTags = (tag) => {
  var tagList = getTagCollection();
  var selected = tagList.filter((obj) => {
    return obj.value == tag;
  });

  return selected[0].label;
};
