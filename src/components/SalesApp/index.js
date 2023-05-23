import "./index.css";
import Sidebar from "../Sidebar";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { RiMoonClearLine } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { CgLoadbarSound } from "react-icons/cg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import {
  BsThreeDotsVertical,
  BsGraphUpArrow,
  BsCurrencyDollar,
} from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdLaptop } from "react-icons/md";
import { BiDollar, BiBriefcase } from "react-icons/bi";

const SalesApp = () => (
  <div className="main-container">
    <div className="sidebar-section">
      <Sidebar />
    </div>
    <div className="main-body">
      <div className="header-container">
        <div className="search-item">
          <AiOutlineSearch />
          <input type="search" className="search-input" />
        </div>
        <div className="header-right">
          <RiMoonClearLine className="icons" />
          <AiOutlineBell className="icons" />
          <img
            src="https://res.cloudinary.com/djzsbpran/image/upload/v1684821473/image_processing20210510-19148-pbkit4_pl2qh3.png"
            className="profile-pic"
            alt="profile pic"
          />
        </div>
      </div>
      <div className="content-container">
        <div className="first-row">
          <div className="winning-card">
            <div className="left">
              <p className="win-head">Congratulations John! 🥳 </p>
              <p className="win-desc">Best seller of the month</p>
              <p className="sales-price">$42.8k</p>
              <button type="button" className="view-sales-btn">
                VIEW SALES
              </button>
            </div>
            <div className="trophy-image-con">
              <img
                src="https://res.cloudinary.com/djzsbpran/image/upload/v1684822833/1986987_jzhfue.png"
                className="trophy-image"
                alt="trophy"
              />
            </div>
          </div>
          <div className="statistics-card">
            <div className="statistics-top">
              <p className="stat-main-head">Statistics Card</p>
              <BsThreeDotsVertical />
            </div>
            <p className="growth-desc">
              <span className="growth">Total 48.5% growth 😎</span> this month
            </p>
            <div className="stat-cards">
              <div className="stat-card">
                <div className="icon-body">
                  <BsGraphUpArrow />
                </div>
                <div>
                  <p className="title">Sales</p>
                  <span className="item-price">245k</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="icon-body green">
                  <FaRegUser />
                </div>
                <div>
                  <p className="title">Customers</p>
                  <span className="item-price">12.5k</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="icon-body orange">
                  <MdLaptop />
                </div>
                <div>
                  <p className="title">Products</p>
                  <span className="item-price">1.54k</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="icon-body sky-blue">
                  <BsCurrencyDollar />
                </div>
                <div>
                  <p className="title">Revenue</p>
                  <span className="item-price">$88k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="overview-card">
            <div className="statistics-top">
              <p className="stat-main-head">Statistics Card</p>
              <BsThreeDotsVertical />
            </div>
            <img
              src="https://res.cloudinary.com/djzsbpran/image/upload/v1684826992/sudh_brxspw.png"
              alt="graph"
              className="graph"
            />
            <div className="compare">
              <span className="percent">45%</span>
              <p className="performance">
                Your sales performance is 45% 😎 better compared to last month
              </p>
            </div>
            <button type="button" className="details-button">
              DETAILS
            </button>
          </div>
          <div className="total-card">
            <div className="statistics-top">
              <p className="stat-main-head">Statistics Card</p>
              <BsThreeDotsVertical />
            </div>
            <div>
              <div className="stat-card">
                <span className="total-earnings">$24,895 </span>
                <p className="rise">
                  <IoMdArrowDropup className="icon" /> <span>10%</span>
                </p>
              </div>
              <span className="performance">Compared to $84,325 last year</span>
            </div>
            <img
              src="https://res.cloudinary.com/djzsbpran/image/upload/v1684828518/kumar_vaeddc.png"
              alt="total graph"
              className="total-graph"
            />
          </div>
          <div className="features-card">
            <div className="small-card">
              <div className="statistics-top">
                <div className="feature-block green">
                  <CgLoadbarSound className="f-icon" />
                </div>
                <BsThreeDotsVertical />
              </div>
              <p className="total-price">Total Profit</p>
              <div className="f-box">
                <span className="f-price">$25.6k</span>
                <span className="f-percent">+42%</span>
              </div>
              <p className="f-title">Weekly Profit</p>
            </div>
            <div className="small-card beta">
              <div className="statistics-top">
                <div className="feature-block brown">
                  <BiDollar className="ff-icon" />
                </div>
                <BsThreeDotsVertical />
              </div>
              <p className="total-price">Refunds</p>
              <div className="f-box">
                <span className="f-price">$78</span>
                <span className="f-percent rd">-15%</span>
              </div>
              <p className="f-title">Past Month</p>
            </div>
            <div className="small-card ss">
              <div className="statistics-top">
                <div className="feature-block voilet">
                  <BiBriefcase className="ff-icon" />
                </div>
                <BsThreeDotsVertical />
              </div>
              <p className="total-price">New Project</p>
              <div className="f-box">
                <span className="f-price">862</span>
                <span className="f-percent rd">-18%</span>
              </div>
              <p className="f-title">Yearly Project</p>
            </div>
            <div className="small-card ss beta">
              <div className="statistics-top">
                <div className="feature-block orange">
                  <AiOutlineQuestionCircle className="ff-icon" />
                </div>
                <BsThreeDotsVertical />
              </div>
              <p className="total-price">Sales Queries</p>
              <div className="f-box">
                <span className="f-price">15</span>
                <span className="f-percent rd">-18%</span>
              </div>
              <p className="f-title">Last Week</p>
            </div>
          </div>
          <div className="overview-card">
            <div className="statistics-top">
              <p className="stat-main-head">Sales by Countries</p>
              <BsThreeDotsVertical />
            </div>
            <div className="end-cards-list">
              <div className="end-card">
                <div className="end-left">
                  <p className="initial">US</p>
                  <div>
                    <p className="end-box">
                      $8,656k{" "}
                      <span className="end-percent">
                        <IoIosArrowUp /> 25.8%
                      </span>
                    </p>
                    <span className="country">USA</span>
                  </div>
                </div>
                <div className="end-right">
                  <span className="end-price">894k</span>
                  <span className="end-txt">Sales</span>
                </div>
              </div>
              <div className="end-card">
                <div className="end-left">
                  <p className="initial uk">UK</p>
                  <div>
                    <p className="end-box">
                      $2,415k{" "}
                      <span className="end-percent rd">
                        <IoIosArrowDown /> 6.2%
                      </span>
                    </p>
                    <span className="country">UK</span>
                  </div>
                </div>
                <div className="end-right">
                  <span className="end-price">645k</span>
                  <span className="end-txt">Sales</span>
                </div>
              </div>
              <div className="end-card">
                <div className="end-left">
                  <p className="initial in">IN</p>
                  <div>
                    <p className="end-box">
                      $865k{" "}
                      <span className="end-percent">
                        <IoIosArrowUp /> 12.4%
                      </span>
                    </p>
                    <span className="country">India</span>
                  </div>
                </div>
                <div className="end-right">
                  <span className="end-price">148k</span>
                  <span className="end-txt">Sales</span>
                </div>
              </div>
            </div>
          </div>
          <div className="final-container">
            <div className="overview-card xx zz">
              <div className="statistics-top">
                <p className="stat-main-head">Deposit</p>
                <span className="view">View All</span>
              </div>
              <div className="end-cards-list">
                <div className="end-card aa">
                  <div className="end-left">
                    <img
                      src="https://res.cloudinary.com/djzsbpran/image/upload/v1684836614/DyWXd86UwAAsLM-_nhcq7g.png"
                      alt="gumroad"
                      className="gumroad"
                    />
                    <div>
                      <p className="account">Gumroad Account</p>
                      <span className="acnt">Sell</span>
                    </div>
                  </div>
                  <div className="end-right">
                    <span className="end-price gr">+$4,650</span>
                  </div>
                </div>
                <div className="end-card aa">
                  <div className="end-left">
                    <img
                      src="https://res.cloudinary.com/djzsbpran/image/upload/v1684836874/png-clipart-logo-mastercard-product-font-mastercard-text-orange-thumbnail_girk3s.png"
                      alt="mastercard"
                      className="mastercard"
                    />
                    <div>
                      <p className="account">Mastercard </p>
                      <span className="acnt">Wallet deposit</span>
                    </div>
                  </div>
                  <div className="end-right">
                    <span className="end-price gr">+$92,705</span>
                  </div>
                </div>
                <div className="end-card aa">
                  <div className="end-left">
                    <img
                      src="https://res.cloudinary.com/djzsbpran/image/upload/v1684837112/logo-stripe-brand-png-favpng-VeefGFueVQyy5wXg57ZH87qYz-removebg-preview_wxs96u.png"
                      alt="stripe"
                      className="gumroad"
                    />
                    <div>
                      <p className="account">Stripe Account </p>
                      <span className="acnt">iOS application</span>
                    </div>
                  </div>
                  <div className="end-right">
                    <span className="end-price gr">+$957</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-card xx">
              <div className="statistics-top">
                <p className="stat-main-head">Withdraw</p>
                <span className="view">View All</span>
              </div>
              <div className="end-cards-list">
                <div className="end-card aa">
                  <div className="end-left">
                    <img
                      src="https://res.cloudinary.com/djzsbpran/image/upload/v1684837289/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail-removebg-preview_dv02d6.png"
                      alt="google"
                      className="gumroad"
                    />
                    <div>
                      <p className="account">Google Adsense </p>
                      <span className="acnt">Paypal Deposit</span>
                    </div>
                  </div>
                  <div className="end-right">
                    <span className="end-price rd">-$145</span>
                  </div>
                </div>
                <div className="end-card aa">
                  <div className="end-left">
                    <img
                      src="https://res.cloudinary.com/djzsbpran/image/upload/v1684837424/png-transparent-github-git-hub-logo-icon-thumbnail_nacood.png"
                      alt="github"
                      className="gumroad"
                    />
                    <div>
                      <p className="account">Github Enterprise </p>
                      <span className="acnt">Security & compliance</span>
                    </div>
                  </div>
                  <div className="end-right">
                    <span className="end-price rd">-$1870</span>
                  </div>
                </div>
                <div className="end-card aa">
                  <div className="end-left">
                    <img
                      src="https://res.cloudinary.com/djzsbpran/image/upload/v1684837536/unnamed-removebg-preview_jgcsyq.png"
                      alt="slack"
                      className="gumroad"
                    />
                    <div>
                      <p className="account">Upgrade Slack Plan </p>
                      <span className="acnt">Debit card deposit</span>
                    </div>
                  </div>
                  <div className="end-right">
                    <span className="end-price rd">-$450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SalesApp;
