// import React, { useState } from 'react';

// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form submitted:', name, email, message);
//     setSubmitted(true);
//     setName('');
//     setEmail('');
//     setMessage('');
    
//   };

//   return (
//     <section className="contact-us-section py-20">
//       <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
//         <h2 className="text-4xl font-bold text-green-700">Get in Touch</h2>
//         <p className="text-lg font-bold text-gray-600">Contact us for more information about our agricultural products and services.</p>
//         <form onSubmit={handleSubmit} className="contact-form mt-10 flex flex-col space-y-6">
//           <div className="form-group">
//             <label className="block text-lg font-bold text-gray-600 mb-2" htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//               className="w-full p-4 pl-10 text-lg border border-gray-400 rounded-lg focus:ring-green-700 focus:border-green-700"
//               placeholder="Your name"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label className="block text-lg font-bold text-gray-600 mb-2" htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//               className="w-full p-4 pl-10 text-lg border border-gray-400 rounded-lg focus:ring-green-700 focus:border-green-700"
//               placeholder="your.email@example.com"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label className="block text-lg font-bold text-gray-600 mb-2" htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               name="message"
//               value={message}
//               onChange={(event) => setMessage(event.target.value)}
//               className="w-full p-4 pl-10 text-lg border border-gray-400 rounded-lg focus:ring-green-700 focus:border-green-700"
//               placeholder="Your message"
//               rows={5}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
//           >
//             Send Message
//           </button>
//           {submitted && (
//             <p className="text-lg font-bold text-green-700 mt-4">Thank you for your message! We'll get back to you soon.</p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', name, email, message);
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage(''); 
  };

  return (
    <section className="contact-us-section py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-3xl font-bold text-green-700">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form mt-10 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full p-2 mb-4 text-lg border border-gray-400 rounded-lg focus:ring-green-700 focus:border-green-700"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 mb-4 text-lg border border-gray-400 rounded-lg focus:ring-green-700 focus:border-green-700"
            placeholder="your.email@example.com"
            required
          />
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full p-2 mb-4 text-lg border border-gray-400 rounded-lg focus:ring-green-700 focus:border-green-700"
            placeholder="Your message"
            rows={3}
            required
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-lg font-bold text-green-700 mt-4">Thank you for your message! We'll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;