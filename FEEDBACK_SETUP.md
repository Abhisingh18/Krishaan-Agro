# 📝 Feedback Setup (PostgreSQL — Free)

Jab koi visitor feedback de, wo **har visitor ko website par dikhega** aur
PostgreSQL database mein hamesha save rahega.

Aapko bas **ek `DATABASE_URL`** dena hai. Table apne aap ban jaata hai —
koi manual SQL chalane ki zaroorat nahi.

Koi bhi PostgreSQL chalega. Do free options:

---

## Option A — Neon (free cloud Postgres, recommended)
1. https://neon.tech par jaayein → GitHub/Google se sign up (free, koi card nahi).
2. **New Project** banayein (region: Singapore / Mumbai ke paas).
3. Project bante hi ek **Connection String** dikhega, jaise:
   ```
   postgresql://user:pass@ep-xxx.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
   ```
   Use **copy** kar lein.

## Option B — Vercel Postgres
1. Vercel → apna project → **Storage** tab → **Create Database** → **Postgres** (free Hobby).
2. Ban-ne ke baad `DATABASE_URL` apne aap project ke env mein add ho jaata hai.
   (Tab Step 2 skip kar dein.)

## Option C — Local PostgreSQL (apne computer par)
1. Postgres install karein, ek database banayein (e.g. `krishaan`).
2. URL: `postgresql://postgres:yourpassword@localhost:5432/krishaan`

---

## 1. Local mein URL daalein
Project folder mein `.env.example` ko copy karke **`.env.local`** banayein:

```
DATABASE_URL=postgresql://user:pass@host:5432/dbname?sslmode=require
```

Phir dev server (re)start karein:
```bash
npm run dev
```

Feedback form bharein → niche testimonials mein **turant dikhega** ✅
(Table `feedbacks` pehli baar mein apne aap ban jaayega.)

## 2. Vercel (live website) par URL daalein
1. Vercel → apna `Krishaan-Agro` project → **Settings** → **Environment Variables**.
2. Add karein:  `DATABASE_URL` = aapka connection string.
3. **Save** → **Deployments** → latest → **Redeploy**.

Bas! Live website par bhi feedback save + render hoga.

---

## ℹ️ Notes
- **Table apne aap banta hai** (`src/lib/db.ts` → `ensureTable`). Agar khud
  banana ho to:
  ```sql
  create table if not exists feedbacks (
    id bigint generated always as identity primary key,
    created_at timestamptz not null default now(),
    name text not null,
    role text,
    message text not null,
    rating int not null default 5
  );
  ```
- **Spam aaye to?** Database mein jaakar (Neon/Vercel ka SQL editor) us row ko
  delete kar dein:  `delete from feedbacks where id = <id>;`
- **Pehle approve, phir dikhe** chahiye? Bataiyega — ek `approved` column
  jodke kar denge.
- **DATABASE_URL nahi diya to?** Website crash nahi hogi — feedback form
  error dikhayega, baaki site normal chalegi.
```
