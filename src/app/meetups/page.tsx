import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import CtaButton from "@/components/CtaButton";
import MeetupScheduleTable from "@/components/MeetupScheduleTable";
import Timeline from "@/components/Timeline";
import JsonLd from "@/components/JsonLd";
import { meetup, womensGroup } from "@/lib/site-config";
import { meetupSchedule } from "@/data/meetups";
import { pageMetadata } from "@/lib/metadata";
import { meetupEventSchema, breadcrumbListSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  path: "/meetups",
  title: "Meetups",
  description:
    "House Hacking Atlanta meets the second Tuesday of every month. See the topic calendar and register on Eventbrite.",
});

export default function MeetupsPage() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Meetups" }];

  return (
    <>
      {meetupSchedule.map((event) => (
        <JsonLd
          key={event.month}
          data={meetupEventSchema({
            monthLabel: event.month,
            topic: event.topic,
            category: event.category,
            speaker: event.speaker,
            eventbriteUrl: event.eventbriteUrl,
          })}
        />
      ))}
      <JsonLd data={breadcrumbListSchema(breadcrumbItems)} />

      <PageHero
        eyebrow="Come as you are"
        title="The monthly meetup"
        subtitle={`${meetup.cadenceLabel}, ${meetup.venue.name}. One guest speaker, plenty of networking, ${meetup.sizeLabel}.`}
        breadcrumb={<Breadcrumb variant="dark" items={breadcrumbItems} />}
      >
        <div>
          <CtaButton
            href={meetup.eventbriteOrganizerUrl || "#schedule"}
            variant="primary"
            external={Boolean(meetup.eventbriteOrganizerUrl)}
          >
            View all events on Eventbrite
          </CtaButton>
        </div>
      </PageHero>

      {/* Format */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-pine-900">
              What to expect
            </h2>
            <p className="mt-3 text-pine-700">
              {meetup.venue.name}
              {!meetup.venue.confirmed && (
                <span className="text-clay-600"> (venue TBC)</span>
              )}
              , {meetup.venue.address}. {meetup.sizeLabel} in the room.
            </p>
          </div>
          <div className="lg:col-span-2">
            <Timeline steps={meetup.schedule} />
          </div>
        </div>
      </section>

      {/* Schedule table */}
      <section id="schedule" className="bg-sage-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-pine-900 sm:text-3xl">
            Topic calendar
          </h2>
          <p className="mt-2 max-w-2xl text-pine-700">
            One rotating topic a month, one guest speaker, always open Q&amp;A
            and networking. Speakers are confirmed on a rolling basis.
          </p>
          <div className="mt-8">
            <MeetupScheduleTable />
          </div>
        </div>
      </section>

      {/* Women's meetup */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-pine-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-clay-600">
            A related, separate group
          </p>
          <h2 className="mt-2 font-display text-xl font-bold text-pine-900">
            {womensGroup.name}
          </h2>
          <p className="mt-3 max-w-2xl text-pine-700">
            A women-only meetup covering the same territory, {womensGroup.cadenceLabel.toLowerCase()}.
            Different audience, different brand — worth a look if that&apos;s
            the room you&apos;re looking for.
          </p>
          <div className="mt-5">
            <CtaButton
              href={womensGroup.url || "#"}
              variant="ghost"
              external={Boolean(womensGroup.url)}
            >
              {womensGroup.url ? `Visit ${womensGroup.name}` : "Link coming soon"}
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
