import { useSelector, useDispatch } from "react-redux";
import { addNewPost } from "./actions";
import { useState } from "react";

import Post from "./components/post";

import avatar1 from "./images/born-to-feel.jpg";
import avatar2 from "./images/battle-toad.jpg";
import avatar3 from "./images/knight.jpg";
import avatar4 from "./images/jolly-roger.png";

import "./App.css";

export let newPost;

const DATE = new Date();
const day = DATE.getDate().toString();
const month = DATE.toLocaleString("en-us", { month: "long" });
const year = DATE.getFullYear().toString();
const today = day + " " + month + " " + year;

function App() {
  const newArray = useSelector((state) => state.array);
  const dispatch = useDispatch();

  const [posted, setPosted] = useState([]);
  const [nevermind, setNevermind] = useState(false);

  return (
    <div className="App">
      <div>
        <select name="" id="user-select" defaultValue="default">
          <option value="default" disabled>
            Select User
          </option>
          <option value="User 1">User 1</option>
          <option value="Battle Toad">Battle Toad</option>
          <option value="Metal Warrior">Metal Warrior</option>
          <option value="Jolly Roger">Jolly Roger</option>
        </select>
        <br /> <br />
        <input type="text" placeholder="Image link" id="link" />
        <br /> <br />
        <textarea
          name=""
          id="textarea"
          cols="30"
          rows="10"
          placeholder="Text"
        ></textarea>
      </div>

      <button
        onClick={() => {
          const select = document.getElementById("user-select");
          const textarea = document.getElementById("textarea");
          const link = document.getElementById("link");

          let nickname;
          let avatar;

          switch (select.value) {
            case "User 1":
              nickname = "@user1";
              avatar = avatar1;
              break;
            case "Battle Toad":
              nickname = "@battle_toad";
              avatar = avatar2;
              break;
            case "Metal Warrior":
              nickname = "@metal_warrior";
              avatar = avatar3;
              break;
            case "Jolly Roger":
              nickname = "@jolly_roger";
              avatar = avatar4;
              break;

            default:
              break;
          }

          newPost = {
            name: select.value,
            nickname,
            avatar,
            postText: textarea.value,
            postPicture: link.value,
            date: today,
            likes: 0,
            reposts: 0,
            comments: 0,
          };

          dispatch(addNewPost());
          setPosted(newArray);
          setNevermind(!nevermind);

          select.value = "default";
          link.value = null;
          textarea.value = null;
        }}
      >
        ADD
      </button>

      <div className="App">
        {posted.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </div>
  );
}

export default App;