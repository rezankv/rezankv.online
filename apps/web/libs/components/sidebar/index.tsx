'use client';
import { github_link, linkedin_link, my_email, telegram_link, twitter_link } from '../../constants';
import { cn } from '../../utils';
import useLogic from './useLogic';

export const Sidebar = () => {
  const { toggleSidebarHandler, isOpen } = useLogic();
  return (
    <aside
      className={cn('sidebar bg-background-paper ', isOpen ? 'active' : '')}
      onClick={toggleSidebarHandler}
    >
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/my-avatar.png" alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            رضا نیک روش
          </h1>

          <p className="title">توسعه دهنده وب</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>اطلاعات</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">ایمیل</p>

              <a
                href={`mailto:${my_email}`}
                className="contact-link dir-ltr long-text disable-ellipsis-on-hover"
              >
                {my_email}
              </a>
            </div>
          </li>

          {/* <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">موبایل</p>

              <a href="tel:+989337073579" className="contact-link">
                ۰۹۳۳۷۰۷۳۵۷۹
              </a>
            </div>
          </li> */}

          {/* <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">تولد</p>

              <time datetime="1982-06-23">۵/۹/۱۳۸۰</time>
            </div>
          </li> */}

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">مکان</p>

              <address>ایران - خوزستان - اهواز</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a target="_blank" href={linkedin_link} className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a target="_blank" href={github_link} className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a target="_blank" href={twitter_link} className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a target="_blank" href={telegram_link} className="social-link">
              {/* <ion-icon name="logo-telegram"></ion-icon> */}
              <img src="/images/icon-telegram-grey.svg" alt="mobile app icon"  />
            </a>
          </li>

          {/* <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
};
