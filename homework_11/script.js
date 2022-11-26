'use strict'

fetch('https://reqres.in/api/users?per_page=12')
.then(async (json) => {
  try {
    const info = await json.json();
    console.log('-----------');
    console.log('Пункт №1:');
    console.log('-----------');
    console.log('Data loading...');
    for (let entry of info.data) {
      console.log(`IdentNum: ${entry.id}. Full Name: ${entry.first_name} ${entry.last_name}. e-mail: ${entry.email}; avatar: ${entry.avatar}`);
    };
    console.log(`...${info.data.length} users data loaded.`);
    console.log('-----------');
    console.log('Пункт №2:');
    console.log('-----------');
    for (let entry of info.data) {
      console.log(entry.last_name);
    };
    console.log('-----------');
    console.log('Пункт №3:');
    console.log('-----------');
    for (let entry of info.data.filter((item) => {
      return item.last_name[0] === 'F';
      })) console.log(`Lastname: ${entry.last_name}; Name: ${entry.first_name}; Ident: ${entry.id}; e-mail: ${entry.email}; AvatarURL: ${entry.avatar}`);
    console.log('-----------');
    console.log('Пункт №4:');
    console.log('-----------');
    const allInString = info.data.reduce((accum, item) => {
      return accum += ` ${item.first_name} ${item.last_name},`
    },'');
    console.log(`Наша база содержит данные следующих пользователей:${allInString.slice(0, allInString.length - 1)}.`);
    console.log('-----------');
    console.log('Пункт №5:');
    console.log('-----------');
    for (let entry in info.data[0]) {
      console.log(entry);
  }
  } catch {
    console.log('Data processing not complete...')    
  }
})
.catch(()=>{console.log('Data fetch error...');})