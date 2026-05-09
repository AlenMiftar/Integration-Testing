import { getUsers, findUser, formatUser } from "../../src/app";

describe("Users pipeline integration", () => {
  it("finds a user and formats them correctly", () => {
    const users = getUsers();
    const user = findUser(users[0].id);
    const result = formatUser(user);
    expect(result).toBe("User 1: Michiel");
  });
});

describe("Users pipeline integration", () => {
  it("finds and format a user to show Alen", () => {
    const users = getUsers();
    const user = findUser(2);
    const result = formatUser(user);
    expect(result).toBe("User 2: Alen");
  });
});

describe("Get all users and format each one", () => {
  it("finds all users and format each one", () => {
    const users = getUsers();
    const result = users.map((user) => formatUser(user));

    expect(result).toHaveLength(2);
    expect(result[0]).toBe("User 1: Michiel");
    expect(result[1]).toBe("User 2: Alen");
  });
});

describe("Check if a user exist", () => {
  it("returns undefined when a user does not exist", () => {
    const user = getUsers();
    const missing = findUser(999);
    expect(missing).toBeUndefined();
  });

  it("finds and formats an existing user", () => {
    const users = getUsers();
    const user = findUser(2);
    const result = formatUser(user);
    expect(result).toBe("User 2: Alen");
  });
});
