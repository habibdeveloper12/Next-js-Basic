import users from "./users";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users)
  }
  else if (req.method === "POST") {
    const body = req.body
    console.log(body);


    users.push(body)
    res.status(201).json(body)
  }


}
