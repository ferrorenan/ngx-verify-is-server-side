# NgxVerifyIsServerSide

A simple package to make a verification if is Server Side and optmize the server responsabiliites.

## Prerequisites

Angualr version: `^13.0.0`

## How to Use

1. Install
```
npm i ngx-verify-is-server-side
```
2. Import the service in your `component.ts` file.
```typescript
 constructor(
      private _verifyServerSide: NgxVerifyIsServerSideService
  ) { }
```
3. Make the verification
```typescript
  yourMethod(): void {

    if(this._verifyServerSide.isServerSide){

      return;
    }

    ...
  }
```