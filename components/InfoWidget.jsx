import useUser from "../helpers/userCheck";
const InfoWidget = () =>
{
    const {user, mutateUser}= useUser();
    return(
        <div className="infoWidgetContainer">
            <h1>{user?.username}</h1>
            <h1>Calls: </h1>
            <h1>Phonebanking Sessions: </h1>
        </div>
    )
    
}
export default InfoWidget;