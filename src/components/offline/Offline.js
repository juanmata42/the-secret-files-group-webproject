import cx from 'classnames';
import { useEffect } from 'react';
import { useBooleanState, usePrevious } from 'webrix/hooks';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './_offline.scss';

export default function Offline({ children }) {
  const {
    value: online,
    setFalse: setOffline,
    setTrue: setOnline,
  } = useBooleanState(navigator.onLine);
  const previousOnline = usePrevious(online);

  useEffect(() => {
    if (!online) {
      return void disableBodyScroll(document.body);
    }

    enableBodyScroll(document.body);
  }, [online]);

  useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return (
    <>
      <div
        className={cx(
          'offline',
          'animate__animated',
          'animate__faster',
          `animate__${online ? 'slideOutUp' : 'slideInDown'}`
        )}
        style={
          previousOnline === online && online ? { display: 'none' } : void 0
        }
      />
      <div className="offline__content">
        <div className="offline__text">
          <p subHeading className="mt-0 mb-5">
            You're not online
          </p>
          <p className="mt-0 mb-0">Check your internet connection.</p>
        </div>
      </div>
      <div
        className={cx('offline__overlay', {
          'offline__overlay--visible': !online,
        })}
      />
      {children}
    </>
  );
}
