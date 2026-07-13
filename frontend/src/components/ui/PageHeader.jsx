function PageHeader({ title, description }) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}

export default PageHeader
