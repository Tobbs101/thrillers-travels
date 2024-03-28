import Image from "next/image";
import avatar from "../assets/avatar.png";
// import {} from 'bootstrap-icons'

const Profile = () => {
  return (
    <div className="w-full bg-alternateBlue h-[300px] rounded-br-3xl rounded-tr-3xl flex items-center justify-center gap-3 flex-col">
      <Image src={avatar} alt="avatar" />
      <h1 className="text-white text-2xl font-medium">ALEX JOHNSON</h1>
      <p className="text-white text-sm">alex.johnson@gmail.com</p>
      <p></p>
      <i className="bi-alarm text-white"></i>
    </div>
  );
};

export default Profile;
