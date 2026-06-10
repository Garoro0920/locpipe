-- LocPipe: waitlist table (run in the Supabase SQL editor)
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  project text,
  release_window text check (
    release_window in ('within_3_months', 'within_6_months', 'within_1_year', 'undecided')
  ),
  lang text not null default 'ja' check (lang in ('ja', 'en')),
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_email_unique
  on public.waitlist (lower(email));

-- RLS on, no policies: only the server (service role) can read/write.
alter table public.waitlist enable row level security;
