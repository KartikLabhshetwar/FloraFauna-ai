const prompt = `Analyze the plant/animal in the uploaded image and provide the following information in JSON format: \n
  Give output like this: \n {
      "most_likely_species": {
        "scientific_name": "Cardinalis cardinalis",
        "common_names": [
          "Northern Cardinal",
          "Redbird",
          "Cardinal"
        ],
        "brief_description": [
          "Bright red male with black face mask and crest",
          "Grayish-brown female with reddish tinge",
          "Stocky, short-tailed bird with thick bill"
        ],
        "confidence_level": 0.99,
        "confidence_level_explanation": "The probability that the bird belongs to the most likely species, based on the image and description provided."
      },
      "overall_appearance": "A medium-sized, brightly colored songbird with a distinctive crest.",
      "distinguishing_features": [
        "Bright red plumage in males",
        "Grayish-brown plumage in females",
        "Black face mask and crest",
        "Thick, conical bill",
        "Short, rounded tail"
      ],
      "habitat": "Found in a variety of habitats, including woodlands, thickets, and gardens.",
      "geographic_location": "Eastern North America",
      "links_to_additional_resources": [
        {
          "title": "Wikipedia",
          "link": "https://en.wikipedia.org/wiki/Northern_Cardinal"
        },
        {
          "title": "The Cornell Lab of Ornithology",
          "link": "https://www.birds.cornell.edu/birds-of-the-world/species/norcar"
        },
        {
          "title": "Audubon",
          "link": "https://www.audubon.org/field-guide/bird/northern-cardinal"
        }
      ]
    } 
  `;

export default prompt;
