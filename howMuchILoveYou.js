function howMuchILoveYou(nbPetals) {
    const petals = new Map();
    petals.set(0, "not at all");
    petals.set(1, "I love you");
    petals.set(2, "a little");
    petals.set(3, "a lot");
    petals.set(4, "passionately");
    petals.set(5, "madly");
    petals.set(6, "not at all");
    
    console.log(nbPetals % 6, "nbPetals");
    
    if (nbPetals <= 6) {
      return petals.get(nbPetals);
    } else {
      return petals.get(nbPetals % 6);
    }
  }

  console.log(howMuchILoveYou(7),"I love you");