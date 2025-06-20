export enum AppRoutes {
  // Auth Pages
  LOGIN = "/login",
  REGISTER = "/register",
  REGISTER_USER = "/register/user",
  REGISTER_TOUR_GUIDE = "/register/tour-guide",
  CONFIRMED_TOUR_GUIDE_REGISTER = "/register/tour-guide/confirmed",
  FORGOT_PASSWORD = "/forgot-password",
  OPT_CODE = "/opt-code",
  RESET_PASSWORD = "/reset-password",

  // Main Pages
  ROOT = "/",
  TYPE_OF_TOURISM = "/type-of-tourism",
  GOVERNORATES = "/governorates",
  MACHINE_QUOTATIONS = "/machine-quotations",
  CONTACT_US = "/contact-us",
  FAVORITE_PLACES = "/favorite-places",

  // Dynamic Pages
  SINGLE_TOURISM = "/type-of-tourism/:name",
  SINGLE_GOVERNORATE = "/governorates/:name",
  SINGLE_PLACE = "/places/:name",
  TRIP_DETAILS = "/recommendation/trips/:name",
  SEARCH_PLACES = "/search-places/:query",
  // Protected Pages
  RECOMMENDATION = "/recommendation",
  USER_PROFILE = "/user-profile",
  SHOW_USER_PROFILE = "/show-user-profile/:userId",
  SHOW_TOUR_GUIDE_PROFILE = "/show-tour-guide-profile/:tourGuideId",
  // Admin Pages
  ADMIN = "/admin",
  ADMIN_DASHBOARD = "/admin/dashboard",
  ADMIN_TOUR_GUIDES_REQUEST = "/admin/dashboard/tour-guides-request",
  ADMIN_PLACES = "/admin/dashboard/places",
  ADMIN_USERS_CONTACT_US_PROBLEMS = "/admin/dashboard/users-contact-us-problems",
  ADMIN_TRIP_PLACES = "/admin/dashboard/trip-places",
  // Tour Guide Pages
  ALL_TRIPS_FOR_TOUR_GUIDE = "/tour-guide/all-trips",
  UPDATE_TOUR_GUIDE_PROFILE = "/tour-guide/update-profile",
}
export enum UserRoles {
  ADMIN = "Admin",
  TOUR_GUIDE = "Tourguid",
  MEMBER = "Member",
}
