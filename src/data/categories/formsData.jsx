// src/data/categories/formsData.js
export const formsData = [
  {
    id: 1,
    title: "Login Form",
    description: "A simple login form with email and password fields.",
    preview: `
        <form class="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
          />
          <button 
            class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      `,
    code: `
        const LoginForm = () => (
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
            />
            <button 
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </form>
        );
      `,
    category: "forms",
  },
  {
    id: 2,
    title: "Registration Form",
    description:
      "User registration form with full name, email, and password fields.",
    preview: `
        <form class="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
          />
          <input 
            type="email" 
            placeholder="Email" 
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
          />
          <button 
            class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Register
          </button>
        </form>
      `,
    code: `
        const RegistrationForm = () => (
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" 
            />
            <button 
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Register
            </button>
          </form>
        );
      `,
    category: "forms",
  },
  {
    id: 3,
    title: "Subscription Form",
    description: "A subscription form with an email input field.",
    preview: `
        <form class="flex items-center space-x-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500" 
          />
          <button 
            class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Subscribe
          </button>
        </form>
      `,
    code: `
        const SubscriptionForm = () => (
          <form className="flex items-center space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500" 
            />
            <button 
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Subscribe
            </button>
          </form>
        );
      `,
    category: "forms",
  },
  {
    id: 4,
    title: "Feedback Form",
    description: "A feedback form with a textarea for comments.",
    preview: `
        <form class="space-y-4">
          <textarea 
            placeholder="Your feedback" 
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500" 
            rows="4">
          </textarea>
          <button 
            class="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
            Submit Feedback
          </button>
        </form>
      `,
    code: `
        const FeedbackForm = () => (
          <form className="space-y-4">
            <textarea 
              placeholder="Your feedback" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500" 
              rows="4">
            </textarea>
            <button 
              className="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
              Submit Feedback
            </button>
          </form>
        );
      `,
    category: "forms",
  },
  {
    id: 5,
    title: "Contact Form",
    description: "A contact form with name, email, and message fields.",
    preview: `
        <form class="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500" 
          />
          <textarea 
            placeholder="Your Message" 
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500" 
            rows="4">
          </textarea>
          <button 
            class="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Send Message
          </button>
        </form>
      `,
    code: `
        const ContactForm = () => (
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500" 
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500" 
              rows="4">
            </textarea>
            <button 
              className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Send Message
            </button>
          </form>
        );
      `,
    category: "forms",
  },
  {
    id: 6,
    title: "Newsletter Form",
    description: "A newsletter form with a simple email field.",
    preview: `
        <form class="flex">
          <input 
            type="email" 
            placeholder="Your Email" 
            class="flex-1 px-4 py-2 border rounded-l-lg focus:ring-2 focus:ring-teal-500" 
          />
          <button 
            class="px-4 py-2 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 transition">
            Subscribe
          </button>
        </form>
      `,
    code: `
        const NewsletterForm = () => (
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-1 px-4 py-2 border rounded-l-lg focus:ring-2 focus:ring-teal-500" 
            />
            <button 
              className="px-4 py-2 bg-teal-600 text-white rounded-r-lg hover:bg-teal-700 transition">
              Subscribe
            </button>
          </form>
        );
      `,
    category: "forms",
  },
];
