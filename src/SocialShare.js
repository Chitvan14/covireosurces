import React from "react";
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WeiboShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import "./SocialShare.css";

function SocialShare() {
  return (
    <>
      <div className="socialshare">
        <WhatsappShareButton
          url="https://www.coviresources.in/"
          title="One Step For Help
        https://www.coviresources.in/
        
        The Covid situations are getting worst in many states of India and people are not getting any information regarding where they should contact or where they should ask for the verified resources. Keeping these things in mind this website will provide information for availability of oxygen, plasma, food service and every other necessary things a person needed in the time of this pandemic situation.😷😷
        
        Please help to provide only verified resources on website so you could be the part of change towards this community and save lives of covid fighters.
        
        Forward, Visit the website and provide current verified covid leads in chat section  https://www.coviresources.in/chat
         🙏🏻🙏🏻 
        
        
        Thank you!
        Forward this message!"
          hashtag="#fightcovid"
          className="socialshareButton"
        >
          <WhatsappIcon
            logofillColor="white"
            round={true}
            size={40}
          ></WhatsappIcon>
        </WhatsappShareButton>
        <a href="/ShareOnSocialMedia.jpg" download className="social__icon">
          <img src="/insta3.png" className="social__insta" />
        </a>

        <a
          href="https://www.facebook.com/sharer.php?u=https://www.coviresources.in/"
          className="social__icon"
        >
          <FacebookIcon
            logofillColor="white"
            round={true}
            size={40}
          ></FacebookIcon>
        </a>

        <TwitterShareButton
          url="https://www.coviresources.in/"
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <TwitterIcon
            logofillColor="white"
            round={true}
            size={40}
          ></TwitterIcon>
        </TwitterShareButton>
        <LinkedinShareButton
          url="https://www.coviresources.in/"
          title="One Step For Help
        https://www.coviresources.in/
        
        The Covid situations are getting worst in many states of India and people are not getting any information regarding where they should contact or where they should ask for the verified resources. Keeping these things in mind this website will provide information for availability of oxygen, plasma, food service and every other necessary things a person needed in the time of this pandemic situation.😷😷
        
        Please help to provide only verified resources on website so you could be the part of change towards this community and save lives of covid fighters.
        
        Forward, Visit the website and provide current verified covid leads in chat section  https://www.coviresources.in/chat
         🙏🏻🙏🏻 
        
        
        Thank you!
        Forward this message!"
          hashtag="#fightcovid"
          className="socialshareButton"
        >
          <LinkedinIcon
            logofillColor="white"
            round={true}
            size={40}
          ></LinkedinIcon>
        </LinkedinShareButton>

        <FacebookMessengerShareButton
          url="https://www.coviresources.in/"
          title="One Step For Help
        https://www.coviresources.in/
        
        The Covid situations are getting worst in many states of India and people are not getting any information regarding where they should contact or where they should ask for the verified resources. Keeping these things in mind this website will provide information for availability of oxygen, plasma, food service and every other necessary things a person needed in the time of this pandemic situation.😷😷
        
        Please help to provide only verified resources on website so you could be the part of change towards this community and save lives of covid fighters.
        
        Forward, Visit the website and provide current verified covid leads in chat section  https://www.coviresources.in/chat
         🙏🏻🙏🏻 
        
        
        Thank you!
        Forward this message!"
          hashtag="#fightcovid"
          className="socialshareButton"
        >
          <FacebookMessengerIcon
            logofillColor="white"
            round={true}
            size={40}
          ></FacebookMessengerIcon>
        </FacebookMessengerShareButton>

        <TelegramShareButton
          url="https://www.coviresources.in/"
          title="One Step For Help
          https://www.coviresources.in/
          
          The Covid situations are getting worst in many states of India and people are not getting any information regarding where they should contact or where they should ask for the verified resources. Keeping these things in mind this website will provide information for availability of oxygen, plasma, food service and every other necessary things a person needed in the time of this pandemic situation.😷😷
          
          Please help to provide only verified resources on website so you could be the part of change towards this community and save lives of covid fighters.
          
          Forward, Visit the website and provide current verified covid leads in chat section  https://www.coviresources.in/chat
           🙏🏻🙏🏻 
          
          
          Thank you!
          Forward this message!"
          hashtag="#fightcovid"
          className="socialshareButton"
        >
          <TelegramIcon logofillColor="white" round={true} size={40}>
            {" "}
          </TelegramIcon>
        </TelegramShareButton>
      </div>
      {/* <div className="socialshare">
        <HatenaShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <HatenaIcon logofillColor="white" round={true} size={30}></HatenaIcon>
        </HatenaShareButton>

        <InstapaperShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <InstapaperIcon logofillColor="white" round={true} size={30}></InstapaperIcon>
        </InstapaperShareButton>

        <LineShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <LineIcon logofillColor="white" round={true} size={30}></LineIcon>
        </LineShareButton>

        <LivejournalShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <LivejournalIcon logofillColor="white" round={true} size={30}></LivejournalIcon>
        </LivejournalShareButton>

        <MailruShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <MailruIcon logofillColor="white" round={true} size={30}></MailruIcon>
        </MailruShareButton>

        <OKShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <OKIcon logofillColor="white" round={true} size={30}></OKIcon>
        </OKShareButton>

        <PinterestShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <PinterestIcon logofillColor="white" round={true} size={30}></PinterestIcon>
        </PinterestShareButton>

        <PocketShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <PocketIcon logofillColor="white" round={true} size={30}></PocketIcon>
        </PocketShareButton>
        </div>

<div className="socialshare">
<RedditShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >



          <RedditIcon logofillColor="white" round={true} size={30}></RedditIcon>
        </RedditShareButton>
       

        <TumblrShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <TumblrIcon logofillColor="white" round={true} size={30}></TumblrIcon>
        </TumblrShareButton>

        <ViberShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <ViberIcon logofillColor="white" round={true} size={30}></ViberIcon>
        </ViberShareButton>

        <VKShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <VKIcon logofillColor="white" round={true} size={30}></VKIcon>
        </VKShareButton>

        <WeiboShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <WeiboIcon logofillColor="white" round={true} size={30}></WeiboIcon>
        </WeiboShareButton>

        <WorkplaceShareButton
          url=""
          quote={" "}
          title="Sharing Content"
          hashtag="#React"
          className="socialshareButton"
        >
          <WorkplaceIcon logofillColor="white" round={true} size={30}></WorkplaceIcon>
        </WorkplaceShareButton>
</div> */}
    </>
  );
}

export default SocialShare;
