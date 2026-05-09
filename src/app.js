const users = [
  { id: 1, name: "Michiel" },
  { id: 2, name: "Alen" },
];

export const getUsers = () => users;

export const findUser = (id) => users.find((user) => user.id === id);

export const formatUser = (user) => `User ${user.id}: ${user.name}`;
