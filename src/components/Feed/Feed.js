import React, { useState, useEffect } from "react";
import "./Feed.css";
import Avatar from "../Avatar/Avatar";
import InputItems from "../InputItems/InputItems";
import Post from "../Post/Post";
import { faImage, faCalendarCheck, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Feed = () => {
  const postsCollectionRef = collection(db, "posts");
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);

      setPosts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getPosts();
  }, []);

  const sendPost = async (e) => {
    await e.preventDefault();
    await addDoc(postsCollectionRef, { message: input });
  };

  return (
    <div className="feed">
      <div className="feed__inputBody">
        <div className="feed__input">
          <Avatar
            img="https://media-exp1.licdn.com/dms/image/C4D03AQGOb8opJ8UOSw/profile-displayphoto-shrink_100_100/0/1554989073975?e=1643846400&v=beta&t=qeey6KJPaRuiApmcQ2WWgCLkkozCeuuLe0U8maiKwt0"
            alt="profile"
            height="45"
            width="45"
          />
          <div className="feed__inputForm">
            <form>
              <input type="text" placeholder="Start a post" value={input} onChange={(e) => setInput(e.target.value)} />
              <button type="submit" onClick={sendPost}>
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed__inputItems">
          <a href="linkedin.com">
            <InputItems icon={faImage} color={"rgb(92, 170, 223)"} title="Photo" size="lg" />
          </a>
          <a href="linkedin.com">
            <InputItems icon={faYoutube} color={"rgb(96, 210, 58)"} title="Video" size="lg" />
          </a>
          <a href="linkedin.com">
            <InputItems icon={faCalendarCheck} color={"rgb(223, 180, 64)"} title="Event" size="lg" />
          </a>
          <a href="linkedin.com">
            <InputItems icon={faNewspaper} color={"rgb(219, 103, 184)"} title="Article" size="lg" />
          </a>
        </div>
      </div>
      {posts.map((post) => (
        <Post key={post.id} name={post.name} desc={post.description} message={post.message} photoUrl={post.photoUrl} />
      ))}
    </div>
  );
};

export default Feed;
