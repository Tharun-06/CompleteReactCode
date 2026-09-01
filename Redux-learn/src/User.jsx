import { useSelector } from "react-redux"
export default function User() {
    const data = useSelector((state) => state.user )
    return (
        <div>
            <h1>User</h1>
            <h2>Username: {data.username}</h2>
            <h2>Balance: {data.balance}</h2>
        </div>
    );
}