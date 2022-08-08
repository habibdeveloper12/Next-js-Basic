import users from "./users"

export default function handler(req, res) {
  const params = req.query.userid
  console.log(params);

  if (req.method === "GET") {

    const peruser = users.find(user => user.id === parseInt(params))
    res.status(200).json(peruser)
  } else if (req.method === "DELETE") {

    const peruser = users.find(user => user.id === parseInt(params))
    const index = users.findIndex(user => user.id === parseInt(params))
    users.splice(index, 1)
    res.status(200).json(peruser)
  }

}