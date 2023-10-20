function compareArrays(arr1, arr2) {

   return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);


}

function getUsersNamesInAgeRange(users, gender) { // const people, ""
   let filterNewArr = users.filter(user => user.gender == gender).map(i => i.age);
   if (filterNewArr.length === 0) {
      return 0;
   }
   const totalSumAge = filterNewArr.reduce((acc, item) => acc + item);
   const averageAge = totalSumAge / filterNewArr.length;

   return averageAge;
}