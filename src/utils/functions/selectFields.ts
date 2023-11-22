export const getSelectFields = () => {
  const premiereValues = [
    "id",
    "name",
    "backdrop",
    "year",
    "poster",
    "shortDescription",
    "description",
    "premiere",
    "ageRating",
    "genres",
    "movieLength",
    "rating",
  ];

  const premiereUrl = premiereValues
    .map((item) => `selectFields=${item}`)
    .join("&");

  const premiereNotNullFileds = ["name", "backdrop.url"]
    .map((item) => `notNullFields=${item}`)
    .join("&");

  const imageStill = {
    height: "360-2600",
    type: "still",
  };

  return { premiereValues, premiereUrl, premiereNotNullFileds, imageStill };
};
