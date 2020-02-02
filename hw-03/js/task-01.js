const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const userData = Object.keys(user);
for (const key of userData) {
  console.log(`${key} : ${user[key]}`);
}
