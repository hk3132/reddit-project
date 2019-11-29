import React from "react";
import "./css/App.css";
import "./css/NavBar.css";
import "./css/Posts.css";
import "./css/RightContent.css";
import "./css/MediaQuery.css";
import Seasonal from "./components/Seasonal";
import CreatePosts from "./components/CreatePosts";
import Posts from "./components/Posts";
import cat from "./img/cat.gif";
import boris from "./img/boris.jpg";
import library from "./img/library.jpg";
import landlord from "./img/landlord.jpg";
import jesus from "./img/jesus.jpg";
import ah from "./img/ah.gif";
import earth from "./img/earth.gif";
import finger from "./img/finger.gif";
import ducks from "./img/ducks.jpg";
import NavBar from "./components/NavBar";
import Trending from "./components/Trending";
import news1 from "./img/news1.jpg";
import news2 from "./img/news2.jpg";
import news3 from "./img/news3.jpg";
import news4 from "./img/news4.jpg";
import RightContent from "./components/RightContent";
import Advertisement from "./components/Advertisement";
import Premium from './components/Premium';
import TrendingCommunities from './components/TrendingCommunities';
import PopularCommunities from "./components/PopularCommunities";
import adImage from "./img/Screenshot.png";
import adImage1 from "./img/Screenshot4.png";
import UsingReddit from "./components/UsingReddit";
import Media from "./components/Media.js"
import MediaNav from "./components/NavMedia.js"

