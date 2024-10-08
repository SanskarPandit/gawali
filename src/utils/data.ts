import {
  dashboard,
  deliveryCalendar,
  myPlan,
  vacation,
  bills,
  help,
  wallet,
  profile,
  products,
  orders,
  support,
  logout,
} from "../constants/icons";

const menuItems = [
  {
    title: "Dashboard",
    icon: dashboard,
    descp: "Overview of your bills",
    routes: "/dashboard",
  },
  {
    title: "Delivery Calendar",
    icon: deliveryCalendar,
    descp: "Daily Deliveries,Make Changes,etc",
    routes: "/calendar",
  },
  {
    title: "My Plan",
    icon: myPlan,
    descp: "View or Modify current subscriptions",
    routes: "/my-plans",
  },
  {
    title: "Vacations",
    icon: vacation,
    descp: "Pause,Resume,Add vacations",
    routes: "/vacation",
  },
  {
    title: "My Requests",
    icon: help,
    descp: "Milk quantity change, Issues, etc",
    routes: "/request",
  },
  {
    title: "Bills",
    icon: bills,
    descp: "Current & Past bills, Unbilled amt, etc",
    routes: "/bills",
  },
  {
    title: "Wallet",
    icon: wallet,
    descp: "Add money, Check Balance, etc",
    routes: "/wallet",
  },
  {
    title: "Products",
    icon: products,
    descp: "Desi Ghee, Curd, Paneer, etc",
    routes: "/products",
  },
  {
    title: "My Profile",
    icon: profile,
    descp: "View, update profile, change phone, etc",
    routes: "/profile",
  },
  {
    title: "My Orders",
    icon: orders,
    descp: "Track your Paneer, Ghee, etc orders",
    routes: "/orders",
  },
  {
    title: "Support",
    icon: support,
    descp: "Help on queries, Contact with us.",
    routes: "/support",
  },
  { title: "Logout", icon: logout, descp: "" },
];
export default menuItems;
