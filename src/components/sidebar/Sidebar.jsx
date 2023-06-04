import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Flag,
  LocalPostOfficeTwoTone,
  LocationOn,
  ZoomIn,
  Category,
  NoteAdd,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/homes" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Index Pages
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Actions</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Properties
              </li>
            </Link>
            <Link to="/countries" className="link">
              <li className="sidebarListItem">
                <Flag className="sidebarIcon" />
                Country
              </li>
            </Link>
            <Link to="/provinces" className="link">
              <li className="sidebarListItem">
                <LocationOn className="sidebarIcon" />
                City
              </li>
            </Link>
            <Link to="/cities" className="link">
              <li className="sidebarListItem">
                <ZoomIn className="sidebarIcon" />
                Development
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Categories</h3>
          <ul className="sidebarList">
            <Link to="/categories" className="link">
              <li className="sidebarListItem">
                <Category className="sidebarIcon" />
                Categories
              </li>
            </Link>
            <Link to="/categories-pages" className="link">
              <li className="sidebarListItem">
                <NoteAdd className="sidebarIcon" />
                Categories Pages
              </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
