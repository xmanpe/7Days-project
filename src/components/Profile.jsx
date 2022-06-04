const Profile = (props) => {
    return (
        <img className="userAvatar { rounded-circle }" style={{border: '1px solid #3D7BFA'}} src={props.img} alt={props.alt} />
    );
}
 
export default Profile;