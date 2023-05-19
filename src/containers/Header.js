import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <>
    <div className="ui fixed menu">
    <div className="ui container center" style={{cursor:"pointer"}}>
        <Link to={'/'}>FakeShop</Link>
    </div>
    </div>
        </>
    );
};

