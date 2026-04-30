---
title: OktaAuthProfile
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/providers/okta.ts#L12
---

# OktaAuthProfile

## Summary

Profile claims returned by the built-in Okta auth provider.

## Signature

```ts
interface OktaAuthProfile {
  birthdate?: string;
  email?: string;
  email_verified?: boolean;
  family_name?: string;
  gender?: string;
  given_name?: string;
  locale?: string;
  middle_name?: string;
  name?: string;
  nickname?: string;
  phone_number?: string;
  phone_number_verified?: boolean;
  picture?: string;
  preferred_username?: string;
  profile?: string;
  sub: string;
  updated_at?: string | number;
  website?: string;
  zoneinfo?: string;
}

```

## Properties

### birthdate

Birthdate claim for the authenticated user.

### email

Email address claim for the authenticated user.

### email_verified

Indicates whether the provider has verified `email`.

### family_name

Family name claim for the authenticated user.

### gender

Gender claim for the authenticated user.

### given_name

Given name claim for the authenticated user.

### locale

Locale claim for the authenticated user.

### middle_name

Middle name claim for the authenticated user.

### name

Full display name for the authenticated user.

### nickname

Nickname claim for the authenticated user.

### phone_number

Phone number claim for the authenticated user.

### phone_number_verified

Indicates whether the provider has verified `phone_number`.

### picture

Profile picture URL claim for the authenticated user.

### preferred_username

Preferred username claim for the authenticated user.

### profile

Profile URL claim for the authenticated user.

### sub

Stable subject identifier for the authenticated user.

### updated_at

Timestamp claim describing when the profile was last updated.

### website

Personal website URL claim for the authenticated user.

### zoneinfo

Time zone claim for the authenticated user.