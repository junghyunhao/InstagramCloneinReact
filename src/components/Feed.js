import React from "react";
import '.././pages/Main/main.css';

class Feed extends React.Component {
    constructor() {
        super()

        this.state = {
          comments : [],
          comment : ""
        }
        // this.clickHandler=this.clickHandler.bind(this)

    }
      changeHandler = (e)  =>{
        // e.preventDefault();

          this.setState ({comment : e.target.value})  
        //   if (e.keycode === 13) {
        //     console.log("Dd")
        } 
    //   }

      handleKeyPress = (e) => {
        e.keyCode === 13 && this.clickHandler()
      }
    
      clickHandler = () =>  {
        let comments = this.state.comments
        let comment = this.state.comment
        comments.push(comment)
        this.setState({comments : comments})
      }
    
    render() {

        return (
            <>
                <div className="feeds">
                    <article className="article-main">
                        <div className="article-head">
                            <ul className="ID-bar">
                                <div className="ID-on-left">
                                    <li className="profile-photo"><a href><img className="profile"
                                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/97060335_537162886949033_5840329827982245888_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N0Ydf8fjaMAAX_HSRBZ&oh=27046abf6c1f1ca4b5c59194d66c8bfa&oe=5EFCB79D" />
                                    </a></li>
                                    <li><a href className="name"><b>j_ihyun0325</b></a></li>
                                </div>
                                <div className="three-dots">
                                    <li><a href ><img className="dots" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" /></a></li></div>
                            </ul>
                        </div>
                        <div className="article-body">
                            <img className="gyu"
                                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/100952367_175051517275300_1277744578493982972_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=7Lc9Y0vOIcAAX98lc29&oh=3d7f9ea01df169d04c15976f1ace0667&oe=5EFDF80A" />
                        </div>
                        <div className="icon-bar">
                            <div className="three-icons">
                                <span className="heart-box"><button id="heart-button"></button></span>
                                <span><button id="comment-button"></button></span>
                                <span><button id="share-button"></button></span>
                            </div>
                            <div className="bookmark">
                                <span><button id="bookmark-button"></button></span>
                            </div>
                        </div>
                        <div className="whole-comment-box">
                            <div className="comment">
                                <section className="who-liked-this-post">
                                    <p>
                                        <img className="jojo-profile"
                                            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11018530_671008533024617_236422778_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=9nQpG01sO0oAX95Jyyu&oh=1634ba946aeadf2103af636543bff05d&oe=5EFF5702" />
                                        <strong>joanne_jhk</strong>님 외&nbsp;<strong>100명</strong>&nbsp;이 좋아합니다.</p>
                                </section>

                                <section className="first-comment">
                                    <p><strong>j_ihyun0325</strong>&nbsp;물범이 제일 조아🐳🐳...<a href className="more">더 보기</a></p>
                                </section>

                                <section className="second-comment">
                                    <p id="my-msg"><strong>joanne_jhk</strong>&nbsp;고모가 규민이 많이 사랑해~😍</p>
                                    <p id="heart-p-tag"><button id="heart-box-in-comment"></button></p>

                                </section>
                                <section className="new-comment">
                                   {this.state.comments.map ((comment) => {
                                       return (<p><b>joanne_jhk</b> {comment} </p>)})}
                        
                                </section>

                                <section className="when-posted">
                                    <p>18분전</p>
                                </section>

                            </div>
                        </div>

                        <div className="write-comment">
                            <textarea onChange = {this.changeHandler} onKeyUp={this.handleKeyPress} className="comment-field" placeholder="댓글 달기..."></textarea>
                            <button onClick = {this.clickHandler} className="click-to-post" type="submit">게시</button>
                        </div>

                    </article>
                </div>

        </>
      )
    }
}

export default Feed;