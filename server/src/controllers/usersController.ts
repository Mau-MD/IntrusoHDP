const express = require("express");
export const router = express.Router();

const database = {
  users: [
    {
      id: 0,
      user: "Badbunny",
      password: "123",
      admin: true,
    },
    {
      id: 1,
      user: "zod",
      password: "123",
      admin: false,
    },
  ],
};

router.use(express.json());
router.get("/", (req, res) => {
  res.send("Users home page");
});

// middleware that is specific to this router
router.post("/login", (req, res) => {
  const userInformation = req.body;
  const user = userInformation.user;
  const userPassword = userInformation.password;

  const userFound = database.users.find((userDB) => {
    console.log(userDB);
    return userDB.user == user && userDB.password == userPassword;
  });
  if (userFound) {
    res.send(userFound);
  } else {
    res.status(404).send("User not found");
  }
});

router.post("/register", (req, res) => {
  const userInformation = req.body;
  const newDBUser = {
    ...userInformation,
    id: database.users[database.users.length - 1].id + 1,
    admin: false,
  };
  database.users.push(userInformation);
  res.send(newDBUser);
});

export { router as usersController };
