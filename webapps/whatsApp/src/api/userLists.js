    let userLists = [
      {
        "userId": "user001",
        "userName": "Alice Johnson",
        "phoneNumber": "+1234567890",
        "status": "Stay positive, work hard, make it happen."
      },
      {
        "userId": "user002",
        "userName": "Bob Smith",
        "phoneNumber": "+1234567891",
        "status": "Happiness is not by chance, but by choice."
      },
      {
        "userId": "user003",
        "userName": "Charlie Brown",
        "phoneNumber": "+1234567892",
        "status": "Calmness is the cradle of power."
      },
      {
        "userId": "user004",
        "userName": "Diana Prince",
        "phoneNumber": "+1234567893",
        "status": "Do what makes your soul shine."
      },
      {
        "userId": "user005",
        "userName": "Edward Cullen",
        "phoneNumber": "+1234567894",
        "status": "Every day may not be good, but there is something good in every day."
      },
      {
        "userId": "user006",
        "userName": "Fiona Gallagher",
        "phoneNumber": "+1234567895",
        "status": "The best view comes after the hardest climb."
      },
      {
        "userId": "user007",
        "userName": "George Martin",
        "phoneNumber": "+1234567896",
        "status": "Peace begins with a smile."
      },
      {
        "userId": "user008",
        "userName": "Hannah Baker",
        "phoneNumber": "+1234567897",
        "status": "The only limit to our realization of tomorrow is our doubts of today."
      },
      {
        "userId": "user009",
        "userName": "Isaac Newton",
        "phoneNumber": "+1234567898",
        "status": "Keep going, keep growing."
      },
      {
        "userId": "user010",
        "userName": "Jack Sparrow",
        "phoneNumber": "+1234567899",
        "status": "Happiness is a direction, not a place."
      },
      {
        "userId": "user011",
        "userName": "Kate Winslet",
        "phoneNumber": "+1234567800",
        "status": "Every moment is a fresh beginning."
      },
      {
        "userId": "user012",
        "userName": "Liam Neeson",
        "phoneNumber": "+1234567801",
        "status": "Serenity is not freedom from the storm, but peace amid the storm."
      },
      {
        "userId": "user013",
        "userName": "Mona Lisa",
        "phoneNumber": "+1234567802",
        "status": "Find joy in the journey."
      },
      {
        "userId": "user014",
        "userName": "Nina Simone",
        "phoneNumber": "+1234567803",
        "status": "Be the reason someone smiles today."
      },
      {
        "userId": "user015",
        "userName": "Oliver Twist",
        "phoneNumber": "+1234567804",
        "status": "Good vibes only."
      }
    ]



    userLists.forEach(each=>{
      each.profileBg =  '#' + (Math.random().toString(16).substr(-6));
    })

    export default userLists;
  