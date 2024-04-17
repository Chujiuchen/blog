import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://hbimg.b0.upaiyun.com/3d5b11e0b5693b6576b4e86243fbc5c7b59a732825148-16PKyA_fw658"
          alt=""
        />
        <div className="user">
          <img
            src="https://img0.baidu.com/it/u=1126711342,2024956740&fm=253&fmt=auto&app=138&f=JPEG?w=670&h=445"
            alt=""
          />
          <div className="info">
            <span>chujiu</span>
            <p>Posted 2 days age</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=1">
              <img src={Edit} alt="" />
            </Link>
            <Link>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1>How to use the article generator?</h1>
        <p>
          How to write a 10,000-word application, a nonsense report, a magical
          formalism masterpiece? Friends, please find out about this nonsense
          article generator. On GitHub, this soulful project name attracted
          everyone’s attention. One week after the project was born, it shot to
          the top of the trend list. Moreover, not only the name is infused with
          soul, but the generated words also have an irresistible force. Just
          enter a sentence and the system will give you a long article of 10,000
          words.
          <p>
            "I am the man who wants to become the Pirate King. This fact is of
            great significance to me, and I believe it also has a certain
            meaning to the world." Quoting from the classics, speaking clearly
            and logically, but what nonsense does it say? Not nutritious enough,
            just making up nonsense, just like myself when I was young and
            couldn't hold back my composition. Seeing this, we have to start
            thinking about a question: Why was the nonsense article generator
            born? What does it mean to the world? (Incorrect) In line with the
            principle of asking if you don’t understand, Qubit poked the author
            of the generator, Mr. Meng, and he gave us a wonderful answer. The
            fate started from an encounter with a Zhihu question: 6,000-word
            application to withdraw from the student union. It is not an easy
            task to quit the student union, and you have to pay a 6,000-word
            penalty. This post for help was seen by teacher Meng, an
            enthusiastic citizen: When I was in college, I often wrote some very
            formalistic articles. To be honest, I really wanted to write an
            article for him, because I used to be good at writing this kind of
            "nonsense" articles. After writing a few sentences, I suddenly
            thought of writing a program to generate it. In this way, the
            nonsense article generator was born, bringing good news to the
            majority of mankind. Go to Qubits.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};
export default Single;
