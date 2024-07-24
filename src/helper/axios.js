import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    // headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWFmZWMxNmNhMjlhOTlkZTgzNDYyNjk0MmY2ZDA1ZCIsIm5iZiI6MTcyMTcxMjcwNy45NTcyMywic3ViIjoiNjJjZWJmNGI2MzMxYjIwMGYyNjAyMmRjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.iSdseYXAsv6Pxrhx9kWsM214adNrN6fNDREk1kkB0tY'
    // }
})

export default instance;