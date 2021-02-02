import axios from "axios";

const listOfUsers = axios.create({
    baseURL: "http://localhost:3000/users"
});

export default listOfUsers;