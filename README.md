# Accent Adept #
### Live link : https://accent-adept.netlify.app/
Admin-email: nirob1@gmail.com
password: N!r@b1

* *Accent Adept* is a website dedicated to foreign language learning, offering a range of paid courses.

### Overview

* Comprehensive Language Learning: Accent Adept provides a robust platform for foreign language enthusiasts, offering a diverse range of paid courses facilitated by expert instructors.

* User-Friendly Navigation: The website features an intuitive interface with a distinctive logo and a navigational bar, making it easy for users to explore various sections such as Instructors, Classes, and the personalized Dashboard.

* Efficient Cart Management: The Cart functionality is reserved for logged-in users, ensuring privacy and security. This private route allows users to manage their selected courses seamlessly.

* Tailored Dashboards: The website offers three distinct dashboards for Users/Students, Instructors, and Admin, each designed to cater to the specific needs and functionalities of their respective roles.

* Flexible Payment Options: With integrated Stripe functionality, users can securely pay for courses directly from the platform, enhancing the overall user experience and convenience.

# Technology Used

* `React`, `CSS`, `Tailwind CSS`, `DaisyUi (component library)`, `Node.js`, `Express.js`, `MongoDB Database`

# Packages

* `Tanstack/React Query`, `axios (interceptors also)`, `Firebase`, `lottie-react`, `Framer-motion,` `Moment.js`, `react-fast-marquee`, `Swiper.js`, `react-helmet-async`, `react-hook-form`, `react-hot-toast`, `react-icons`, `react-router-dom`, `recharts`, `sweetalert2`, `React Ratings`


# Home Page *

* Navbar: The homepage features a navigational bar, complete with a distinctive logo and a set of navigation links following Home, Instructors, Classes, Dashboard, Cart. The *Cart* link is exclusive to users and is a private route accessible only to valid, logged-in users. This ensures that only authenticated users can access and interact with the contents of their shopping cart.

* Banner: A prominent banner is showcased, accompanied by informative content about the website's offerings.

* Stats Section: Presenting a statistics section, we provide comprehensive data on our courses.

* Popular Instructors: Explore our 'Popular Instructors' section, highlighting the top 6 educators based on the number of classes taken.

* Popular Classes: Discover our 'Popular Classes' section, showcasing the top 6 courses based on total student enrollment.

* Why Choose Us: Delve into the 'Why Choose Us' section, where valuable insights are shared on how students can enhance their knowledge.

* Newsletter Subscription: Engage with our newsletter section, allowing students to stay updated by subscribing with their email addresses.

* Our Partners: A dedicated section acknowledges and displays our esteemed partners.

* Footer: Concluding the page is a well-designed footer, containing additional information to enhance the user's experience.

# Instructors Route

* This route is designated as private, accessible exclusively to logged-in users. Within this route, all instructors are displayed in cards. Each card features a 'Demo Class' button, which, upon clicking, triggers the display of a demo class in a modal.

# Classes Route

* This route is set as private, exclusively accessible to authorized users. Within this route, all classes are presented in cards. Each card provides essential information about the courses and includes a 'View Details' button, guiding users to the dedicated Classes Details page.

### View Details route
* On this page, users can access comprehensive information about the courses. Towards the bottom of the page, a 'Select Now' button is prominently displayed. Only registered users or students can make selections. Upon choosing a course, it will be added to the cart for further processing.

# Register Page 
* On the Register page, users have the option to create their account by entering their information. Additionally, for user convenience, there is an option to log in using their Google account. This dual registration method provides flexibility for users to choose the signup approach that suits them best.

# Login Page 
* The Login page offers users a seamless authentication experience. Users can log in by entering their credentials, providing a straightforward method to access their accounts. For added convenience, a Google login option is available, enabling users to sign in effortlessly using their Google credentials.

# Dashboard 

* There are three different dashboards: one for 'Users/Students,' one for 'Instructors,' and another for 'Admin.' Each dashboard is made specifically for its user type, providing a personalized experience based on their role and needs.

## 'User/Student' Dashboard
* Student-home Route: A hardcoded route designed specifically for student home navigation.

* My Selected Course: Displays all courses selected by the user/student in a table format. Each entry includes a 'Cancel' button to remove the course from 'My Selected Course.' Additionally, a 'Pay' button allows users to proceed to the 'Payment' page, where they can make payments securely through 'Stripe'.

* My Enrolled Courses: This route showcases all courses that the user/student has successfully enrolled in and paid for, utilizing a table for data presentation.

* Payment History: Allows users/students to view their complete payment history for all courses in a clear and organized manner.

## 'Instructor' Dashboard
* Instructor Home Route: A hardcoded route tailored for instructors, serving as their dedicated homepage.

* Add Course Route: In this route, instructors can seamlessly add new courses by providing relevant information about the course.

* My Courses: Instructors can manage and view information about the courses they have added. Additionally, they have the option to delete courses if needed.

* Payment History: In this section, instructors can track the enrollment history of their courses, displaying information about user enrollments.

## 'Admin' Dashboard
* Admin Home Route: A hardcoded route exclusively designed for the admin's navigation and access.

* Manage Course: In this route, the admin wields the authority to approve or deny courses submitted by instructors. All courses on the website are displayed here, giving the admin comprehensive control.

* Manage Users: A tabular representation of all users who have logged in or visited the website. The admin holds the power to promote users to instructors or fellow admins, demote instructors to regular users, and delete users, excluding those with an admin role.

* All Enrolled Courses: Provides an overview for the admin to check the complete history of all enrolled courses on the platform.

------------------------ `Thanks for Your valuable time`---------------------------
