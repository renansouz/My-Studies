const dayjs = require('dayjs')

function birthday(date){
  // Current age
  const today = dayjs()
  const birthday = dayjs(date)

  const ageInYear = today.diff(birthday, 'year');
  console.log(ageInYear);

  // next birthday
  const NextBirthday = birthday.add(ageInYear + 1, 'year')
  console.log(NextBirthday.format('DD-MM-YYYY'));
  
  // quantos dias faltam para o proximo aniversário
  
  const daysToNextBirthday = NextBirthday.diff(today, 'days') + 1
  console.log(daysToNextBirthday);
}


birthday('2005-10-08')