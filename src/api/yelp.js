import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 
        "Bearer fDwNiDe3AeBpnNrERolZikWnUMae4mERTG422JcesMJSZIJbG0W-jnVnCMUSkOiAqV9ZRscs4mtWkhU1KZ0guDLwdSY9A7rY7rxCkjidx_pjS7Axd3aoR6aLWSdVYnYx"
    }
});