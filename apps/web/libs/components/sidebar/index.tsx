import React from 'react';
import { linkedin_link, twitter_link } from '../../constants';

const Sidebar = () => {
  return (
    <aside className="sidebar" data-sidebar>
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
                href="mailto:reza.nikravesh80@gmail.com"
                className="contact-link dir-ltr long-text disable-ellipsis-on-hover"
              >
                reza.nikravesh80@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">موبایل</p>

              <a href="tel:+989337073579" className="contact-link">
                ۰۹۳۷۰۷۷۶۰۴۱
              </a>
            </div>
          </li>

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
            <a target="_blank" href={linkedin_link} className="social-link">
            <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a target="_blank" href={twitter_link} className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
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

export default Sidebar;