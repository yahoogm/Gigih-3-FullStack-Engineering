const songlist = [
  {
    title: 'Artist name 1 second',
    artists: [{ name: 'artist name 1 second' }],
    duration: 1000,
  },
  {
    title: 'Artist name 2 second',
    artists: [{ name: 'artist name 2 second' }],
    duration: 2000,
  },
  {
    title: 'Artist name 3 second',
    artists: [{ name: 'artist name 3 second' }],
    duration: 3000,
  },
];

const users = [];

const FAKE_API = 'https://jsonplaceholder.typicode.com/users';
const WAITING_TIME = 2000;

const retrieveUsers = async (URL) => {
  try {
    //     setTimeout(async () => {
    const req = await fetch(URL);
    const res = await req.json();
    console.log(res);
    const data = res;

    users.push(data);

    console.log(users);
    //     }, WAITING_TIME);
  } catch (error) {
    console.log(error.message);
  }
};

retrieveUsers(FAKE_API);
