//qwerty not used, can be implemented later
import {
  FacebookShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  FacebookIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './sharebtn.scss';
export default function ShareBtn({ shareUrl }) {
  function closeShareBtn() {
    document.querySelector('.share-btn-window').style.display = 'none';
  }
  return (
    <div className="share-btn-window">
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <PinterestShareButton url={shareUrl}>
        <PinterestIcon size={32} round={true} />
      </PinterestShareButton>
      <RedditShareButton url={shareUrl}>
        <RedditIcon size={32} round={true} />
      </RedditShareButton>
      <FontAwesomeIcon
        className="share-btn-window__closer"
        onclick={closeShareBtn}
        icon={faTimes}
      />
    </div>
  );
}
