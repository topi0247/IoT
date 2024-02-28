CREATE TABLE "users" (
  "id" bigtint PRIMARY KEY,
  "uuid" string UNIQUE NOT NULL,
  "name" string NOT NULL,
  "role" integer DEFAULT 'general',
  "email" string UNIQUE NOT NULL,
  "encrypted_password" string NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

CREATE TABLE "notes" (
  "id" bigint PRIMARY KEY,
  "user_id" bigint NOT NULL,
  "uuid" string UNIQUE NOT NULL,
  "title" string,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "note_histories" (
  "id" bigint UNIQUE NOT NULL,
  "note_id" bigint NOT NULL,
  "content" text NOT NULL,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "sticky_prots" (
  "id" bigint PRIMARY KEY,
  "user_id" bigint NOT NULL,
  "title" string,
  "uuid" string UNIQUE NOT NULL,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "sticky_prot_bodies" (
  "id" bigint PRIMARY KEY,
  "sticky_prot_id" bigint NOT NULL,
  "position_x" numeric NOT NULL,
  "position_y" numeric NOT NULL,
  "z_index" integet NOT NULL,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "timeline_prots" (
  "id" bigint PRIMARY KEY,
  "user_id" bigint NOT NULL,
  "uuid" string NOT NULL,
  "title" string,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "timeline_prot_bodies" (
  "id" bigint PRIMARY KEY,
  "timeline_prot_id" bigint NOT NULL,
  "content" string NOT NULL,
  "sort_number" integer NOT NULL
);

ALTER TABLE "notes" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "sticky_prots" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "note_histories" ADD FOREIGN KEY ("note_id") REFERENCES "notes" ("id");

ALTER TABLE "sticky_prot_bodies" ADD FOREIGN KEY ("sticky_prot_id") REFERENCES "sticky_prots" ("id");

ALTER TABLE "timeline_prots" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "timeline_prot_bodies" ADD FOREIGN KEY ("timeline_prot_id") REFERENCES "timeline_prots" ("id");
