/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CodeBlock } from '@/components/code-block';

export const metadata: Metadata = {
  title: 'Building Production APIs with Next.js: A Real-World Case Study | Wahab Cide',
  description: 'A deep dive into building production-grade APIs using Next.js App Router, featuring real-world examples from a rideshare platform handling authentication, payments, and real-time features.',
  openGraph: {
    title: 'Building Production APIs with Next.js: A Real-World Case Study',
    description: 'A deep dive into building production-grade APIs using Next.js App Router',
  },
};

export default function Article() {
  return (
    <article className="min-h-screen bg-black text-neutral-300">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-32 pb-16">
        {/* Header */}
        <Link
          href="/"
          className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm mb-8 inline-flex items-center gap-2 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to home
        </Link>

        <header className="mb-16 border-l-2 border-blue-500/50 pl-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug">
            Building Production APIs with Next.js: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">A Real-World Case Study</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full ring-2 ring-neutral-800 overflow-hidden flex-shrink-0">
              <Image
                src="/DSC03533.jpg"
                alt="Wahab Cide"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-neutral-500 text-sm">
              <p className="text-neutral-300 font-medium">Wahab Cide</p>
              <time className="text-neutral-500">October 2025 · 15 min read</time>
            </div>
          </div>
          <p className="text-neutral-400 mt-6 text-lg leading-relaxed">
            How we built a production-grade rideshare API serving thousands of users using Next.js App Router,
            PostgreSQL, and serverless architecture—no complex backend setup required.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-16 border border-neutral-800 rounded-lg p-6 bg-neutral-950/50">
          <h2 className="text-lg font-medium text-white mb-4">Contents</h2>
          <ol className="space-y-2 text-sm text-neutral-400">
            <li><a href="#introduction" className="hover:text-white transition-colors">1. Introduction</a></li>
            <li><a href="#architecture" className="hover:text-white transition-colors">2. Architecture Overview</a></li>
            <li><a href="#api-routes" className="hover:text-white transition-colors">3. API Routes Structure</a></li>
            <li><a href="#database" className="hover:text-white transition-colors">4. Database Integration</a></li>
            <li><a href="#authentication" className="hover:text-white transition-colors">5. Authentication Patterns</a></li>
            <li><a href="#transactions" className="hover:text-white transition-colors">6. Atomic Operations & Transactions</a></li>
            <li><a href="#payments" className="hover:text-white transition-colors">7. Payment Processing with Stripe</a></li>
            <li><a href="#webhooks" className="hover:text-white transition-colors">8. Webhook Handlers</a></li>
            <li><a href="#deployment" className="hover:text-white transition-colors">9. Deployment & Production Considerations</a></li>
            <li><a href="#conclusion" className="hover:text-white transition-colors">10. Conclusion</a></li>
          </ol>
        </nav>

        {/* Article Content */}
        <div className="prose prose-invert prose-neutral max-w-none">

          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-6 border-l-2 border-blue-500/50 pl-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Introduction</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                When building <a href="https://looprides.dev" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors underline decoration-neutral-700">Loop</a>,
                a rideshare platform connecting university students, we needed a robust backend capable of handling complex operations:
                real-time bookings, payment processing, location tracking, and chat functionality. The traditional approach
                would involve setting up Express.js or FastAPI, configuring database connections, managing CORS, implementing
                authentication middleware, and orchestrating deployment infrastructure.
              </p>
              <p>
                Instead, we took a different path: <code className="text-sm bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20">npx create-next-app@latest</code> and started writing API routes.
              </p>
              <p>
                This article explores how Next.js App Router's API Routes enabled us to build a production-grade backend
                entirely in TypeScript, deployed as serverless functions on Vercel, with zero DevOps overhead. We'll examine
                real implementation patterns from our codebase, covering authentication, database transactions, payment processing,
                and webhook handling.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-8">
                <h3 className="text-lg font-medium text-white mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-neutral-500">Framework:</span> Next.js 14 (App Router)</li>
                  <li><span className="text-neutral-500">Database:</span> PostgreSQL (Neon serverless)</li>
                  <li><span className="text-neutral-500">Authentication:</span> Clerk</li>
                  <li><span className="text-neutral-500">Payments:</span> Stripe & Stripe Connect</li>
                  <li><span className="text-neutral-500">Deployment:</span> Vercel (serverless functions)</li>
                  <li><span className="text-neutral-500">Language:</span> TypeScript</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Architecture Overview */}
          <section id="architecture" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-purple-500/50 pl-6">
              <span className="text-purple-400">Architecture Overview</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Next.js App Router introduces a file-system based routing convention where each <code className="text-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-pink-400 px-2 py-1 rounded border border-pink-500/20">route.ts</code> file
                becomes a serverless API endpoint. This eliminates the boilerplate of traditional backend frameworks while maintaining
                type safety and developer experience.
              </p>

              <CodeBlock filename="Directory Structure">
{`app/api/
├── rides/
│   ├── feed/route.ts          # GET /api/rides/feed
│   ├── search/route.ts        # POST /api/rides/search
│   ├── create/route.ts        # POST /api/rides/create
│   └── [rideId]/
│       ├── route.ts           # GET /api/rides/:rideId
│       ├── cancel/route.ts    # POST /api/rides/:rideId/cancel
│       └── complete/route.ts  # POST /api/rides/:rideId/complete
├── bookings/
│   ├── create/route.ts
│   └── [bookingId]/
│       ├── approve/route.ts
│       └── cancel/route.ts
├── stripe/
│   ├── create/route.ts        # Create payment intent
│   └── pay/route.ts           # Process payment
├── webhooks/
│   ├── clerk/route.ts         # Clerk webhooks
│   └── stripe/route.ts        # Stripe webhooks
└── user/route.ts              # User profile management`}
              </CodeBlock>

              <p>
                Each route file exports HTTP method handlers (<code className="text-sm bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">GET</code>, <code className="text-sm bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">POST</code>, <code className="text-sm bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-400 px-2 py-1 rounded border border-amber-500/20">PUT</code>, <code className="text-sm bg-gradient-to-r from-red-500/10 to-pink-500/10 text-red-400 px-2 py-1 rounded border border-red-500/20">DELETE</code>)
                as async functions. Dynamic segments like <code className="text-sm bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-400 px-2 py-1 rounded border border-violet-500/20">[rideId]</code> become available as parameters, enabling RESTful patterns
                without manual routing configuration.
              </p>
            </div>
          </section>

          {/* API Routes Structure */}
          <section id="api-routes" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-pink-500/50 pl-6">
              <span className="text-pink-400">API Routes Structure</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Let's examine a production endpoint that retrieves available rides. This demonstrates the fundamental pattern
                used across our API: authentication, input validation, database queries, and consistent response formatting.
              </p>

              <CodeBlock filename="app/api/rides/feed/route.ts" language="typescript">
{`import { auth } from '@clerk/nextjs/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function GET(request: Request) {
  try {
    // 1. Authentication
    const { userId } = await auth();
    if (!userId) {
      return Response.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // 2. Query parameters
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    // 3. Database query
    const rides = await sql\`
      SELECT
        r.id,
        r.origin_label,
        r.origin_lat,
        r.origin_lng,
        r.destination_label,
        r.destination_lat,
        r.destination_lng,
        r.departure_time,
        r.arrival_time,
        r.seats_available,
        r.seats_total,
        r.price,
        r.currency,
        r.status,
        r.fare_splitting_enabled,
        u.clerk_id as driver_id,
        u.name as driver_name,
        u.avatar_url as driver_avatar,
        u.rating_driver,
        u.vehicle_make,
        u.vehicle_model,
        u.vehicle_year,
        u.vehicle_color,
        u.vehicle_plate
      FROM rides r
      JOIN users u ON r.driver_id = u.id
      WHERE r.status = 'open'
        AND r.seats_available > 0
        AND r.departure_time > NOW()
      ORDER BY r.departure_time ASC
      LIMIT \${limit}
      OFFSET \${offset}
    \`;

    // 4. Response formatting
    return Response.json({
      success: true,
      rides: rides.map(ride => ({
        id: ride.id,
        driver_id: ride.driver_id,
        origin: {
          label: ride.origin_label,
          latitude: parseFloat(ride.origin_lat),
          longitude: parseFloat(ride.origin_lng),
        },
        destination: {
          label: ride.destination_label,
          latitude: parseFloat(ride.destination_lat),
          longitude: parseFloat(ride.destination_lng),
        },
        departure_time: ride.departure_time,
        arrival_time: ride.arrival_time,
        seats_available: ride.seats_available,
        seats_total: ride.seats_total,
        price: parseFloat(ride.price),
        currency: ride.currency,
        status: ride.status,
        fare_splitting_enabled: ride.fare_splitting_enabled,
        driver: {
          name: ride.driver_name,
          avatar_url: ride.driver_avatar,
          rating: parseFloat(ride.rating_driver),
          vehicle: {
            make: ride.vehicle_make,
            model: ride.vehicle_model,
            year: ride.vehicle_year,
            color: ride.vehicle_color,
            plate: ride.vehicle_plate,
          },
        },
      })),
      total: rides.length,
    });

  } catch (error) {
    console.error('Error fetching rides:', error);
    return Response.json(
      { error: 'Failed to fetch rides' },
      { status: 500 }
    );
  }
}`}
              </CodeBlock>

              <p>
                This pattern establishes several conventions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-neutral-300">Authentication First:</strong> Every protected route validates the user's Clerk session before processing.</li>
                <li><strong className="text-neutral-300">Input Validation:</strong> Query parameters are parsed and validated with defaults.</li>
                <li><strong className="text-neutral-300">Parameterized Queries:</strong> Template literals with the <code className="text-sm bg-neutral-900 px-2 py-1 rounded">sql</code> tag prevent SQL injection.</li>
                <li><strong className="text-neutral-300">Consistent Responses:</strong> All endpoints return <code className="text-sm bg-neutral-900 px-2 py-1 rounded">{`{ success: true, data }`}</code> on success or <code className="text-sm bg-neutral-900 px-2 py-1 rounded">{`{ error: string }`}</code> on failure.</li>
                <li><strong className="text-neutral-300">Type Transformations:</strong> Database numerics are explicitly parsed to JavaScript numbers.</li>
              </ul>
            </div>
          </section>

          {/* Database Integration */}
          <section id="database" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-emerald-500/50 pl-6">
              <span className="text-emerald-400">Database Integration</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                For production workloads, we use <strong className="text-neutral-300">Neon's serverless PostgreSQL driver</strong> (<code className="text-sm bg-neutral-900 px-2 py-1 rounded">@neondatabase/serverless</code>),
                designed specifically for serverless environments like Vercel Edge Functions. Unlike traditional PostgreSQL clients
                that maintain persistent connections, Neon's driver operates over HTTP, eliminating connection pooling concerns
                inherent to serverless architectures.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-sm font-medium text-neutral-500 mb-3">lib/database.ts</h3>
                <pre className="text-sm overflow-x-auto">
{`import { neon } from '@neondatabase/serverless';

// Initialize once, reuse across requests
export const sql = neon(process.env.DATABASE_URL!);

// Example: Complex join with aggregation
export async function getRideWithBookings(rideId: string) {
  const result = await sql\`
    SELECT
      r.*,
      json_agg(
        json_build_object(
          'id', b.id,
          'rider_id', b.rider_id,
          'seats_requested', b.seats_requested,
          'status', b.status,
          'rider_name', u.name,
          'rider_avatar', u.avatar_url
        )
      ) FILTER (WHERE b.id IS NOT NULL) as bookings
    FROM rides r
    LEFT JOIN bookings b ON b.ride_id = r.id
    LEFT JOIN users u ON b.rider_id = u.id
    WHERE r.id = \${rideId}
    GROUP BY r.id
  \`;

  return result[0];
}`}
                </pre>
              </div>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Schema Design</h3>
              <p>
                Our database schema leverages PostgreSQL's advanced features: JSONB for flexible data, PostGIS for geospatial
                queries, and triggers for automatic timestamp management.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-sm font-medium text-neutral-500 mb-3">database/schema.sql (excerpt)</h3>
                <pre className="text-sm overflow-x-auto">
{`CREATE TYPE ride_status AS ENUM ('open', 'full', 'completed', 'cancelled', 'expired');

CREATE TABLE rides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  -- Geographic data
  origin_label TEXT NOT NULL,
  origin_lat NUMERIC(10,6) NOT NULL,
  origin_lng NUMERIC(10,6) NOT NULL,
  destination_label TEXT NOT NULL,
  destination_lat NUMERIC(10,6) NOT NULL,
  destination_lng NUMERIC(10,6) NOT NULL,

  -- Temporal data
  departure_time TIMESTAMPTZ NOT NULL,
  arrival_time TIMESTAMPTZ,

  -- Capacity management
  seats_total SMALLINT NOT NULL CHECK (seats_total > 0),
  seats_available SMALLINT NOT NULL
    CHECK (seats_available >= 0 AND seats_available <= seats_total),

  -- Pricing
  price NUMERIC(8,2) NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  fare_splitting_enabled BOOLEAN DEFAULT false,

  -- State
  status ride_status NOT NULL DEFAULT 'open',

  -- Audit
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Automatic timestamp updates
CREATE TRIGGER update_rides_updated_at
  BEFORE UPDATE ON rides
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Prevent overbooking
CREATE TRIGGER prevent_negative_seats
  BEFORE UPDATE ON rides
  FOR EACH ROW
  WHEN (NEW.seats_available < 0)
  EXECUTE FUNCTION raise_seats_exception();`}
                </pre>
              </div>
            </div>
          </section>

          {/* Authentication Patterns */}
          <section id="authentication" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-cyan-500/50 pl-6">
              <span className="text-cyan-400">Authentication Patterns</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                We use <strong className="text-neutral-300">Clerk</strong> for authentication, which provides JWT-based session management
                and integrates seamlessly with Next.js. The mobile app (React Native) sends Clerk tokens in the Authorization header,
                which the API validates server-side.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-sm font-medium text-neutral-500 mb-3">Authentication Flow</h3>
                <pre className="text-sm overflow-x-auto">
{`// Client (React Native)
import { useUser } from '@clerk/clerk-expo';

const { user } = useUser();
const token = await user.getToken();

const response = await fetch('/api/rides/create', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${token}\`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(rideData),
});

// Server (Next.js API Route)
import { auth } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // userId is the Clerk ID - use it to query database
  const user = await sql\`
    SELECT * FROM users WHERE clerk_id = \${userId}
  \`;

  // ... rest of handler
}`}
                </pre>
              </div>

              <h3 className="text-xl font-light text-white mb-4 mt-8">User Synchronization</h3>
              <p>
                Clerk manages authentication, but our PostgreSQL database stores application-specific user data (ratings, vehicle info, etc.).
                We synchronize users via Clerk webhooks:
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-sm font-medium text-neutral-500 mb-3">app/api/webhooks/clerk/route.ts</h3>
                <pre className="text-sm overflow-x-auto">
{`import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  const payload = await request.text();
  const headers = Object.fromEntries(request.headers);

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let event: WebhookEvent;
  try {
    event = wh.verify(payload, headers) as WebhookEvent;
  } catch (error) {
    return Response.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'user.created') {
    const { id, email_addresses, first_name, last_name, image_url } = event.data;

    await sql\`
      INSERT INTO users (clerk_id, email, name, avatar_url)
      VALUES (
        \${id},
        \${email_addresses[0].email_address},
        \${first_name + ' ' + last_name},
        \${image_url}
      )
      ON CONFLICT (clerk_id) DO NOTHING
    \`;
  }

  if (event.type === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url } = event.data;

    await sql\`
      UPDATE users
      SET
        email = \${email_addresses[0].email_address},
        name = \${first_name + ' ' + last_name},
        avatar_url = \${image_url},
        updated_at = NOW()
      WHERE clerk_id = \${id}
    \`;
  }

  return Response.json({ received: true });
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Atomic Operations & Transactions */}
          <section id="transactions" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-amber-500/50 pl-6">
              <span className="text-amber-400">Atomic Operations & Transactions</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                The most critical operation in our system is <strong className="text-neutral-300">ride booking</strong>. This involves multiple
                database writes that must succeed or fail together:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Verify ride has available seats</li>
                <li>Decrement <code className="text-sm bg-neutral-900 px-2 py-1 rounded">seats_available</code> on the ride</li>
                <li>Create booking record</li>
                <li>Create Stripe payment intent</li>
                <li>Update ride status if fully booked</li>
              </ul>

              <p className="mt-4">
                Without proper transaction handling, race conditions could allow overbooking. Here's how we handle this:
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-sm font-medium text-neutral-500 mb-3">app/api/bookings/create/route.ts</h3>
                <pre className="text-sm overflow-x-auto">
{`import { auth } from '@clerk/nextjs/server';
import { neon } from '@neondatabase/serverless';
import Stripe from 'stripe';

const sql = neon(process.env.DATABASE_URL!);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { rideId, seatsRequested } = await request.json();

    // Validation
    if (!rideId || !seatsRequested || seatsRequested < 1) {
      return Response.json(
        { error: 'Invalid booking data' },
        { status: 400 }
      );
    }

    // Get user's database ID
    const [user] = await sql\`
      SELECT id FROM users WHERE clerk_id = \${userId}
    \`;

    if (!user) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    // BEGIN TRANSACTION
    // We use a transaction to ensure atomicity
    const result = await sql.transaction([
      // 1. Check and decrement seats (with row lock)
      sql\`
        UPDATE rides
        SET
          seats_available = seats_available - \${seatsRequested},
          status = CASE
            WHEN seats_available - \${seatsRequested} = 0 THEN 'full'::ride_status
            ELSE status
          END,
          updated_at = NOW()
        WHERE id = \${rideId}
          AND seats_available >= \${seatsRequested}
          AND status = 'open'
        RETURNING *
      \`,

      // 2. Create booking record
      sql\`
        INSERT INTO bookings (
          ride_id,
          rider_id,
          seats_requested,
          status,
          total_price
        )
        SELECT
          \${rideId},
          \${user.id},
          \${seatsRequested},
          'pending',
          price * \${seatsRequested}
        FROM rides
        WHERE id = \${rideId}
        RETURNING *
      \`
    ]);

    const [updatedRide, booking] = result;

    // If UPDATE affected 0 rows, ride is unavailable
    if (!updatedRide || updatedRide.length === 0) {
      return Response.json(
        { error: 'Ride is no longer available or has insufficient seats' },
        { status: 409 }
      );
    }

    // 3. Create Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(booking[0].total_price * 100), // Convert to cents
      currency: updatedRide[0].currency.toLowerCase(),
      metadata: {
        bookingId: booking[0].id,
        rideId: rideId,
        userId: userId,
      },
      // Don't capture immediately - capture on ride completion
      capture_method: 'manual',
    });

    // 4. Update booking with payment intent ID
    await sql\`
      UPDATE bookings
      SET payment_intent_id = \${paymentIntent.id}
      WHERE id = \${booking[0].id}
    \`;

    return Response.json({
      success: true,
      booking: {
        id: booking[0].id,
        rideId: booking[0].ride_id,
        seatsRequested: booking[0].seats_requested,
        totalPrice: parseFloat(booking[0].total_price),
        status: booking[0].status,
        clientSecret: paymentIntent.client_secret,
      },
    });

  } catch (error) {
    console.error('Booking creation error:', error);
    return Response.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}`}
                </pre>
              </div>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Why This Works</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-neutral-300">Row-Level Locking:</strong> The <code className="text-sm bg-neutral-900 px-2 py-1 rounded">UPDATE ... WHERE</code> clause with seat check creates an implicit row lock, preventing concurrent bookings.</li>
                <li><strong className="text-neutral-300">Atomic Updates:</strong> Both the seat decrement and booking creation happen in a single transaction.</li>
                <li><strong className="text-neutral-300">Optimistic Concurrency:</strong> If the UPDATE returns 0 rows (seats already taken), we return a 409 Conflict.</li>
                <li><strong className="text-neutral-300">Payment Intent Separation:</strong> Stripe operations are outside the transaction—if they fail, we can handle cleanup separately.</li>
              </ul>
            </div>
          </section>

          {/* Payment Processing */}
          <section id="payments" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-indigo-500/50 pl-6">
              <span className="text-indigo-400">Payment Processing with Stripe</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Loop operates as a <strong className="text-neutral-300">multi-sided marketplace</strong>: riders pay for rides, and drivers receive payouts.
                This requires <strong className="text-neutral-300">Stripe Connect</strong> to handle platform fees, driver onboarding, and compliant money movement.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Driver Onboarding</h3>
              <p>
                Drivers must create a Stripe Express account to receive payouts. We handle this via account links:
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-sm font-medium text-neutral-500 mb-3">app/api/payout/account/create/route.ts</h3>
                <pre className="text-sm overflow-x-auto">
{`import { auth } from '@clerk/nextjs/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { email } = await request.json();

  try {
    // Create Stripe Connect Express account
    const account = await stripe.accounts.create({
      type: 'express',
      country: 'US',
      email: email,
      capabilities: {
        transfers: { requested: true },
      },
      business_type: 'individual',
    });

    // Store account ID in database
    await sql\`
      INSERT INTO driver_payout_accounts (
        user_id,
        stripe_account_id,
        status
      )
      SELECT id, \${account.id}, 'pending'
      FROM users
      WHERE clerk_id = \${userId}
    \`;

    // Generate account link for onboarding
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: \`\${process.env.APP_URL}/payout/refresh\`,
      return_url: \`\${process.env.APP_URL}/payout/complete\`,
      type: 'account_onboarding',
    });

    return Response.json({
      success: true,
      accountId: account.id,
      onboardingUrl: accountLink.url,
    });

  } catch (error) {
    console.error('Stripe account creation error:', error);
    return Response.json(
      { error: 'Failed to create payout account' },
      { status: 500 }
    );
  }
}`}
                </pre>
              </div>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Payment Flow</h3>
              <p>
                When a ride is completed, we transfer funds to the driver's Connect account and capture the platform fee:
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-sm font-medium text-neutral-500 mb-3">app/api/rides/[rideId]/complete/route.ts</h3>
                <pre className="text-sm overflow-x-auto">
{`export async function POST(
  request: Request,
  { params }: { params: { rideId: string } }
) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { rideId } = params;

  try {
    // Verify this is the driver's ride
    const [ride] = await sql\`
      SELECT r.*, u.clerk_id
      FROM rides r
      JOIN users u ON r.driver_id = u.id
      WHERE r.id = \${rideId}
    \`;

    if (!ride || ride.clerk_id !== userId) {
      return Response.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // Get all confirmed bookings for this ride
    const bookings = await sql\`
      SELECT * FROM bookings
      WHERE ride_id = \${rideId}
        AND status = 'confirmed'
        AND payment_intent_id IS NOT NULL
    \`;

    // Get driver's Stripe Connect account
    const [driverAccount] = await sql\`
      SELECT stripe_account_id
      FROM driver_payout_accounts dpa
      JOIN users u ON dpa.user_id = u.id
      WHERE u.clerk_id = \${userId}
        AND dpa.status = 'active'
    \`;

    if (!driverAccount) {
      return Response.json(
        { error: 'Driver payout account not set up' },
        { status: 400 }
      );
    }

    // Process each booking payment
    const PLATFORM_FEE_PERCENT = 0.15; // 15% platform fee

    for (const booking of bookings) {
      // Capture the payment intent
      const paymentIntent = await stripe.paymentIntents.capture(
        booking.payment_intent_id
      );

      const totalAmount = paymentIntent.amount;
      const platformFee = Math.round(totalAmount * PLATFORM_FEE_PERCENT);
      const driverPayout = totalAmount - platformFee;

      // Transfer to driver's Connect account
      const transfer = await stripe.transfers.create({
        amount: driverPayout,
        currency: paymentIntent.currency,
        destination: driverAccount.stripe_account_id,
        transfer_group: rideId,
        metadata: {
          bookingId: booking.id,
          rideId: rideId,
        },
      });

      // Record transaction
      await sql\`
        INSERT INTO payout_transactions (
          booking_id,
          driver_account_id,
          amount,
          platform_fee,
          stripe_transfer_id,
          status
        )
        VALUES (
          \${booking.id},
          \${driverAccount.stripe_account_id},
          \${driverPayout / 100},
          \${platformFee / 100},
          \${transfer.id},
          'completed'
        )
      \`;
    }

    // Mark ride as completed
    await sql\`
      UPDATE rides
      SET
        status = 'completed',
        updated_at = NOW()
      WHERE id = \${rideId}
    \`;

    return Response.json({
      success: true,
      message: 'Ride completed and payments processed',
      bookingsProcessed: bookings.length,
    });

  } catch (error) {
    console.error('Ride completion error:', error);
    return Response.json(
      { error: 'Failed to complete ride' },
      { status: 500 }
    );
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Webhook Handlers */}
          <section id="webhooks" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-violet-500/50 pl-6">
              <span className="text-violet-400">Webhook Handlers</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Webhooks are critical for handling asynchronous events from external services. Stripe sends webhooks for
                payment events, and Clerk sends them for user lifecycle events.
              </p>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Stripe Webhook Security</h3>
              <p>
                Stripe signs webhooks using HMAC-SHA256. We verify signatures to prevent replay attacks:
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-sm font-medium text-neutral-500 mb-3">app/api/webhooks/stripe/route.ts</h3>
                <pre className="text-sm overflow-x-auto">
{`import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return Response.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return Response.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      // Update booking status
      await sql\`
        UPDATE bookings
        SET
          status = 'confirmed',
          payment_confirmed_at = NOW()
        WHERE payment_intent_id = \${paymentIntent.id}
      \`;

      // Send confirmation notification
      const [booking] = await sql\`
        SELECT b.*, u.name as rider_name
        FROM bookings b
        JOIN users u ON b.rider_id = u.id
        WHERE b.payment_intent_id = \${paymentIntent.id}
      \`;

      if (booking) {
        await sendPushNotification(
          booking.rider_id,
          'Payment Confirmed',
          'Your booking has been confirmed!'
        );
      }
      break;

    case 'payment_intent.payment_failed':
      const failedIntent = event.data.object as Stripe.PaymentIntent;

      // Return seats to ride
      await sql.transaction([
        sql\`
          UPDATE rides r
          SET seats_available = seats_available + b.seats_requested
          FROM bookings b
          WHERE b.ride_id = r.id
            AND b.payment_intent_id = \${failedIntent.id}
        \`,
        sql\`
          UPDATE bookings
          SET status = 'cancelled'
          WHERE payment_intent_id = \${failedIntent.id}
        \`
      ]);
      break;

    case 'account.updated':
      const account = event.data.object as Stripe.Account;

      // Update driver account status
      await sql\`
        UPDATE driver_payout_accounts
        SET
          status = \${account.charges_enabled ? 'active' : 'pending'},
          updated_at = NOW()
        WHERE stripe_account_id = \${account.id}
      \`;
      break;

    default:
      console.log(\`Unhandled event type: \${event.type}\`);
  }

  return Response.json({ received: true });
}`}
                </pre>
              </div>

              <p>
                Key considerations for webhook handlers:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-neutral-300">Idempotency:</strong> Webhooks can be delivered multiple times. Use unique identifiers to prevent duplicate processing.</li>
                <li><strong className="text-neutral-300">Error Handling:</strong> Always return 200 OK even if processing fails internally—log errors for debugging.</li>
                <li><strong className="text-neutral-300">Async Processing:</strong> For long-running tasks, queue them separately and acknowledge the webhook immediately.</li>
              </ul>
            </div>
          </section>

          {/* Deployment */}
          <section id="deployment" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-lime-500/50 pl-6">
              <span className="text-lime-400">Deployment & Production Considerations</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Deploying to Vercel requires zero configuration for Next.js projects. Each API route becomes a serverless function
                with automatic scaling and edge caching.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-6">
                <h3 className="text-lg font-medium text-white mb-3">Deployment Steps</h3>
                <pre className="text-sm overflow-x-auto">
{`# 1. Install Vercel CLI
npm i -g vercel

# 2. Link project
vercel link

# 3. Set environment variables
vercel env add DATABASE_URL
vercel env add CLERK_SECRET_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_WEBHOOK_SECRET

# 4. Deploy to production
vercel --prod`}
                </pre>
              </div>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Performance Optimizations</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-neutral-300 mb-2">1. Edge Caching</h4>
                  <p>For read-heavy endpoints like ride feed, we use Vercel's Edge Cache:</p>
                  <pre className="text-sm bg-neutral-950 border border-neutral-800 rounded-lg p-4 mt-2 overflow-x-auto">
{`export const revalidate = 60; // Cache for 60 seconds

export async function GET(request: Request) {
  // This response is cached at the edge
  const rides = await sql\`SELECT * FROM rides WHERE status = 'open'\`;
  return Response.json({ rides });
}`}
                  </pre>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-neutral-300 mb-2">2. Database Query Optimization</h4>
                  <p>We use indexes on frequently queried columns:</p>
                  <pre className="text-sm bg-neutral-950 border border-neutral-800 rounded-lg p-4 mt-2 overflow-x-auto">
{`-- Index on status and departure time for feed queries
CREATE INDEX idx_rides_status_departure
  ON rides(status, departure_time)
  WHERE status = 'open';

-- Composite index for location-based searches
CREATE INDEX idx_rides_destination_coords
  ON rides(destination_lat, destination_lng);

-- Index on foreign keys for joins
CREATE INDEX idx_bookings_ride_id ON bookings(ride_id);
CREATE INDEX idx_bookings_rider_id ON bookings(rider_id);`}
                  </pre>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-neutral-300 mb-2">3. Connection Pooling</h4>
                  <p>Neon's serverless driver handles connections over HTTP, eliminating traditional pooling concerns. For high-traffic endpoints, we use Neon's connection pooling feature:</p>
                  <pre className="text-sm bg-neutral-950 border border-neutral-800 rounded-lg p-4 mt-2 overflow-x-auto">
{`// Use pooled connection string from Neon dashboard
DATABASE_URL=postgres://user:pass@host/db?sslmode=require&pgbouncer=true`}
                  </pre>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-neutral-300 mb-2">4. Error Monitoring</h4>
                  <p>All errors are logged to Vercel's logging infrastructure, accessible via the dashboard. For production systems, integrate with Sentry or Datadog:</p>
                  <pre className="text-sm bg-neutral-950 border border-neutral-800 rounded-lg p-4 mt-2 overflow-x-auto">
{`import * as Sentry from '@sentry/nextjs';

export async function POST(request: Request) {
  try {
    // ... handler logic
  } catch (error) {
    Sentry.captureException(error, {
      tags: { endpoint: 'bookings/create' },
      extra: { rideId, userId },
    });

    return Response.json({ error: 'Internal error' }, { status: 500 });
  }
}`}
                  </pre>
                </div>
              </div>

              <h3 className="text-xl font-light text-white mb-4 mt-8">Security Best Practices</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-neutral-300">Environment Variables:</strong> Never commit secrets—use Vercel environment variables.</li>
                <li><strong className="text-neutral-300">CORS:</strong> Configure allowed origins in <code className="text-sm bg-neutral-900 px-2 py-1 rounded">next.config.ts</code> for mobile app domains.</li>
                <li><strong className="text-neutral-300">Rate Limiting:</strong> Implement rate limiting for sensitive endpoints using Vercel Edge Config or Upstash.</li>
                <li><strong className="text-neutral-300">Input Validation:</strong> Always validate and sanitize user input before database queries.</li>
                <li><strong className="text-neutral-300">SQL Injection Prevention:</strong> Use parameterized queries exclusively—never string concatenation.</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 border-l-2 border-sky-500/50 pl-6">
              <span className="text-sky-400">Conclusion</span>
            </h2>
            <div className="text-neutral-400 leading-relaxed space-y-4">
              <p>
                Next.js App Router's API Routes provide a compelling alternative to traditional backend frameworks for
                production applications. By leveraging serverless architecture, we achieved:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-neutral-300">Zero Infrastructure Management:</strong> No servers to provision, scale, or maintain.</li>
                <li><strong className="text-neutral-300">Type Safety:</strong> End-to-end TypeScript from database queries to HTTP responses.</li>
                <li><strong className="text-neutral-300">Simplified Deployment:</strong> <code className="text-sm bg-neutral-900 px-2 py-1 rounded">git push</code> triggers automatic deployment with edge caching.</li>
                <li><strong className="text-neutral-300">Cost Efficiency:</strong> Pay only for execution time with Vercel's serverless pricing.</li>
                <li><strong className="text-neutral-300">Developer Experience:</strong> File-based routing, hot reload, and integrated tooling accelerate iteration.</li>
              </ul>

              <p className="mt-6">
                For Loop, this architecture handles thousands of daily requests across ride creation, booking management,
                payment processing, and real-time chat—all without a dedicated backend team. The patterns demonstrated here
                scale from MVP to production, making Next.js an excellent choice for full-stack TypeScript applications.
              </p>

              <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 my-8">
                <h3 className="text-lg font-medium text-white mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Next.js API Routes eliminate backend framework boilerplate</li>
                  <li>✓ Serverless PostgreSQL (Neon) pairs perfectly with edge functions</li>
                  <li>✓ Clerk provides robust authentication with minimal integration effort</li>
                  <li>✓ Stripe Connect enables marketplace payments without PCI compliance burden</li>
                  <li>✓ Database transactions ensure data consistency in distributed environments</li>
                  <li>✓ Webhook handlers require signature verification and idempotent processing</li>
                  <li>✓ TypeScript across the stack reduces runtime errors and improves DX</li>
                </ul>
              </div>

              <p>
                The complete Loop API codebase demonstrates these patterns in a production environment. For questions or
                deeper technical discussions, feel free to reach out.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-neutral-800">
            <p className="text-neutral-500 text-sm">
              Written by <Link href="/" className="text-neutral-400 hover:text-white transition-colors">Wahab Cide</Link> • October 2025
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              Building Loop — rideshare for university students •
              <a href="https://looprides.dev" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition-colors ml-1">
                looprides.dev
              </a>
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
}
