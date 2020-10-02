const user = { nickname: 'JohnD' }
const userInfos = { job: 'Developer', age: 28 }

const userProfile = {
    ...user,
    ...userInfos,
}

/* Output: {
  age: 28,
  job: "Developer",
  nickname: "JohnD"
} */
