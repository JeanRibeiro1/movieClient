import axios from "axios";

export default axios.create({
    baseURL:'https://2b11-2804-1b2-10c1-88ef-4057-5bc0-1676-f318.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning":"true"}
});