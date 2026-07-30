import { meetupSchedule } from "@/data/meetups";
import { meetup } from "@/lib/site-config";
import CtaButton from "./CtaButton";

export default function MeetupScheduleTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-pine-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-pine-50 text-pine-700">
          <tr>
            <th className="px-4 py-3 font-semibold">Month</th>
            <th className="px-4 py-3 font-semibold">Topic</th>
            <th className="hidden px-4 py-3 font-semibold sm:table-cell">
              Category
            </th>
            <th className="hidden px-4 py-3 font-semibold md:table-cell">
              Speaker
            </th>
            <th className="px-4 py-3 font-semibold">
              <span className="sr-only">Register</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {meetupSchedule.map((event) => (
            <tr key={event.month} className="border-t border-pine-100">
              <td className="whitespace-nowrap px-4 py-4 font-medium text-pine-900">
                {event.month}
              </td>
              <td className="px-4 py-4 text-pine-800">
                {event.topic}
                {event.note && (
                  <span className="mt-1 block text-xs text-pine-500">
                    {event.note}
                  </span>
                )}
              </td>
              <td className="hidden px-4 py-4 text-pine-600 sm:table-cell">
                {event.category}
              </td>
              <td className="hidden px-4 py-4 text-pine-600 md:table-cell">
                {event.speaker || "Speaker TBA"}
              </td>
              <td className="px-4 py-4 text-right">
                <CtaButton
                  href={event.eventbriteUrl || meetup.eventbriteOrganizerUrl || "/meetups"}
                  variant="ghost"
                  external={Boolean(event.eventbriteUrl || meetup.eventbriteOrganizerUrl)}
                  className="!px-4 !py-1.5 !text-xs"
                >
                  Register
                </CtaButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
