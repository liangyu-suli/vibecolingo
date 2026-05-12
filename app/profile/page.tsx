"use client";

import Link from "next/link";
import { useMemo } from "react";
import { tracks } from "@/domain/contracts";
import { loadProfile } from "@/services/sessionService";

const leaderboardPreview = [
  { handle: "@flow_maker", tier: "Principal", totalScore: 9420, trend: "+2.8%" },
  { handle: "@api_weaver", tier: "Operator", totalScore: 8770, trend: "+1.4%" },
  { handle: "@schema_crafter", tier: "Architect", totalScore: 8210, trend: "+3.1%" }
];

export default function ProfilePage() {
  const profile = useMemo(() => loadProfile(), []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-5 md:px-6">
      <header className="mb-4">
        <p className="text-xs font-black uppercase tracking-widest text-duo-blue">Anonymous Profile</p>
        <h1 className="text-2xl font-black text-[#2f2f2f]">Ranking Intelligence</h1>
        <p className="mt-1 text-sm font-bold text-[#666]">Session-scoped rank, score progression, and track signals.</p>
      </header>

      <section className="card-white p-4 sm:p-5">
        <h2 className="text-lg font-black text-[#333]">Global Snapshot</h2>
        <p className="mt-2 text-sm font-bold text-[#555]">
          Tier: <span className="text-duo-blue">{profile.tier}</span> • Score: {profile.totalScore} • Percentile: P{profile.percentile}
        </p>
        <p className="mt-1 text-sm font-bold text-[#666]">
          Completed: {profile.completedExercises} • Streak: {profile.streakDays} days
        </p>
      </section>

      <section className="card-white mt-4 p-4 sm:p-5">
        <h2 className="text-lg font-black text-[#333]">Track Scores</h2>
        <div className="mt-3 grid gap-2">
          {tracks.map((track) => (
            <div key={track} className="rounded-xl border-2 border-[#e5e5e5] p-3">
              <p className="text-xs font-black uppercase tracking-widest text-[#888]">{track}</p>
              <p className="mt-1 text-base font-black text-[#333]">{profile.trackScores[track]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card-white mt-4 p-4 sm:p-5">
        <h2 className="text-lg font-black text-[#333]">Leaderboard Preview</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm font-bold text-[#555]">
            <thead>
              <tr className="border-b-2 border-[#e5e5e5] text-[#8a8a8a]">
                <th className="py-2">User</th>
                <th className="py-2">Tier</th>
                <th className="py-2">Score</th>
                <th className="py-2">Trend</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardPreview.map((entry) => (
                <tr key={entry.handle} className="border-b border-[#efefef]">
                  <td className="py-2">{entry.handle}</td>
                  <td className="py-2">{entry.tier}</td>
                  <td className="py-2">{entry.totalScore}</td>
                  <td className="py-2 text-duo-green">{entry.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Link href="/lesson" className="btn-primary-3d min-h-11 w-full text-center text-sm">
          Continue Lesson
        </Link>
        <Link href="/" className="btn-ghost-3d min-h-11 w-full text-center text-sm">
          Back Landing
        </Link>
      </div>
    </div>
  );
}
