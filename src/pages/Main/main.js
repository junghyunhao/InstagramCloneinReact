import React, { Component } from "react";
import './main.css';
import logo from '../../images/login/logo_text.png';
// import gyumin from '../../images/'



class Main extends Component {
    render() {
        return (
            <>
                <header className="header-container">
                    <div className="nav-container">
                        <div className="left-nav">
                            <ul>
                                <li><a href="https://www.instagram.com/"><img className="insta-icon" src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" /></a></li>
                                <li><a href="https://www.instagram.com/"><img className="insta-logo" src={logo}/></a></li>
                            </ul>
                        </div>

                        <div className="search-bar">
                            <input type="text" id="search-bar-field" placeholder="검색" />
                        </div>

                        <div className="right-nav">
                            <ul>
                                <li><a href><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" /></a></li>
                                <li><a href><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" /></a></li>
                                <li><a href><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" /></a></li>
                            </ul>
                        </div>

                    </div>
                </header>

                <main>

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
                                        <li><a href ><img className="dots" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"/></a></li></div>
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


                                        </section>

                                        <section className="when-posted">
                                            <p>18분전</p>
                                        </section>

                                    </div>
                                </div>

                                <div className="write-comment">
                                    <textarea className="comment-field" placeholder="댓글 달기..."></textarea>
                                    <button className="click-to-post" type="submit">게시</button>
                                </div>

            </article>
                    </div>

                    <div className="main-right">

                        <div className="my-account">
                            <div className="my-account-photo">
                                <img className="my-account-img"
                                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11018530_671008533024617_236422778_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=9nQpG01sO0oAX95Jyyu&oh=1634ba946aeadf2103af636543bff05d&oe=5EFF5702" />
                            </div>
                            <div className="myname">
                                <div className="my-name-link">
                                    <a href>joanne_jhk</a>
                                </div>
                                <div className="my-name-full">
                                    Joanne Junghyun Kim
                  </div>
                            </div>
                        </div>

                        <div className="story">

                            <div className="friends-story">
                                <div className="recomm-for-you">스토리</div>
                                <div className="see-all">
                                    <a className="see-ALL" href>모두보기</a>
                                </div>
                            </div>

                            <div className="others-info">
                                <div className="profile-photo-of-others">
                                    <img className="img-photo-of-others"
                                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/91984545_799082203947040_7736599369960390656_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=D0VnFuiZ57gAX92b4g2&oh=733339919ba26667046bb74e3f7545c7&oe=5EFE662B" />
                                </div>
                                <div className="name-and-info">
                                    <div className="name-in-bold">seokho_</div>
                                    <div className="info-in-grey">1분 전</div>
                                </div>
                            </div>
                            <div className="others-info">
                                <div className="profile-photo-of-others">
                                    <img className="img-photo-of-others"
                                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100967985_3292695630761485_7563298272790446080_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RkfMPcOfdtYAX-TxfJS&oh=762d9db01d2c2884e440db3637d561d7&oe=5EFC8786" />
                                </div>
                                <div className="name-and-info">
                                    <div className="name-in-bold">dasole123</div>
                                    <div className="info-in-grey">7분 전</div>
                                </div>
                            </div>
                            <div className="others-info">
                                <div className="profile-photo-of-others">
                                    <img className="img-photo-of-others"
                                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/54277713_799689153697378_2693173012621950976_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=9nWFc0xdRhAAX_AEWcU&oh=5dca16ff1ca0c321909ea14434c7efd3&oe=5EFCEA6C"/>
                  </div>
                                    <div className="name-and-info">
                                        <div className="name-in-bold">landiniassociate</div>
                                        <div className="info-in-grey">1시간 전</div>
                                    </div>
                                </div>
                                <div className="others-info">
                                    <div className="profile-photo-of-others">
                                        <img className="img-photo-of-others"
                                            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/11324311_173128789685867_1016736243_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=dRXOh06g6YgAX-CxIeg&oh=4eba8f71eceb3b366f81f7b5a9c6b06e&oe=5EFE455C"/> </div>
                                        <div className="name-and-info">
                                            <div className="name-in-bold">marvaldel</div>
                                            <div className="info-in-grey">4시간 전</div>
                                        </div>
                                    </div>


                                </div>




                                <div className="recomm">

                                    <div className="friends-story">
                                        <div className="recomm-for-you">회원님을 위한 추천</div>
                                        <div className="see-all">
                                            <a className="see-ALL" href>모두보기</a>
                                        </div>
                                    </div>


                                    <div className="others-info-follow">
                                        <div className="for-follow-flex">
                                            <div className="profile-photo-of-others">
                                                <img className="img-photo-of-others-wo-border"
                                                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/74945540_794454807690935_4521975666421268480_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=64oddhucb94AX93NXzQ&oh=5987f47463fbee0cfbafcf5380386cdf&oe=5EFFBC60"/>
                                            </div>
                                                <div className="name-and-info">
                                                    <div className="name-in-bold">emmahill</div>
                                                    <div className="info-in-grey">joanne_jhk님 외 3명이 팔...</div>
                                                </div>
                                            </div>
                                            <div className="follow"><a href>팔로우</a></div>
                                        </div>


                                        <div className="others-info-follow">
                                            <div className="for-follow-flex">
                                                <div className="profile-photo-of-others">
                                                    <img className="img-photo-of-others-wo-border"
                                                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/69035989_884169041957256_6444624407905173504_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RGfGSyCTaQcAX8lZWPi&oh=3fdf3a42684687bd322b67976aba9eba&oe=5EFD39EC"/>
                    </div>
                                                    <div className="name-and-info">
                                                        <div className="name-in-bold">henryl89</div>
                                                        <div className="info-in-grey">jojo님 외 13명이 팔로우...</div>
                                                    </div>
                                                </div>
                                                <div className="follow"><a href>팔로우</a></div>
                                            </div>

                                            <div className="others-info-follow">
                                                <div className="for-follow-flex">
                                                    <div className="profile-photo-of-others">
                                                        <img className="img-photo-of-others-wo-border"
                                                            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/29402551_850345865153574_7568389595742601216_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RVEhGbNvw2oAX9Rozj4&oh=4d9d3d61743d909a17c5b68e681d1587&oe=5EFF9029"/>
                    </div>
                                                        <div className="name-and-info">
                                                            <div className="name-in-bold">movie_goodnight</div>
                                                            <div className="info-in-grey">instagram 신규 가입</div>
                                                        </div>
                                                    </div>
                                                    <div className="follow"><a href>팔로우</a></div>
                                                </div>


                                            </div>




                                            <div className="footer-info">
                                                <nav className="footer-contents">
                                                    <ul>
                                                        <li><a href>소개</a></li>
                                                        <li><a href> 도움말</a></li>
                                                        <li><a href>홍보 센터</a></li>
                                                        <li><a href>API</a></li>
                                                        <li><a href>채용 정보</a></li>
                                                        <li><a href>개인정보처리방침</a></li>
                                                        <li><a href>약관</a></li>
                                                        <li><a href>위치</a></li>
                                                        <li><a href>인기 계정</a></li>
                                                        <li><a href>해시태그</a></li>
                                                        <li><a href>언어</a></li>
                                                    </ul>
                                                </nav>
                                                <span>© 2020 Instagram from Facebook</span>
                                            </div>

                                        </div>
          </main>
                                </>
      ); 
     }
  }
  
  
  export default Main;