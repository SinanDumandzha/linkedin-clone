import React, { useState, useEffect } from "react";
import "./Feed.css";
import Avatar from "../Avatar/Avatar";
import InputItems from "../InputItems/InputItems";
import Post from "../Post/Post";
import { faImage, faCalendarCheck, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { db } from "../../firebase";
import { collection, onSnapshot, addDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const q = query(postsCollectionRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, [postsCollectionRef]);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(postsCollectionRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputBody">
        <div className="feed__input">
          <Avatar img={user.photoURL} alt="profile" height="45" width="45" />
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

      <div class="feed__sort">
        <button class="feed__button" type="button">
          <hr className="feed__hr" />
          <div className="feed__text">
            <span className="feed_sortBy">Sort by:</span>
            <span className="feed__top">Top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
            </svg>
          </div>
        </button>
      </div>

      <FlipMove>
        {posts.map((post) => (
          <Post key={post.id} name={post.name} desc={post.description} message={post.message} photoUrl={post.photoUrl} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
