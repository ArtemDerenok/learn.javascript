const getUsers = async (userNames) => {
  const result = [];
  userNames.forEach(async (elem) => {
    const response = await fetch(`https://api.github.com/users/${elem}`);
    if (response.status === 200) {
      result.push(await response.json());
    } else {
      throw new Error('user is not found');
    }
  });
  return result;
};

getUsers(['artemderenok', 'mir97']).then(result => console.log(result));
