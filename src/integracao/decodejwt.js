import { jwtDecode } from "jwt-decode";

const User = () => {
    const token = sessionStorage.getItem('token')
    if(token){
        const decoded = jwtDecode(token);
        return decoded.sub
    }
    return ''
}

export default User