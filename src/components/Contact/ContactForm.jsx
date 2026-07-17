function ContactForm() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="text-4xl font-bold text-primary">
              Send Us a Message
            </h2>

            <p className="mt-4 text-slate-600">
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>

            <form className="mt-10 space-y-6">

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none transition focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 font-semibold text-white transition hover:bg-primary-light"
              >
                Send Message

                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>

              </button>

            </form>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

            <div className="p-8">

              <h2 className="text-4xl font-bold text-primary">
                Visit Our Office
              </h2>

              <p className="mt-4 text-slate-600">
                Alandi Municipal Council, Alandi Devachi,
                Pune, Maharashtra.
              </p>

            </div>

            <iframe
              title="Alandi Municipal Council"
              src="https://www.google.com/maps?q=Alandi%20Municipal%20Council&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;