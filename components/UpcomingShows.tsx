const shows = [
    {
      date: 'Nov 17th, 2024',
      venue: 'Parkwood, Owen Sound',
      details: 'Opener for Sarah Burton. Solo Acoustic Performance, Sunday Matinee',
      time: 'Doors @ 2pm',
    },
    {
      date: 'Nov 30th, 2024',
      venue: 'Locals, Kincardine',
      details: 'Duo with Kenny Kelley',
      time: '9:00 pm-12:00 pm',
    },
    {
      date: 'Jan 24th, 2025',
      venue: 'Bar Down, Kincardine',
      details: 'Acoustic Performance',
      time: '9:00 pm-12:00 am',
    },
  ]
  
  export default function UpcomingShows() {
    return (
      <section className="mb-8">
        <h2 className="mb-4 text-3xl font-bold tracking-tighter">Upcoming Shows</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shows.map((show, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-accent"
            >
              <div className="text-lg font-bold">{show.date}</div>
              <div className="mt-1 font-semibold">{show.venue}</div>
              <div className="mt-1 text-sm text-muted-foreground">{show.details}</div>
              <div className="mt-2 text-xs font-medium">{show.time}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }