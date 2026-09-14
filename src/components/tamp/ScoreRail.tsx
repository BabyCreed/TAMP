// CMP-03 Score Rail — segmented bar, one segment per rule, width ∝ weight,
// fill ∝ earned. This is the deliberate risk from spec §7.1: segmented and
// labelled, not a smooth progress bar, because that's the whole argument
// for a rule-based marketplace over a phone call.

import type { MatchScoreComponent } from "@/lib/tamp-types";

export function ScoreRail({ breakdown }: { breakdown: MatchScoreComponent[] }) {
  const totalWeight = breakdown.reduce((s, c) => s + c.weight, 0);

  return (
    <div className="w-full">
      <div className="flex h-2.5 w-full overflow-hidden rounded-sm border border-border">
        {breakdown.map((c) => {
          const fillPct = Math.max(0, Math.min(100, (c.earned / c.weight) * 100));
          return (
            <div
              key={c.ruleId}
              title={`${c.label}: +${c.earned.toFixed(1)}/${c.weight} — ${c.detail}`}
              style={{ width: `${(c.weight / totalWeight) * 100}%` }}
              className="relative h-full border-r border-background last:border-r-0 bg-steel/40"
            >
              <div
                className="absolute inset-y-0 left-0 bg-signal"
                style={{ width: `${fillPct}%` }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-1 text-[8px] font-mono text-muted-foreground uppercase tracking-wide">
        {breakdown.map((c) => (
          <span
            key={c.ruleId}
            style={{ width: `${(c.weight / totalWeight) * 100}%` }}
            className="truncate"
          >
            {c.ruleId.replace("R-", "")}
          </span>
        ))}
      </div>
    </div>
  );
}
