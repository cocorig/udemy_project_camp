import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const ProfileDate = {
    hayeon:{
        id : 1,
        name: 'hayeon',
        desc: '이하연입니다.'
    },
    huensng:{
        id:2,
        name: 'hyunsang',
        desc: '하현상입니다',
    }
}

const Profile = ()=>{
    const {username} = useParams();
    const navigate =  useNavigate()
    const profile =  ProfileDate[username];
      console.log("useparam = ", useParams());
    console.log("navigate = ", navigate);

    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }
    return (
        <div>
            <h1> {username}({profile.name}) </h1>
            <p>{profile.desc}</p>
            <div onClick={()=>navigate(-1)}>뒤로가기</div>
        </div>
    )
}

export default Profile;