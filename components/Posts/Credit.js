import { useEffect, useState } from "react";
import axios from 'axios';

export default function Credit({post}) {

    const [user,setUser] = useState({})

    const styles = {
      container : {
        display : "flex",
        alignItems : "center",
        padding : "10px"
      },
      profile : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "brown",
        color : "white",
        height : "40px",
        width : "40px",
        borderRadius : "50%",
        fontWeight : "600"
      },
      credentials : {
        display : "block",
        marginLeft : "10px"
      }
    }

   const fetchUser = async ()=>{
    const { data } = await axios.get(`/api/v1/users/${post.userId}`);
     setUser(data);
   }

   useEffect(()=>{
    fetchUser()
   },[])
    

   return(
    <>
      <div className="credit-container" style={styles.container}>
          <div className="profile" style={styles.profile}>
              <span>{user?.name?.split(" ")[0][0]}{user?.name?.split(" ")[1][0]}</span>
          </div>
          <div className="credentials" style={styles.credentials}>
            <p style={{fontWeight : "600"}}>{user?.name}</p>
            <span style={{fontSize : "13px"}}>{user?.email}</span>
          </div>
      </div>
    </>
   )

}