function App() {

  const pic1="https://b.thumbs.redditmedia.com/OQmXrWQQsyMegmJssY5zqjQ4IDvHV7jwm1UhvY4jxdk.png";
  const pic2="https://b.thumbs.redditmedia.com/Y6JLJj1gpTqKhe-XDLL6re1qdTDS1zFuzPCAB_10EiU.png";
  const pic3="https://styles.redditmedia.com/t5_2s3j5/styles/communityIcon_wxjmsoxhf5w31.png";
  const pic4="https://a.thumbs.redditmedia.com/tbLwsQpnObxDoRK-zP_O5-vAgnYemyDmGFSqyUVe5s0.png";
  const pic5="https://b.thumbs.redditmedia.com/ffHJltKEpc-OuLhs0goeUHdJQ_Ijh5idheXjbRSrTPg.png";
  const pic6="https://b.thumbs.redditmedia.com/Ro8vELMwxpxKo3ZJ4J6jhtnqVOgcRWAgSQPgOLjrgPU.png";
  const pic7="https://styles.redditmedia.com/t5_2r5t2/styles/communityIcon_hflpdjr8pl211.png";
  const pic8="https://styles.redditmedia.com/t5_2r5t2/styles/communityIcon_hflpdjr8pl211.png";
  const pic9="https://styles.redditmedia.com/t5_2r5t2/styles/communityIcon_hflpdjr8pl211.png";
  const pic10="https://styles.redditmedia.com/t5_2qyw8/styles/communityIcon_r3qrpvhhlmp31.jpg?format=pjpg&s=eeeed3a79edf851c3039d6d36d6eb381f7f58350";
  const greyArrow="https://i0.wp.com/meritocracy.is/blog/wp-content/uploads/2019/01/grey-down-arrow-icon-png-1.png?fit=385%2C233&ssl=1";

  return (
    <div className="App">
      <NavBar />
      <MediaNav />
      <div className="all">
        <div className="margin">
          <h1 className="trending">Trending today</h1>
              <Media 
              image={news1}
              title="Godfrey Gao"
              description="Mortal Instruments actor Godfrey Gao dies when"
              trendinguser="r/television and more"
              />
            <div className="trend">
              <Trending 
              image={news1}
              title="Godfrey Gao"
              description="Mortal Instruments actor Godfrey Gao dies when"
              trendinguser="r/television and more"
              />
              <Trending
              image={news2}
              title="Gary Rhodes"
              description="RIP to a big Reds fan, chef and restauranteur Gary Rhodes who"
              trendinguser="r/reddevils and more"
              />
              <Trending 
              image={news3}
              title="Barcelona"
              description="Barcelona[2] - Borussia Dortmund - L.Messi 33"
              trendinguser="r/soccer and more"
              />
              <Trending 
              image={news4}
              title="Melissa Benoist"
              description='"Supergirl" star Melissa Benoist opens up in emotional video: "I'
              trendinguser="r/television and more"
              />
          </div>
          <div className="RightContent">
            <div className="TopGrowingHeading">
            <div className="title1"> 
            <h4>Today's Top Growing Comunities</h4>
            </div>
            </div>

          <div className="info">
            <RightContent num="1" pic={pic1} name="r/youseeingthisshit"/>
            <RightContent num="2" pic={pic2} name="r/worldpolitics"/>
            <RightContent num="3" pic={pic3} name="r/teslamotors"/>
            <RightContent num="4" pic={pic4} name="r/WatchPeopleDieInside"/>
            <RightContent num="5" pic={pic5} name="r/assholedesign"/>
            <button className="viewAllBtn">View All</button>
          </div>

          <div className="more">
              <button className="b1">Sports</button>
              <button className="b1">News</button>
              <button className="b1">Gaming</button>
              <button className="b1">Aww</button>
          </div>
          <div className="bar">
            <p>this text is invisible</p>
          </div>
          <Advertisement img={adImage}/>
          <div className="bar">
            <p>this text is invisible</p>
          </div>
          <Premium/>
          <div className="bar">
            <p>this text is invisible</p>
          </div>
          <p className="trendingComunitiesText">TRENDING COMMUNITIES</p>
          <TrendingCommunities pic={pic6} name="r/Doggles" members="35.4k"/>
          <TrendingCommunities pic={pic7} name="r/sciences" members="111k"/>
          <TrendingCommunities pic={pic8} name="r/JusitnDingalong" members="10k"/>
          <TrendingCommunities pic={pic9} name="r/Barkitecture" members="10.4k"/>
          <TrendingCommunities pic={pic10} name="r/grilledcheese" members="160k"/>
          <div className="bar">
            <p>this text is invisible</p>
          </div>
          <PopularCommunities topic="POPULAR COMMUNITIES" arrow={greyArrow}/>
          <PopularCommunities topic="GAMING" arrow={greyArrow}/>
          <PopularCommunities topic="SPORTS" arrow={greyArrow}/>
          <PopularCommunities topic="TV" arrow={greyArrow}/>
          <PopularCommunities topic="TRAVEL" arrow={greyArrow}/>
          <PopularCommunities topic="HEALTH & FITNESS" arrow={greyArrow}/>
          <PopularCommunities topic="FASHION" arrow={greyArrow}/>
          <div className="bar">
            <p>this text is invisible</p>
          </div>
          <Advertisement img={adImage1}/>
          <div className="bar">
            <p>this text is invisible</p>
          </div>
          <UsingReddit/>
          <div className="largeBar">
            <p>this text is invisible</p>
          </div>
          <div className="backToTopButton">
            <button><a href="app.js" className="backToTopBtn" >Back To Top</a></button>
          </div>
          </div>
          <Seasonal />
          <CreatePosts />
          
          <div className="postsDiv">
          <Posts 
          votes="23.4k"
          avatar="4657"
          community="r/gifs"
          user="u/unnaturalorder"
          hours="5"
          article="Swimming Sphinx cat"
          link="https://gfycat.com/hoarsevaguechrysalis"
          picture={cat}
          comments= {741}
          />
          <Posts 
          votes="16.7k"
          avatar="7857295"
          community="r/worldnews"
          user="u/newnemo"
          hours="4"
          article="Boris Johnson said that Islamophobia is a 'natural reation' to Islam and that 'Islam is the problem'"
          link="https://www.businessinsider.com/boris-johnson-islam-is-the-problem-and-islamophobia-is-a-natural-reaction-2018-8?utm_source=reddit.com&r=US&IR=T"
          picture={boris}
          comments= "4.8k"
          />
          <Posts 
          votes="100.4k"
          avatar="jnsk"
          community="r/ducks"
          user="u/duckswillpay"
          hours="67"
          article="I will get my revenge!!!"
          picture={ducks}
          comments= "7.8k"
          />
          <Posts 
          votes="7.4k"
          avatar="hgiaio"
          community="r/gifs"
          user="u/greenpickle"
          hours="8"
          article="Muppet screams with delight at new taco bell menu"
          picture={ah}
          comments= {759}
          />
          <Posts 
          votes="43.4k"
          avatar="767898"
          community="r/gaming"
          user="u/veterinarygamer"
          hours="7"
          article="This deal happened today. Brought an entire Playstation 2 library from someone. Picking up tomorrow"
          picture={library}
          comments= "2.2k"
          />
          <Posts 
          votes="57.6k"
          avatar="759278950"
          community="r/trashy"
          user="u/LordNadez"
          hours="15"
          article="Landlord finding any reason not to give a security deposit back"
          picture={landlord}
          comments= "2.1k"
          />
          <Posts 
          votes="50.0k"
          avatar="7684903"
          community="r/comics"
          user="u/Dystopiancomics"
          hours="15"
          article="Jesus is back"
          picture={jesus}
          comments= "1.5k"
          />
          <Posts 
          votes="57.6k"
          avatar="hgahovna"
          community="r/environment"
          user="u/happyworldhappylife"
          hours="45"
          article="IKEA to invest 200 million euros in race to turn 'climate positive'"
          link="https://uk.reuters.com/article/uk-ikea-investment-climate/ikea-to-invest-200-million-euros-in-race-to-turn-climate-positive-idUKKBN1Y10PI"
          picture={earth}
          comments= {500}
          />
          <Posts 
          votes="57.4k"
          avatar="jjomdkwo"
          community="r/gifs"
          user="u/pencillover"
          hours="27"
          article="Loading finger"
          picture={finger}
          comments= {6}
          />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
